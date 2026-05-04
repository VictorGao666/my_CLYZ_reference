"""
Flask 版本 — 适配 PythonAnywhere 免费部署
读取/写入 GitHub 共享数据，GITHUB_TOKEN 通过环境变量注入
"""
import json
import os
from flask import Flask, request, jsonify
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
from base64 import b64encode, b64decode

app = Flask(__name__)

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
    url = f"{GH_API}/{path}"
    content = json.dumps(data, ensure_ascii=False, indent=2)
    body = {
        "message": f"Update {path} [skip ci]",
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


@app.after_request
def _cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, PUT, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/api/uni/<int:uni_id>", methods=["GET", "PUT", "OPTIONS"])
def uni(uni_id):
    if request.method == "OPTIONS":
        return "", 204

    if not GITHUB_TOKEN:
        return jsonify({"error": "GITHUB_TOKEN not configured"}), 503

    if request.method == "GET":
        data, _ = _gh_get(f"uni_{uni_id}.json")
        if data is not None:
            return jsonify(data)
        return jsonify({"error": "failed to fetch"}), 502

    if request.method == "PUT":
        data = request.get_json(silent=True)
        if not isinstance(data, dict):
            return jsonify({"error": "body must be a JSON object"}), 400

        path = f"uni_{uni_id}.json"
        existing, sha = _gh_get(path)
        if existing is None:
            return jsonify({"error": "failed to read existing data"}), 502

        existing.update(data)
        if _gh_put(path, existing, sha):
            return jsonify({"ok": True})
        return jsonify({"error": "failed to commit"}), 502


@app.route("/")
def index():
    return jsonify({"status": "ok", "service": "gaokao-share"})
