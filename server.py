"""
高考信息平台 — 共享数据后端
纯 Python 标准库实现，零外部依赖
启动方式: python3 server.py

环境变量：
  PORT              - 服务端口（默认 5000）
  FIREBASE_API_KEY  - Firebase Web API Key
  FIREBASE_PROJECT_ID - Firebase 项目 ID
"""

import json
import os
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from urllib.parse import urlencode

PORT = int(os.environ.get("PORT", 5000))
FIREBASE_API_KEY = os.environ.get("FIREBASE_API_KEY", "")
FIREBASE_PROJECT_ID = os.environ.get("FIREBASE_PROJECT_ID", "gkclyz")

FIRESTORE = (
    f"https://firestore.googleapis.com/v1/projects/{FIREBASE_PROJECT_ID}"
    f"/databases/(default)/documents/shared_data"
)


def _firestore_fields_to_json(fields):
    """将 Firestore REST API 字段格式转为普通 JSON"""
    if not fields:
        return {}
    result = {}
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


def _json_to_firestore_fields(data):
    """将普通 JSON 转为 Firestore 字段格式"""
    fields = {}
    for key, value in data.items():
        if isinstance(value, dict):
            map_fields = {}
            for k, v in value.items():
                if isinstance(v, int):
                    map_fields[k] = {"integerValue": str(v)}
                else:
                    map_fields[k] = {"stringValue": str(v)}
            fields[key] = {"mapValue": {"fields": map_fields}}
        elif isinstance(value, list):
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


def _firestore_get(doc_id):
    """从 Firestore 读取文档"""
    url = f"{FIRESTORE}/{doc_id}?key={FIREBASE_API_KEY}"
    req = Request(url, headers={"Content-Type": "application/json"})
    try:
        with urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            return _firestore_fields_to_json(data.get("fields", {}))
    except HTTPError as e:
        if e.code == 404:
            return {}
        print(f"Firestore GET error ({e.code}): {e.read().decode()[:200]}")
        return None
    except URLError as e:
        print(f"Firestore connection error: {e}")
        return None


def _firestore_set(doc_id, data):
    """通过 commit API 写入 Firestore 文档"""
    if not FIREBASE_API_KEY:
        print("FIREBASE_API_KEY not set")
        return False

    commit_url = (
        f"https://firestore.googleapis.com/v1/projects/{FIREBASE_PROJECT_ID}"
        f"/databases/(default)/documents:commit?key={FIREBASE_API_KEY}"
    )
    doc_path = f"projects/{FIREBASE_PROJECT_ID}/databases/(default)/documents/shared_data/{doc_id}"
    fields = _json_to_firestore_fields(data)
    field_paths = list(fields.keys())

    body = json.dumps({
        "writes": [{
            "update": {"name": doc_path, "fields": fields},
            "updateMask": {"fieldPaths": field_paths}
        }]
    }).encode("utf-8")

    req = Request(commit_url, data=body, headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urlopen(req, timeout=15) as resp:
            resp.read()
            return True
    except HTTPError as e:
        body_text = e.read().decode()[:300]
        print(f"Firestore write error ({e.code}): {body_text}")

        # 如果文档不存在，尝试用 exists:false 创建
        if e.code == 400 or e.code == 404:
            body2 = json.dumps({
                "writes": [{
                    "update": {"name": doc_path, "fields": fields},
                    "updateMask": {"fieldPaths": field_paths},
                    "currentDocument": {"exists": False}
                }]
            }).encode("utf-8")
            req2 = Request(commit_url, data=body2,
                           headers={"Content-Type": "application/json"}, method="POST")
            try:
                with urlopen(req2, timeout=15) as resp2:
                    resp2.read()
                    return True
            except Exception as e2:
                print(f"Firestore retry error: {e2}")
        return False
    except URLError as e:
        print(f"Firestore connection error: {e}")
        return False


def _firestore_list():
    """列出所有共享数据文档"""
    if not FIREBASE_API_KEY:
        return {}
    url = f"{FIRESTORE}?key={FIREBASE_API_KEY}"
    req = Request(url, headers={"Content-Type": "application/json"})
    try:
        with urlopen(req, timeout=15) as resp:
            result = json.loads(resp.read())
            docs = {}
            for doc in result.get("documents", []):
                name = doc.get("name", "")
                doc_id = name.split("/")[-1] if name else ""
                if doc_id:
                    uid = doc_id.replace("uni_", "")
                    docs[uid] = _firestore_fields_to_json(doc.get("fields", {}))
            return docs
    except Exception as e:
        print(f"Firestore list error: {e}")
        return {}


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
            result = _firestore_get(f"uni_{uni_id}")
            if result is not None:
                self._json(result)
            else:
                self._json({"error": "failed to fetch"}, 502)
            return

        if self.path == "/api/all":
            self._json(_firestore_list())
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

            doc_id = f"uni_{uni_id}"
            existing = _firestore_get(doc_id) or {}
            existing.update(data)

            if _firestore_set(doc_id, existing):
                self._json({"ok": True})
            else:
                self._json({"error": "failed to write"}, 502)
            return

        self._json({"error": "not found"}, 404)


if __name__ == "__main__":
    print(f"Firebase 项目: {FIREBASE_PROJECT_ID}")
    print(f"共享数据服务启动: http://0.0.0.0:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
