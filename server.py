"""
高考信息平台 — 共享数据后端
纯 Python 标准库实现，零外部依赖
启动方式: python3 server.py
"""

import json
import os
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path

DATA_DIR = Path(__file__).parent / "server" / "data"
PORT = int(os.environ.get("PORT", 5000))


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
            self._json(_load(uni_id))
            return

        if self.path == "/api/all":
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
            # 合并写入：保留已有数据，只更新本次提交的字段
            existing = _load(uni_id)
            existing.update(data)
            _save(uni_id, existing)
            self._json({"ok": True})
            return

        self._json({"error": "not found"}, 404)


if __name__ == "__main__":
    print(f"共享数据服务启动: http://0.0.0.0:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
