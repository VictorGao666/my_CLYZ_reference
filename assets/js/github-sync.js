// ========== GitHub 共享数据同步模块 ==========
// 读取：raw.githubusercontent.com（公开，无需认证）
// 写入：api.github.com（用 PAT 提交）

var GH_REPO = 'VictorGao666/my_CLYZ_reference';
var GH_BRANCH = 'main';
var GH_RAW = 'https://raw.githubusercontent.com/' + GH_REPO + '/' + GH_BRANCH + '/shared_data';
var GH_API = 'https://api.github.com/repos/' + GH_REPO + '/contents/shared_data';
var GH_TOKEN = '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';

// 缓存：避免短时间内重复请求
var _ghCache = {};
var _ghPollIntervals = {};

// ========== 读取 ==========

// 从 GitHub 拉取某个高校的共享数据
function githubPull(uniId) {
  var url = GH_RAW + '/uni_' + uniId + '.json';
  return fetch(url, { cache: 'no-cache' })
    .then(function(r) {
      if (r.status === 200) return r.json();
      if (r.status === 404) return null;
      throw new Error('GitHub read failed: ' + r.status);
    });
}

// ========== 写入 ==========

// 将数据推送到 GitHub（直接 commit）
function githubPush(uniId, data) {
  if (!data || Object.keys(data).length === 0) return Promise.resolve();

  var path = 'shared_data/uni_' + uniId + '.json';
  var url = GH_API + '/uni_' + uniId + '.json';

  // 先获取现有文件（拿到 sha 用于更新）
  return fetch(url, {
    headers: { 'Authorization': 'Bearer ' + GH_TOKEN }
  })
  .then(function(r) {
    if (r.status === 200) return r.json().then(function(d) { return d.sha; });
    if (r.status === 404) return null;
    throw new Error('GitHub get failed: ' + r.status);
  })
  .then(function(sha) {
    // 如果有旧数据，合并
    if (sha && _ghCache[uniId]) {
      var merged = {};
      Object.keys(_ghCache[uniId]).forEach(function(k) { merged[k] = _ghCache[uniId][k]; });
      Object.keys(data).forEach(function(k) { merged[k] = data[k]; });
      data = merged;
    }

    var content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
    var body = {
      message: 'Update shared data for uni_' + uniId + ' [skip ci]',
      content: content,
      branch: GH_BRANCH
    };
    if (sha) body.sha = sha;

    return fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + GH_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  })
  .then(function(r) {
    if (!r.ok) throw new Error('GitHub write failed: ' + r.status);
    return r.json();
  });
}

// ========== 轮询监听 ==========

// 启动定时轮询（替代 Firebase onSnapshot）
function githubListen(uniId, onUpdate) {
  // 先拉取一次
  githubPull(uniId).then(function(data) {
    if (data) {
      _ghCache[uniId] = data;
      onUpdate(data);
    }
  }).catch(function() {});

  // 每 5 秒轮询
  _ghPollIntervals[uniId] = setInterval(function() {
    githubPull(uniId).then(function(data) {
      if (!data) return;
      var old = JSON.stringify(_ghCache[uniId] || {});
      var now = JSON.stringify(data);
      if (old !== now) {
        _ghCache[uniId] = data;
        onUpdate(data);
      }
    }).catch(function() {});
  }, 5000);

  return Promise.resolve(function() {
    clearInterval(_ghPollIntervals[uniId]);
    delete _ghPollIntervals[uniId];
  });
}
