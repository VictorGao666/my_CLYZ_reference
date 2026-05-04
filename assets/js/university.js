// ========== 高校详情页逻辑 ==========

function getUniversityId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function getUniversity() {
  const id = getUniversityId();
  return universities.find(u => u.id === id);
}

// ========== 共享数据同步（Firebase Firestore 优先，REST 回退）==========

var SYNC_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:5000'
  : 'https://gaokao-share.onrender.com';

var _syncMode = null;       // 由 _initSync() 确定：'firebase' | 'rest'
var _firebaseUnsubscribe = null;
var _restPollInterval = null;
var _initialSyncDone = false;

function _syncStatusEl() {
  return document.getElementById('sync-status');
}

function _setSyncStatus(text, ok) {
  var el = _syncStatusEl();
  if (!el) return;
  el.textContent = text;
  el.className = ok ? 'text-xs text-green-400' : 'text-xs text-blue-200';
  var btn = document.getElementById('sync-refresh-btn');
  if (btn) btn.classList.toggle('hidden', ok);
}

// 将远程数据写入 localStorage，有更新则重渲染
function _applyRemoteData(uniId, data) {
  if (!data || Object.keys(data).length === 0) return false;
  var hasUpdate = false;
  if (data.scores) {
    Object.keys(data.scores).forEach(function(k) {
      var key = 'uni_score_' + uniId + '_' + k;
      var oldVal = localStorage.getItem(key);
      var newVal = String(data.scores[k]);
      if (oldVal !== newVal) { hasUpdate = true; }
      localStorage.setItem(key, newVal);
    });
  }
  if (data.schools) {
    var oldSchools = localStorage.getItem('uni_schools_' + uniId);
    var newSchools = JSON.stringify({ version: DATA_VERSION, schools: data.schools });
    if (oldSchools !== newSchools) { hasUpdate = true; }
    localStorage.setItem('uni_schools_' + uniId, newSchools);
  }
  if (data.order) {
    var oldOrder = localStorage.getItem('uni_order_' + uniId);
    var newOrder = JSON.stringify(data.order);
    if (oldOrder !== newOrder) { hasUpdate = true; }
    localStorage.setItem('uni_order_' + uniId, newOrder);
  }
  if (data.notes !== undefined) {
    var oldNotes = localStorage.getItem('uni_notes_' + uniId);
    if (oldNotes !== data.notes) { hasUpdate = true; }
    localStorage.setItem('uni_notes_' + uniId, data.notes);
  }
  if (data.admissionNotes) {
    Object.keys(data.admissionNotes).forEach(function(k) {
      var key = 'uni_adm_note_' + uniId + '_' + k;
      var oldVal = localStorage.getItem(key);
      if (oldVal !== data.admissionNotes[k]) { hasUpdate = true; }
      localStorage.setItem(key, data.admissionNotes[k]);
    });
  }
  if (hasUpdate) renderUniversityDetail();
  return hasUpdate;
}

// ========== 初始化：探测 Firebase 是否可用，确定同步通道 ==========

function _initSync(uniId) {
  if (_initialSyncDone) return;
  _initialSyncDone = true;

  loadFirebaseSDK().then(function() {
    // Firebase SDK 已就绪，尝试首次拉取
    return firebasePull(uniId).then(function(data) {
      if (data) _applyRemoteData(uniId, data);
      return true;
    });
  }).then(function(ok) {
    // Firebase 通道可用，设置实时监听
    _syncMode = 'firebase';
    _setSyncStatus('Firestore 实时同步中', true);
    firebaseListen(uniId, function(data) {
      _applyRemoteData(uniId, data);
    }).then(function(unsub) {
      _firebaseUnsubscribe = unsub;
    });
  }).catch(function(err) {
    // Firebase 不可用 → 回退 REST 轮询
    console.warn('Firebase 不可用，使用 REST 回退:', err && err.message);
    _syncMode = 'rest';
    _switchToRest(uniId);
  });
}

function _switchToRest(uniId) {
  stopRestPolling();
  // 首次拉取
  fetch(SYNC_BASE + '/api/uni/' + uniId)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && Object.keys(data).length > 0) _applyRemoteData(uniId, data);
    })
    .catch(function() {});
  // 定时轮询
  _restPollInterval = setInterval(function() {
    fetch(SYNC_BASE + '/api/uni/' + uniId)
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data && Object.keys(data).length > 0) _applyRemoteData(uniId, data);
      })
      .catch(function() {});
  }, 10000);
  _setSyncStatus('REST 轮询中（10s）', true);
}

function stopRestPolling() {
  if (_restPollInterval) { clearInterval(_restPollInterval); _restPollInterval = null; }
}

// ========== 统一入口 ==========

function syncPull(uniId) {
  if (!_syncMode) { _initSync(uniId); return; }
  if (_syncMode === 'firebase') {
    loadFirebaseSDK().then(function() {
      return firebasePull(uniId);
    }).then(function(data) {
      if (data) _applyRemoteData(uniId, data);
    }).catch(function() {});
    return;
  }
  // REST 模式
  fetch(SYNC_BASE + '/api/uni/' + uniId)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && Object.keys(data).length > 0) _applyRemoteData(uniId, data);
    })
    .catch(function() {});
}

function syncPush(uniId) {
  var data = _gatherUniData(uniId);
  if (Object.keys(data).length === 0) return;

  if (_syncMode === 'firebase') {
    firebasePush(uniId, data).then(function() {
      _setSyncStatus('Firestore 已同步', true);
    }).catch(function(err) {
      console.warn('Firebase push 失败，尝试 REST:', err && err.message);
      _pushViaRest(uniId, data);
    });
  } else {
    _pushViaRest(uniId, data);
  }
}

function _pushViaRest(uniId, data) {
  fetch(SYNC_BASE + '/api/uni/' + uniId, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(function(r) { return r.json(); })
  .then(function() { _setSyncStatus('REST 已同步', true); })
  .catch(function() { _setSyncStatus('离线（仅本地存储）', false); });
}

function startSyncLoop(uniId) {
  _initSync(uniId);
}

function stopSyncLoop() {
  if (_firebaseUnsubscribe) { _firebaseUnsubscribe(); _firebaseUnsubscribe = null; }
  stopRestPolling();
}

function manualRefresh() {
  var uniId = getUniversityId();
  _setSyncStatus('刷新中...', false);
  syncPull(uniId);
}

// ========== 本地数据收集（与同步模式无关）==========

function _gatherUniData(uniId) {
  var data = {};

  // scores
  var scores = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var prefix = 'uni_score_' + uniId + '_';
    if (key && key.indexOf(prefix) === 0) {
      var catKey = key.substring(prefix.length);
      scores[catKey] = parseInt(localStorage.getItem(key), 10);
    }
  }
  if (Object.keys(scores).length > 0) data.scores = scores;

  // schools
  var schoolsRaw = localStorage.getItem('uni_schools_' + uniId);
  if (schoolsRaw) {
    try {
      var parsed = JSON.parse(schoolsRaw);
      data.schools = parsed.schools || parsed;
    } catch(e) {}
  }

  // order
  var orderRaw = localStorage.getItem('uni_order_' + uniId);
  if (orderRaw) {
    try { data.order = JSON.parse(orderRaw); } catch(e) {}
  }

  // notes
  var notesRaw = localStorage.getItem('uni_notes_' + uniId);
  if (notesRaw !== null && notesRaw !== undefined) data.notes = notesRaw;

  // admissionNotes
  var admissionNotes = {};
  for (var j = 0; j < localStorage.length; j++) {
    var k = localStorage.key(j);
    var pfx = 'uni_adm_note_' + uniId + '_';
    if (k && k.indexOf(pfx) === 0) {
      var ck = k.substring(pfx.length);
      admissionNotes[ck] = localStorage.getItem(k);
    }
  }
  if (Object.keys(admissionNotes).length > 0) data.admissionNotes = admissionNotes;

  return data;
}

function assessmentBadge(grade) {
  if (!grade) return '<span class="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-400">待公布</span>';
  const colors = {
    'A+': 'bg-red-600 text-white',
    'A': 'bg-red-500 text-white',
    'A-': 'bg-orange-500 text-white',
    'B+': 'bg-yellow-500 text-white',
    'B': 'bg-yellow-400 text-gray-800',
    'B-': 'bg-lime-500 text-white',
    'C+': 'bg-green-500 text-white',
    'C': 'bg-teal-500 text-white',
    'C-': 'bg-cyan-500 text-white'
  };
  const cls = colors[grade] || 'bg-gray-300 text-gray-600';
  return `<span class="text-xs px-2 py-0.5 rounded font-semibold ${cls}">${grade}</span>`;
}

// ========== 排序与分数编辑 ==========

function makeCatKey(c) {
  return (c.subject || '') + '|' + (c.name || '');
}

function getCustomScoreKey(uniId, catKey) {
  return 'uni_score_' + uniId + '_' + encodeURIComponent(catKey);
}

function getCustomScore(uniId, c) {
  const key = getCustomScoreKey(uniId, makeCatKey(c));
  const val = localStorage.getItem(key);
  return val ? parseInt(val, 10) : null;
}

// ========== 自定义学院数据（localStorage）==========

function getSchoolsKey(uniId) {
  return 'uni_schools_' + uniId;
}

function getCustomSchools(uniId) {
  try {
    const saved = localStorage.getItem(getSchoolsKey(uniId));
    if (!saved) return null;
    const data = JSON.parse(saved);
    if (data.version !== DATA_VERSION) {
      localStorage.removeItem(getSchoolsKey(uniId));
      return null;
    }
    return data.schools;
  } catch(e) { return null; }
}

function saveCustomSchools(uniId, schools) {
  localStorage.setItem(getSchoolsKey(uniId), JSON.stringify({ version: DATA_VERSION, schools }));
  syncPush(uniId);
}

// 获取学院数据：自定义数据优先，否则从原始数据中扁平化学科下的专业
function getSchoolsData(uni) {
  const custom = getCustomSchools(uni.id);
  if (custom) return custom;
  // 从 discipline 结构中提取：学院 → 专业（扁平化）
  return uni.schools.map(school => ({
    name: school.name,
    majors: school.disciplines.reduce((arr, d) => arr.concat(d.majors), [])
  }));
}

// ========== 渲染详情页 ==========

function renderUniversityDetail() {
  const uni = getUniversity();
  if (!uni) {
    document.getElementById('detail-content').innerHTML = `
      <div class="text-center py-20">
        <p class="text-2xl text-gray-400 mb-4">未找到该高校</p>
        <a href="universities.html" class="text-blue-600 hover:underline">返回高校索引</a>
      </div>`;
    return;
  }

  document.getElementById('uni-name').textContent = uni.name;
  document.getElementById('uni-name-title').textContent = uni.name;
  document.getElementById('uni-badge').textContent = `985工程${uni.batch}`;
  document.title = `${uni.name} — 中国高等教育信息平台`;

  if (!uni.hasDetail && uni.hasDetail !== undefined) {
    document.getElementById('detail-content').innerHTML = `
      <div class="text-center py-20">
        <p class="text-2xl text-gray-400 mb-4">详细数据整理中</p>
        <p class="text-gray-500">${uni.name}的学院、专业评估与招生计划数据正在完善中，敬请期待。</p>
        <a href="universities.html" class="inline-block mt-6 text-blue-600 hover:underline">返回高校索引</a>
      </div>`;
    return;
  }
  if (!uni.schools) {
    document.getElementById('detail-content').innerHTML = `
      <div class="text-center py-20">
        <p class="text-2xl text-gray-400 mb-4">详细数据整理中</p>
        <p class="text-gray-500">${uni.name}的学院、专业评估与招生计划数据正在完善中，敬请期待。</p>
        <a href="universities.html" class="inline-block mt-6 text-blue-600 hover:underline">返回高校索引</a>
      </div>`;
    return;
  }

  let html = '';

  html += `
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100">
      <h2 class="text-lg font-bold text-gray-900 mb-4">基本信息</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div><span class="text-gray-500">所在地：</span><span class="text-gray-900 font-medium">${uni.province} · ${uni.city}</span></div>
        <div><span class="text-gray-500">批次：</span><span class="text-gray-900 font-medium">985工程${uni.batch}</span></div>
        <div><span class="text-gray-500">学院数：</span><span class="text-gray-900 font-medium" id="schools-count">${getSchoolsData(uni).length} 个</span></div>
        <div><span class="text-gray-500">定位：</span><span class="text-gray-900 font-medium">${uni.intro}</span></div>
      </div>
    </div>`;

  const schoolsData = getSchoolsData(uni);
  const hasCustom = !!getCustomSchools(uni.id);

  html += `<h2 class="text-xl font-bold text-gray-900 mb-4">各学院及本科专业</h2>`;
  html += `<div class="flex gap-2 mb-4 flex-wrap">
    <button onclick="toggleAllSchools(true)" class="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium transition-colors">展开全部学院</button>
    <button onclick="toggleAllSchools(false)" class="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium transition-colors">折叠全部学院</button>
    <button onclick="addSchool(${uni.id})" class="px-3 py-1.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 text-sm font-medium transition-colors">+ 添加学院</button>
    <button onclick="resetSchoolsData(${uni.id})" class="px-3 py-1.5 text-gray-400 hover:text-red-500 text-sm underline transition-colors ${hasCustom ? '' : 'hidden'}" id="reset-schools-btn">恢复默认学院数据</button>
  </div>`;

  html += `<div class="space-y-3 mb-10" id="schools-container">`;

  schoolsData.forEach((school, si) => {
    html += `
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden school-item" data-school-index="${si}">
        <div class="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <button onclick="toggleSchool(this)" class="flex items-center gap-3 flex-1 text-left min-w-0">
            <span class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">${si + 1}</span>
            <span class="text-lg font-bold text-gray-900 school-name-text truncate" contenteditable="true" data-school-idx="${si}" onblur="renameSchool(event, ${uni.id})">${school.name}</span>
            <span class="text-xs text-gray-400 flex-shrink-0">${school.majors.length} 个专业</span>
          </button>
          <div class="flex items-center gap-1 ml-2 flex-shrink-0">
            <button onclick="event.stopPropagation(); deleteSchool(${si}, ${uni.id})" title="删除学院" class="text-gray-300 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
        <div class="school-body hidden">
          <div class="px-4 pb-4">
            <div class="flex flex-wrap gap-1.5 items-start">
              ${school.majors.length > 0 ? school.majors.map((m, mi) => `
                <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium inline-flex items-center gap-1 group">
                  <span contenteditable="true" data-school-idx="${si}" data-major-idx="${mi}" onblur="renameMajor(event, ${uni.id})" class="outline-none focus:bg-yellow-100 rounded px-0.5 -mx-0.5 cursor-text">${m}</span>
                  <button onclick="deleteMajor(${si}, ${mi}, ${uni.id})" title="删除专业" class="text-gray-300 hover:text-red-500 transition-colors leading-none flex-shrink-0">&times;</button>
                </span>
              `).join('') : '<span class="text-xs text-gray-400">暂无专业</span>'}
              <button onclick="addMajor(${si}, ${uni.id})" title="添加专业" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 transition-colors text-sm font-bold leading-none">+</button>
            </div>
          </div>
        </div>
      </div>`;
  });

  if (schoolsData.length === 0) {
    html += `<div class="text-center py-8 text-gray-400">暂无学院数据，点击上方"＋ 添加学院"按钮添加。</div>`;
  }

  html += `</div>`;

  // === 招生计划 ===
  if (uni.admission) {
    const uniId = uni.id;
    const orderKey = 'uni_order_' + uniId;

    let customOrder = null;
    try {
      const saved = localStorage.getItem(orderKey);
      if (saved) customOrder = JSON.parse(saved);
    } catch (e) {}

    const defaultSorted = [...uni.admission.categories].sort((a, b) => {
      const subjA = (a.subject || '').includes('历史') ? 0 : 1;
      const subjB = (b.subject || '').includes('历史') ? 0 : 1;
      if (subjA !== subjB) return subjA - subjB;
      const scoreA = getCustomScore(uniId, a) || a.score || 0;
      const scoreB = getCustomScore(uniId, b) || b.score || 0;
      return scoreB - scoreA;
    });

    let sorted;
    if (customOrder && customOrder.length === defaultSorted.length) {
      sorted = customOrder.map(key => defaultSorted.find(c => makeCatKey(c) === key)).filter(Boolean);
      if (sorted.length !== defaultSorted.length) sorted = defaultSorted;
    } else {
      sorted = defaultSorted;
    }

    html += `<h2 class="text-xl font-bold text-gray-900 mb-2">${uni.admission.year}年 ${uni.admission.province}招生计划</h2>`;
    html += `<p class="text-xs text-gray-400 mb-4">拖动 ↑↓ 按钮调整顺序，点击分数直接编辑。修改自动保存至本地浏览器。</p>`;
    html += `<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-10">
      <div class="p-4 border-b border-gray-100">
        <div class="flex items-center gap-4 flex-wrap">
          <span class="text-sm text-gray-500">筛选：</span>
          <input id="admission-filter" type="text" placeholder="输入专业/大类名称..." class="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400">
          <span class="text-xs text-gray-400">共 <strong id="admission-total" class="text-gray-700">${sorted.length}</strong> 条，计划总人数 <strong id="admission-sum" class="text-gray-700"></strong></span>
          <button onclick="resetAdmissionOrder()" class="ml-auto text-xs text-gray-400 hover:text-red-500 transition-colors underline">重置排序与分数</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm" id="admission-table">
          <thead>
            <tr class="bg-gray-50 text-left">
              <th class="px-1 py-3 font-semibold text-gray-700 text-center" style="width:40px">排序</th>
              <th class="px-3 py-3 font-semibold text-gray-700 w-6">#</th>
              <th class="px-4 py-3 font-semibold text-gray-700">招生类别 / 专业名称</th>
              <th class="px-4 py-3 font-semibold text-gray-700 w-16">科类</th>
              <th class="px-4 py-3 font-semibold text-gray-700 w-16">类型</th>
              <th class="px-4 py-3 font-semibold text-gray-700">包含专业</th>
              <th class="px-4 py-3 font-semibold text-gray-700 text-right w-20">计划人数</th>
              <th class="px-3 py-3 font-semibold text-gray-700 text-right" style="width:60px">分数</th>
              <th class="px-3 py-3 font-semibold text-gray-700 text-right" style="width:70px">排名</th>
              <th class="px-4 py-3 font-semibold text-gray-700" style="min-width:150px">备注（可编辑）</th>
            </tr>
          </thead>
          <tbody>`;

    let lastSubject = '';
    sorted.forEach((c, i) => {
      const catKey = makeCatKey(c);
      const displayScore = getCustomScore(uniId, c) || c.score;
      const curSubject = (c.subject || '').includes('历史') ? '历史类' : '物理类';

      if (curSubject !== lastSubject) {
        lastSubject = curSubject;
        const subjectLabel = curSubject === '历史类' ? '文科（历史类）' : '理科（物理类）';
        const subjectColor = curSubject === '历史类'
          ? 'bg-amber-50 text-amber-700 border-amber-200'
          : 'bg-blue-50 text-blue-700 border-blue-200';
        html += `
          <tr class="border-t-2 border-gray-300 subject-separator" data-subject="${curSubject}">
            <td colspan="10" class="px-4 py-2">
              <span class="text-xs font-semibold px-3 py-1 rounded-full ${subjectColor} border">${subjectLabel}</span>
            </td>
          </tr>`;
      }

      const scoreClass = displayScore >= 680 ? 'text-red-600 font-bold' :
                         displayScore >= 660 ? 'text-orange-500 font-bold' :
                         displayScore >= 640 ? 'text-amber-600 font-semibold' :
                         displayScore >= 620 ? 'text-green-600 font-semibold' : 'text-gray-500';
      const subjectBadge = curSubject === '历史类'
        ? 'bg-amber-100 text-amber-700'
        : 'bg-blue-100 text-blue-700';

      html += `
        <tr class="border-t border-gray-100 hover:bg-gray-50 admission-row" data-subject="${curSubject}" data-catkey="${catKey.replace(/"/g, '&quot;')}">
          <td class="px-1 py-3 text-center" style="white-space:nowrap">
            <button onclick="moveRow(this, -1)" title="上移" class="text-gray-300 hover:text-blue-500 transition-colors px-0.5 leading-none text-lg">&uarr;</button>
            <button onclick="moveRow(this, 1)" title="下移" class="text-gray-300 hover:text-blue-500 transition-colors px-0.5 leading-none text-lg">&darr;</button>
          </td>
          <td class="px-3 py-3 text-gray-400 text-xs">${i + 1}</td>
          <td class="px-4 py-3 font-medium text-gray-900">${c.name}</td>
          <td class="px-4 py-3"><span class="text-xs px-2 py-0.5 rounded-full ${subjectBadge}">${curSubject}</span></td>
          <td class="px-4 py-3"><span class="text-xs px-2 py-0.5 rounded-full ${c.type === '大类' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}">${c.type}</span></td>
          <td class="px-4 py-3 text-gray-600 text-xs leading-relaxed">${c.includes || '—'}</td>
          <td class="px-4 py-3 text-right font-semibold text-gray-900">${c.quota}</td>
          <td class="px-3 py-3 text-right ${scoreClass} editable-score-cell">
            <span contenteditable="true" data-uni="${uniId}" data-catkey="${catKey.replace(/"/g, '&quot;')}"
                  class="editable-score outline-none focus:bg-yellow-100 rounded px-1 -mx-1 cursor-text" style="display:inline-block;min-width:36px;text-align:right">${displayScore}</span>
          </td>
          <td class="px-3 py-3 text-right text-gray-600 text-xs">${c.rank ? c.rank.toLocaleString() : '—'}</td>
          <td class="px-4 py-2">
            <div class="admission-note" contenteditable="true" data-uni="${uniId}" data-catkey="${catKey.replace(/"/g, '&quot;')}"
                 style="min-height:32px"
                 class="w-full px-2 py-1 border border-gray-200 rounded text-xs text-gray-600 focus:outline-none focus:border-blue-400 cursor-text hover:bg-gray-50 transition-colors"></div>
          </td>
        </tr>`;
    });

    html += `
          </tbody>
        </table>
      </div>
    </div>`;
  }

  // 底部注释区
  html += `<h2 class="text-xl font-bold text-gray-900 mb-4">补充注释</h2>`;
  html += `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-10">
      <p class="text-sm text-gray-400 mb-3">关于${uni.name}招生政策、录取分数等方面的个人笔记。内容会自动保存在本地浏览器中。</p>
      <div id="notes-editor" contenteditable="true"
           style="min-height:150px"
           class="p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-gray-700 text-sm leading-relaxed cursor-text hover:bg-gray-50 transition-colors"></div>
      <div class="flex items-center justify-between mt-3">
        <span id="notes-status" class="text-xs text-gray-400"></span>
        <button onclick="clearNotes()" class="text-xs text-red-500 hover:text-red-700">清除注释</button>
      </div>
    </div>`;

  document.getElementById('detail-content').innerHTML = html;

  initNotes();
}

// ========== 学院折叠 ==========

function toggleSchool(btn) {
  const item = btn.closest('.school-item');
  const body = item.querySelector('.school-body');
  const arrow = btn.querySelector('.school-arrow');
  body.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

function toggleAllSchools(expand) {
  document.querySelectorAll('.school-body').forEach(body => {
    const item = body.closest('.school-item');
    const arrow = item?.querySelector('.school-arrow');
    if (expand) {
      body.classList.remove('hidden');
      arrow?.classList.add('rotate-180');
    } else {
      body.classList.add('hidden');
      arrow?.classList.remove('rotate-180');
    }
  });
}

// ========== 学院编辑（增删改）==========

function updateSchoolsCount() {
  const countEl = document.getElementById('schools-count');
  if (countEl) {
    const schools = document.querySelectorAll('.school-item');
    countEl.textContent = schools.length + ' 个';
  }
}

function addSchool(uniId) {
  const name = prompt('请输入新学院名称：', '');
  if (!name || !name.trim()) return;
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  schools.push({ name: name.trim(), majors: [] });
  saveCustomSchools(uniId, schools);
  renderUniversityDetail();
}

function deleteSchool(si, uniId) {
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  const school = schools[si];
  if (!school) return;
  if (!confirm(`确定要删除学院"${school.name}"及其所有专业吗？此操作不可恢复。`)) return;
  schools.splice(si, 1);
  if (schools.length > 0) {
    saveCustomSchools(uniId, schools);
  } else {
    localStorage.removeItem(getSchoolsKey(uniId));
  }
  renderUniversityDetail();
}

function renameSchool(event, uniId) {
  const el = event.target;
  const newName = el.textContent.trim();
  const si = parseInt(el.getAttribute('data-school-idx'), 10);
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  if (!newName) {
    el.textContent = schools[si]?.name || '未命名学院';
    return;
  }
  if (schools[si]) {
    schools[si].name = newName;
    saveCustomSchools(uniId, schools);
    updateSchoolsCount();
    updateResetButton(uniId);
  }
}

// ========== 专业编辑（增删改）==========

function addMajor(si, uniId) {
  const majorName = prompt('请输入新专业名称：', '');
  if (!majorName || !majorName.trim()) return;
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  if (!schools[si]) return;
  schools[si].majors.push(majorName.trim());
  saveCustomSchools(uniId, schools);
  renderUniversityDetail();
}

function deleteMajor(si, mi, uniId) {
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  const major = schools[si]?.majors[mi];
  if (!major) return;
  if (!confirm(`确定要删除专业"${major}"吗？`)) return;
  schools[si].majors.splice(mi, 1);
  saveCustomSchools(uniId, schools);
  renderUniversityDetail();
}

function renameMajor(event, uniId) {
  const el = event.target;
  const newName = el.textContent.trim();
  const si = parseInt(el.getAttribute('data-school-idx'), 10);
  const mi = parseInt(el.getAttribute('data-major-idx'), 10);
  const uni = getUniversity();
  const schools = getCustomSchools(uniId) || getSchoolsData(uni);
  if (!newName) {
    el.textContent = schools[si]?.majors[mi] || '未命名专业';
    return;
  }
  if (schools[si] && schools[si].majors[mi] !== undefined) {
    schools[si].majors[mi] = newName;
    saveCustomSchools(uniId, schools);
  }
}

function resetSchoolsData(uniId) {
  if (!confirm('确定要恢复为默认学院数据吗？所有自定义修改（学院名称、增删学院、增删专业）将丢失。此操作不可恢复。')) return;
  localStorage.removeItem(getSchoolsKey(uniId));
  renderUniversityDetail();
}

function updateResetButton(uniId) {
  const btn = document.getElementById('reset-schools-btn');
  if (!btn) return;
  if (getCustomSchools(uniId)) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}

// ========== 行排序 ==========

function getOrderKey() {
  return 'uni_order_' + getUniversityId();
}

function saveCurrentOrder() {
  const keys = [];
  document.querySelectorAll('.admission-row').forEach(row => {
    const catKey = row.getAttribute('data-catkey');
    if (catKey) keys.push(catKey);
  });
  localStorage.setItem(getOrderKey(), JSON.stringify(keys));
  syncPush(getUniversityId());
}

function moveRow(btn, direction) {
  const row = btn.closest('tr');
  if (!row || !row.classList.contains('admission-row')) return;

  const tbody = row.parentElement;
  const rows = Array.from(tbody.querySelectorAll('.admission-row'));
  const idx = rows.indexOf(row);
  if (idx === -1) return;

  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= rows.length) return;

  if (direction === -1) {
    tbody.insertBefore(row, rows[targetIdx]);
  } else {
    const nextRow = rows[targetIdx].nextSibling;
    if (nextRow) {
      tbody.insertBefore(row, nextRow);
    } else {
      tbody.appendChild(row);
    }
  }

  saveCurrentOrder();
  renumberRows();
}

function renumberRows() {
  const rows = document.querySelectorAll('.admission-row');
  rows.forEach((row, i) => {
    const numCell = row.querySelectorAll('td')[1];
    if (numCell) numCell.textContent = i + 1;
  });
  const filterInput = document.getElementById('admission-filter');
  if (filterInput) {
    updateSum();
  }
}

function resetAdmissionOrder() {
  if (!confirm('确定要重置排序和所有自定义分数吗？此操作不可恢复。')) return;
  const uniId = getUniversityId();
  localStorage.removeItem('uni_order_' + uniId);
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('uni_score_' + uniId + '_')) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
  renderUniversityDetail();
}

// ========== 注释功能（localStorage）==========

function getNotesKey() {
  return 'uni_notes_' + getUniversityId();
}

function getAdmissionNoteKey(catKey) {
  return 'uni_adm_note_' + getUniversityId() + '_' + encodeURIComponent(catKey);
}

function initNotes() {
  const uniId = getUniversityId();

  const editor = document.getElementById('notes-editor');
  const status = document.getElementById('notes-status');
  if (editor) {
    const saved = localStorage.getItem(getNotesKey());
    if (saved) editor.innerHTML = saved;
    let saveTimer;
    editor.addEventListener('input', () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        localStorage.setItem(getNotesKey(), editor.innerHTML);
        syncPush(uniId);
        if (status) {
          status.textContent = '已自动保存 ' + new Date().toLocaleTimeString();
          setTimeout(() => { status.textContent = ''; }, 2000);
        }
      }, 500);
    });
  }

  document.querySelectorAll('.admission-note').forEach(note => {
    const catKey = note.getAttribute('data-catkey');
    const key = getAdmissionNoteKey(catKey);
    const saved = localStorage.getItem(key);
    if (saved) note.innerHTML = saved;
    let saveTimer;
    note.addEventListener('input', () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        localStorage.setItem(key, note.innerHTML);
        syncPush(uniId);
      }, 500);
    });
  });

  document.querySelectorAll('.editable-score').forEach(span => {
    let saveTimer;
    span.addEventListener('input', () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        const raw = span.textContent.trim();
        const num = parseInt(raw, 10);
        if (!isNaN(num) && num > 0) {
          const catKey = span.getAttribute('data-catkey');
          const scoreKey = getCustomScoreKey(uniId, catKey);
          localStorage.setItem(scoreKey, num);
          syncPush(uniId);
          updateScoreColor(span.parentElement, num);
        }
      }, 500);
    });
  });

  const filterInput = document.getElementById('admission-filter');
  if (filterInput) {
    updateSum();
    filterInput.addEventListener('input', (e) => {
      const keyword = e.target.value;
      document.querySelectorAll('.admission-row').forEach(row => {
        const name = row.querySelectorAll('td')[2]?.textContent || '';
        row.style.display = name.includes(keyword) ? '' : 'none';
      });
      updateSum();
    });
  }
}

function updateScoreColor(td, score) {
  td.className = td.className.replace(/text-\S+-\d+\s+font-\S+/, '');
  if (score >= 680) {
    td.classList.add('text-red-600', 'font-bold');
  } else if (score >= 660) {
    td.classList.add('text-orange-500', 'font-bold');
  } else if (score >= 640) {
    td.classList.add('text-amber-600', 'font-semibold');
  } else if (score >= 620) {
    td.classList.add('text-green-600', 'font-semibold');
  } else {
    td.classList.add('text-gray-500');
  }
}

function updateSum() {
  let sum = 0, count = 0;
  document.querySelectorAll('.admission-row').forEach(row => {
    if (row.style.display !== 'none') {
      const quotaCell = row.querySelectorAll('td')[6];
      if (quotaCell) { sum += parseInt(quotaCell.textContent) || 0; count++; }
    }
  });
  const sumEl = document.getElementById('admission-sum');
  const totalEl = document.getElementById('admission-total');
  if (sumEl) sumEl.textContent = sum;
  if (totalEl) totalEl.textContent = count;
}

function clearNotes() {
  if (confirm('确定要清除该高校的所有注释吗？（包括底部注释和各专业备注）此操作不可恢复。')) {
    localStorage.removeItem(getNotesKey());
    const editor = document.getElementById('notes-editor');
    if (editor) editor.innerHTML = '';
    const uniId = getUniversityId();
    document.querySelectorAll('.admission-note').forEach(note => {
      const catKey = note.getAttribute('data-catkey');
      localStorage.removeItem(getAdmissionNoteKey(catKey));
      note.innerHTML = '';
    });
  }
}

// ========== 初始化 ==========

document.addEventListener('DOMContentLoaded', function() {
  highlightNav();
  renderUniversityDetail();
  var uniId = getUniversityId();
  if (uniId) {
    startSyncLoop(uniId);  // _initSync 内部完成首次拉取 + 持续同步
  }
});
