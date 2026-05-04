// ========== GitHub 共享数据同步模块 ==========
// 读取：raw.githubusercontent.com（公开，无需认证，全球 CDN）
// 写入：通过 Render 服务端代理（token 保存在服务端环境变量）

var GH_RAW = 'https://raw.githubusercontent.com/VictorGao666/my_CLYZ_reference/main/shared_data';
var GH_WRITE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:5000'
  : 'https://victorgao666.pythonanywhere.com';

// 从 GitHub 拉取某个高校的共享数据
function githubPull(uniId) {
  return fetch(GH_RAW + '/uni_' + uniId + '.json', { cache: 'no-cache' })
    .then(function(r) {
      if (r.status === 200) return r.json();
      if (r.status === 404) return null;
      throw new Error('GitHub read failed: ' + r.status);
    });
}

// 将数据推送到 Render，由 Render 提交到 GitHub
function githubPush(uniId, data) {
  if (!data || Object.keys(data).length === 0) return Promise.resolve();
  return fetch(GH_WRITE + '/api/uni/' + uniId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(function(r) {
    if (!r.ok) throw new Error('Write failed: ' + r.status);
    return r.json();
  });
}

// 启动定时轮询
var _pollIntervals = {};
function githubListen(uniId, onUpdate) {
  var cache = null;

  function poll() {
    githubPull(uniId).then(function(data) {
      if (!data) return;
      var old = JSON.stringify(cache || {});
      var now = JSON.stringify(data);
      if (old !== now) {
        cache = data;
        onUpdate(data);
      }
    }).catch(function() {});
  }

  poll();
  _pollIntervals[uniId] = setInterval(poll, 5000);

  return Promise.resolve(function() {
    clearInterval(_pollIntervals[uniId]);
    delete _pollIntervals[uniId];
  });
}
