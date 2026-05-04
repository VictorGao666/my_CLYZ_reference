"""
高考信息平台 — 共享数据后端
接收前端写入请求，使用 GitHub API 提交到仓库
纯 Python 标准库，零外部依赖

环境变量：
  PORT         - 服务端口（默认 5000）
  GITHUB_TOKEN - GitHub PAT（需要 Contents 读写权限）
"""

import json
import os
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from base64 import b64encode, b64decode

PORT = int(os.environ.get("PORT", 5000))
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
GH_REPO = os.environ.get("GITHUB_REPO", "VictorGao666/my_CLYZ_reference")
GH_BRANCH = os.environ.get("GITHUB_BRANCH", "main")
GH_API = f"https://api.github.com/repos/{GH_REPO}/contents/shared_data"


def _gh_headers():
    return {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "gaokao-share/1.0",
    }


def _gh_get(path):
    """读取 GitHub 文件，返回 (data, sha)"""
    url = f"{GH_API}/{path}"
    req = Request(url, headers=_gh_headers())
    try:
        with urlopen(req, timeout=20) as resp:
            d = json.loads(resp.read())
            return json.loads(b64decode(d["content"])), d.get("sha")
    except HTTPError as e:
        if e.code == 404:
            return {}, None
        print(f"GH GET error {e.code}: {e.read().decode()[:200]}")
        return None, None
    except URLError as e:
        print(f"GH network error: {e}")
        return None, None


def _gh_put(path, data, sha=None):
    """写入 GitHub 文件"""
    url = f"{GH_API}/{path}"
    content = json.dumps(data, ensure_ascii=False, indent=2)
    body = {
        "message": f"更新 {path} [skip ci]",
        "content": b64encode(content.encode("utf-8")).decode("ascii"),
        "branch": GH_BRANCH,
    }
    if sha:
        body["sha"] = sha

    req = Request(url, data=json.dumps(body).encode("utf-8"),
                  headers=_gh_headers(), method="PUT")
    try:
        with urlopen(req, timeout=20) as resp:
            resp.read()
            return True
    except Exception as e:
        print(f"GH PUT error: {e}")
        return False


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
            if not GITHUB_TOKEN:
                self._json({"error": "GITHUB_TOKEN not configured"}, 503)
                return
            data, _ = _gh_get(f"uni_{uni_id}.json")
            if data is not None:
                self._json(data)
            else:
                self._json({"error": "failed to fetch"}, 502)
            return

        if self.path == "/api/all":
            self._json({"error": "not implemented"}, 501)
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
            if not GITHUB_TOKEN:
                self._json({"error": "GITHUB_TOKEN not configured"}, 503)
                return

            path = f"uni_{uni_id}.json"
            existing, sha = _gh_get(path)
            if existing is None:
                self._json({"error": "failed to read existing data"}, 502)
                return

            existing.update(data)
            if _gh_put(path, existing, sha):
                self._json({"ok": True})
            else:
                self._json({"error": "failed to commit"}, 502)
            return

        self._json({"error": "not found"}, 404)


if __name__ == "__main__":
    if GITHUB_TOKEN:
        print(f"GitHub API 已配置 (repo: {GH_REPO})")
    else:
        print("GITHUB_TOKEN 未设置 — 写入功能不可用")
    print(f"服务启动: http://0.0.0.0:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
