"""
高考信息平台 — 共享数据后端
使用 Firebase Firestore 作为持久化存储（数据在 Render 重启后不丢失）
纯 Python 标准库实现，零外部依赖
启动方式: python3 server.py

环境变量：
  FIREBASE_PROJECT_ID  - Firebase 项目 ID（设置后启用 Firestore 持久化）
  FIREBASE_API_KEY     - Firebase Web API Key（用于 REST API 认证）
  PORT                 - 服务端口（默认 5000）
"""

import json
import os
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from urllib.parse import urlencode

PORT = int(os.environ.get("PORT", 5000))
FIREBASE_PROJECT_ID = os.environ.get("FIREBASE_PROJECT_ID", "")
FIREBASE_API_KEY = os.environ.get("FIREBASE_API_KEY", "")

# 本地文件回退目录
DATA_DIR = Path(__file__).parent / "server" / "data"

FIRESTORE_REST = (
    f"https://firestore.googleapis.com/v1/projects/{FIREBASE_PROJECT_ID}"
    f"/databases/(default)/documents/shared_data"
) if FIREBASE_PROJECT_ID else ""


def _use_firestore():
    return bool(FIREBASE_PROJECT_ID and FIREBASE_API_KEY)


def _firestore_request(method, doc_id, body=None):
    """通过 Firebase REST API 读写 Firestore"""
    url = f"{FIRESTORE_REST}/{doc_id}?key={FIREBASE_API_KEY}"
    headers = {"Content-Type": "application/json"}
    data = None

    if method == "GET":
        # Firestore REST GET 返回完整的文档对象
        pass
    elif method == "PATCH":
        # 使用 PATCH 进行合并写入
        url += "&" + urlencode({
            "updateMask.fieldPaths": list(body.keys()) if body else [],
            "currentDocument.exists": "false"
        })
        data = json.dumps({"fields": _to_firestore_fields(body)}).encode("utf-8")
    elif method == "PUT":
        # 需要先检查是否存在
        pass

    req = Request(url, data=data, headers=headers, method=method)
    try:
        with urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read())
            return result
    except HTTPError as e:
        if e.code == 404:
            return None
        print(f"Firestore HTTP {e.code}: {e.read().decode()[:200]}")
        return None
    except URLError as e:
        print(f"Firestore connection error: {e}")
        return None


def _to_firestore_fields(data):
    """将普通 JSON 转换为 Firestore 字段格式"""
    fields = {}
    for key, value in data.items():
        if isinstance(value, dict) and not key.startswith("_"):
            # map 类型
            map_fields = {}
            for k, v in value.items():
                if isinstance(v, int):
                    map_fields[k] = {"integerValue": str(v)}
                else:
                    map_fields[k] = {"stringValue": str(v)}
            fields[key] = {"mapValue": {"fields": map_fields}}
        elif isinstance(value, list):
            # array 类型
            values = []
            for item in value:
                if isinstance(item, dict):
                    item_fields = {}
                    for ik, iv in item.items():
                        item_fields[ik] = {"stringValue": str(iv)}
                    values.append({"mapValue": {"fields": item_fields}})
                else:
                    values.append({"stringValue": str(item)})
            fields[key] = {"arrayValue": {"values": values}}
        elif isinstance(value, int):
            fields[key] = {"integerValue": str(value)}
        else:
            fields[key] = {"stringValue": str(value) if value is not None else ""}
    return fields


def _from_firestore_fields(fields):
    """将 Firestore 字段格式转换为普通 JSON"""
    result = {}
    if not fields:
        return result
    for key, value in fields.items():
        if "mapValue" in value:
            inner = value["mapValue"].get("fields", {})
            result[key] = {}
            for ik, iv in inner.items():
                if "integerValue" in iv:
                    result[key][ik] = int(iv["integerValue"])
                else:
                    result[key][ik] = iv.get("stringValue", "")
        elif "arrayValue" in value:
            result[key] = []
            for item in value["arrayValue"].get("values", []):
                if "mapValue" in item:
                    obj = {}
                    for ik, iv in item["mapValue"].get("fields", {}).items():
                        obj[ik] = iv.get("stringValue", "")
                    result[key].append(obj)
                else:
                    result[key].append(item.get("stringValue", ""))
        elif "integerValue" in value:
            result[key] = int(value["integerValue"])
        else:
            result[key] = value.get("stringValue", "")
    return result


def _firestore_get(doc_id):
    """从 Firestore 读取文档"""
    result = _firestore_request("GET", doc_id)
    if not result:
        return {}
    fields = result.get("fields", {})
    return _from_firestore_fields(fields)


def _firestore_set(doc_id, data):
    """写入 Firestore 文档（使用 set + merge）"""
    url = f"{FIRESTORE_REST}/{doc_id}?key={FIREBASE_API_KEY}"
    # 使用 commit API 进行 merge 写入
    commit_url = (
        f"https://firestore.googleapis.com/v1/projects/{FIREBASE_PROJECT_ID}"
        f"/databases/(default)/documents:commit?key={FIREBASE_API_KEY}"
    )
    # 构建 writes
    body = json.dumps({
        "writes": [{
            "update": {
                "name": f"projects/{FIREBASE_PROJECT_ID}/databases/(default)/documents/shared_data/{doc_id}"
            },
            "updateMask": {
                "fieldPaths": list(data.keys())
            },
            "currentDocument": {"exists": False}
        }]
    }).encode("utf-8")
    req = Request(commit_url, data=body, headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urlopen(req, timeout=10) as resp:
            return json.loads(resp.read())
    except HTTPError as e:
        body_text = e.read().decode()[:300]
        print(f"Firestore write error ({e.code}): {body_text}")
        # 如果文档已存在，尝试不带 exists 条件的写入
        if "exists" in body_text.lower():
            body = json.dumps({
                "writes": [{
                    "update": {
                        "name": f"projects/{FIREBASE_PROJECT_ID}/databases/(default)/documents/shared_data/{doc_id}"
                    },
                    "updateMask": {
                        "fieldPaths": list(data.keys())
                    }
                }]
            }).encode("utf-8")
            req2 = Request(commit_url, data=body, headers={"Content-Type": "application/json"}, method="POST")
            try:
                with urlopen(req2, timeout=10) as resp2:
                    return json.loads(resp2.read())
            except Exception as e2:
                print(f"Firestore retry write error: {e2}")
                return None
        return None
    except URLError as e:
        print(f"Firestore connection error: {e}")
        return None


def _firestore_list_all():
    """列出所有共享数据文档"""
    if not _use_firestore():
        return {}
    url = f"{FIRESTORE_REST}?key={FIREBASE_API_KEY}"
    req = Request(url, headers={"Content-Type": "application/json"}, method="GET")
    try:
        with urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read())
            docs = {}
            for doc in result.get("documents", []):
                name = doc.get("name", "")
                doc_id = name.split("/")[-1] if name else ""
                if doc_id:
                    uid = doc_id.replace("uni_", "")
                    docs[uid] = _from_firestore_fields(doc.get("fields", {}))
            return docs
    except Exception as e:
        print(f"Firestore list error: {e}")
        return {}


# ========== 本地文件回退 ==========

def _path(uni_id):
    return DATA_DIR / f"{uni_id}.json"


def _load(uni_id):
    p = _path(uni_id)
    if p.exists():
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def _save(uni_id, data):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(_path(uni_id), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# ========== HTTP 处理器 ==========

class Handler(BaseHTTPRequestHandler):

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, PUT, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", len(body))
        self.end_headers()
        self.wfile.write(body)

    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0))
        if length == 0:
            return None
        return json.loads(self.rfile.read(length))

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        m = re.match(r"^/api/uni/(\d+)$", self.path)
        if m:
            uni_id = int(m.group(1))
            if _use_firestore():
                self._json(_firestore_get(f"uni_{uni_id}"))
            else:
                self._json(_load(uni_id))
            return

        if self.path == "/api/all":
            if _use_firestore():
                self._json(_firestore_list_all())
            else:
                result = {}
                if DATA_DIR.exists():
                    for p in DATA_DIR.glob("*.json"):
                        uid = p.stem
                        with open(p, "r", encoding="utf-8") as f:
                            result[uid] = json.load(f)
                self._json(result)
            return

        self._json({"error": "not found"}, 404)

    def do_PUT(self):
        m = re.match(r"^/api/uni/(\d+)$", self.path)
        if m:
            uni_id = int(m.group(1))
            data = self._read_body()
            if not isinstance(data, dict):
                self._json({"error": "body must be a JSON object"}, 400)
                return

            if _use_firestore():
                _firestore_set(f"uni_{uni_id}", data)
            else:
                existing = _load(uni_id)
                existing.update(data)
                _save(uni_id, existing)
            self._json({"ok": True})
            return

        self._json({"error": "not found"}, 404)


if __name__ == "__main__":
    if _use_firestore():
        print(f"Firestore 持久化已启用 (project: {FIREBASE_PROJECT_ID})")
    else:
        print("使用本地文件存储（数据在重启后丢失）")
        print("设置 FIREBASE_PROJECT_ID 和 FIREBASE_API_KEY 环境变量以启用 Firestore 持久化")
    print(f"共享数据服务启动: http://0.0.0.0:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
