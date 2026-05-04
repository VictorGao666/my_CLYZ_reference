"""
高考信息平台 — 共享数据后端
使用 GitHub 仓库作为持久化存储（数据通过 GitHub Pages 分发）
纯 Python 标准库实现，零外部依赖
启动方式: python3 server.py

环境变量：
  GITHUB_TOKEN  - GitHub Personal Access Token（需要 repo contents 读写权限）
  GITHUB_REPO   - 仓库路径（默认 VictorGao666/my_CLYZ_reference）
  GITHUB_BRANCH - 分支名（默认 main）
  PORT          - 服务端口（默认 5000）
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
GITHUB_REPO = os.environ.get("GITHUB_REPO", "VictorGao666/my_CLYZ_reference")
GITHUB_BRANCH = os.environ.get("GITHUB_BRANCH", "main")

GH_API = f"https://api.github.com/repos/{GITHUB_REPO}/contents"
GH_RAW = f"https://raw.githubusercontent.com/{GITHUB_REPO}/{GITHUB_BRANCH}"

DATA_DIR = "shared_data"

# 内存缓存：避免短时间内重复请求 GitHub API
_cache = {}
_cache_time = {}


def _gh_headers():
    return {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "gaokao-share/1.0",
        "X-GitHub-Api-Version": "2022-11-28",
    }


def _gh_get(path):
    """从 GitHub API 读取文件内容"""
    url = f"{GH_API}/{DATA_DIR}/{path}"
    req = Request(url, headers=_gh_headers())
    try:
        with urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            content = b64decode(data["content"]).decode("utf-8")
            result = json.loads(content)
            _cache[path] = result
            return result, data.get("sha")
    except HTTPError as e:
        if e.code == 404:
            return {}, None
        body = e.read().decode()[:200]
        print(f"GitHub GET error ({e.code}): {body}")
        return None, None
    except URLError as e:
        print(f"GitHub network error: {e}")
        return None, None


def _gh_put(path, data, sha=None):
    """通过 GitHub API 创建或更新文件（即提交到仓库）"""
    url = f"{GH_API}/{DATA_DIR}/{path}"
    content = json.dumps(data, ensure_ascii=False, indent=2)
    body = {
        "message": f"更新 {path} 的共享数据",
        "content": b64encode(content.encode("utf-8")).decode("ascii"),
        "branch": GITHUB_BRANCH,
    }
    if sha:
        body["sha"] = sha

    req = Request(url, data=json.dumps(body).encode("utf-8"), headers=_gh_headers(), method="PUT")
    try:
        with urlopen(req, timeout=15) as resp:
            result = json.loads(resp.read())
            new_sha = result.get("content", {}).get("sha")
            # 更新缓存
            _cache[path] = data
            return True, new_sha
    except HTTPError as e:
        body_text = e.read().decode()[:300]
        print(f"GitHub PUT error ({e.code}): {body_text}")
        return False, None
    except URLError as e:
        print(f"GitHub network error: {e}")
        return False, None


def _gh_list():
    """列出 shared_data 目录下的所有文件"""
    url = f"{GH_API}/{DATA_DIR}"
    req = Request(url, headers=_gh_headers())
    try:
        with urlopen(req, timeout=15) as resp:
            files = json.loads(resp.read())
            result = {}
            for f in files:
                name = f["name"]
                if name.endswith(".json"):
                    uid = name.replace("uni_", "").replace(".json", "")
                    data, _ = _gh_get(name)
                    if data:
                        result[uid] = data
            return result
    except HTTPError as e:
        if e.code == 404:
            return {}
        print(f"GitHub list error ({e.code})")
        return {}
    except URLError as e:
        print(f"GitHub network error: {e}")
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
            path = f"uni_{uni_id}.json"

            if GITHUB_TOKEN:
                data, _ = _gh_get(path)
                if data is not None:
                    self._json(data)
                else:
                    self._json({"error": "failed to fetch"}, 502)
            else:
                self._json({"error": "GITHUB_TOKEN not configured"}, 503)
            return

        if self.path == "/api/all":
            if GITHUB_TOKEN:
                result = _gh_list()
                self._json(result)
            else:
                self._json({"error": "GITHUB_TOKEN not configured"}, 503)
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
            # 先读取现有数据以获取 sha，然后合并
            existing, sha = _gh_get(path)
            if existing is None:
                self._json({"error": "failed to read existing data"}, 502)
                return

            if existing:
                existing.update(data)
            else:
                existing = data

            ok, new_sha = _gh_put(path, existing, sha)
            if ok:
                self._json({"ok": True})
            else:
                self._json({"error": "failed to commit"}, 502)
            return

        self._json({"error": "not found"}, 404)


if __name__ == "__main__":
    if GITHUB_TOKEN:
        print(f"GitHub 持久化已启用 (repo: {GITHUB_REPO})")
    else:
        print("GITHUB_TOKEN 未设置 — 服务无法读写数据")
        print("请在 Render 环境变量中设置 GITHUB_TOKEN")
    print(f"共享数据服务启动: http://0.0.0.0:{PORT}")
    HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
