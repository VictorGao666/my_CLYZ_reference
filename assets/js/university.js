// ========== 高校详情页逻辑 ==========

function getUniversityId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function getUniversity() {
  const id = getUniversityId();
  return universities.find(u => u.id === id);
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
        <div><span class="text-gray-500">学院数：</span><span class="text-gray-900 font-medium">${uni.schools.length} 个</span></div>
        <div><span class="text-gray-500">定位：</span><span class="text-gray-900 font-medium">${uni.intro}</span></div>
      </div>
    </div>`;

  html += `<h2 class="text-xl font-bold text-gray-900 mb-4">各学院及本科专业</h2>`;
  html += `<div class="flex gap-2 mb-4">
    <button onclick="toggleAllSchools(true)" class="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium transition-colors">展开全部学院</button>
    <button onclick="toggleAllSchools(false)" class="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium transition-colors">折叠全部学院</button>
  </div>`;

  html += `<div class="space-y-3 mb-10" id="schools-container">`;

  uni.schools.forEach((school, si) => {
    html += `
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button onclick="toggleSchool(this)" class="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">${si + 1}</span>
            <span class="text-lg font-bold text-gray-900 text-left">${school.name}</span>
            <span class="text-xs text-gray-400">${school.disciplines.length} 个学科</span>
          </div>
          <svg class="w-5 h-5 school-arrow transition-transform duration-300 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="school-body hidden">
          <div class="px-4 pb-4 space-y-3">`;

    school.disciplines.forEach(d => {
      html += `
            <div class="border border-gray-100 rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-gray-800">${d.name}</span>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-gray-400">四轮</span>${assessmentBadge(d.assessment4)}
                  <span class="text-xs text-gray-400 ml-1">五轮</span>${assessmentBadge(d.assessment5)}
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${d.majors.length > 0 ? d.majors.map(m => `
                  <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">${m}</span>
                `).join('') : '<span class="text-xs text-gray-400">该学科暂无本科专业列出</span>'}
              </div>
            </div>`;
    });

    html += `
          </div>
        </div>
      </div>`;
  });

  html += `</div>`;

  // === 招生计划 ===
  if (uni.admission) {
    const uniId = uni.id;
    const orderKey = 'uni_order_' + uniId;

    // 读取自定义排序
    let customOrder = null;
    try {
      const saved = localStorage.getItem(orderKey);
      if (saved) customOrder = JSON.parse(saved);
    } catch (e) {}

    // 默认排序：历史类优先，同类按自定义分数/原始分数降序
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
            <td colspan="9" class="px-4 py-2">
              <span class="text-xs font-semibold px-3 py-1 rounded-full ${subjectColor} border">${subjectLabel}</span>
            </td>
          </tr>`;
      }

      // 分数字体颜色：用 class 而非 inline style，以便 contenteditable 修改后动态更新
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
  const body = btn.parentElement.querySelector('.school-body');
  const arrow = btn.querySelector('.school-arrow');
  body.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

function toggleAllSchools(expand) {
  document.querySelectorAll('.school-body').forEach(body => {
    if (expand) {
      body.classList.remove('hidden');
      body.parentElement.querySelector('.school-arrow')?.classList.add('rotate-180');
    } else {
      body.classList.add('hidden');
      body.parentElement.querySelector('.school-arrow')?.classList.remove('rotate-180');
    }
  });
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

  // DOM 移动
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
  // 更新筛选栏的计数
  const filterInput = document.getElementById('admission-filter');
  if (filterInput) {
    updateSum();
  }
}

function resetAdmissionOrder() {
  if (!confirm('确定要重置排序和所有自定义分数吗？此操作不可恢复。')) return;
  const uniId = getUniversityId();
  localStorage.removeItem('uni_order_' + uniId);
  // 清除所有自定义分数
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

  // 底部注释区
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
        if (status) {
          status.textContent = '已自动保存 ' + new Date().toLocaleTimeString();
          setTimeout(() => { status.textContent = ''; }, 2000);
        }
      }, 500);
    });
  }

  // 每行招生计划备注
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
      }, 500);
    });
  });

  // 可编辑分数
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
          // 更新颜色
          updateScoreColor(span.parentElement, num);
        }
      }, 500);
    });
  });

  // 招生计划筛选 & 总计
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

document.addEventListener('DOMContentLoaded', () => {
  highlightNav();
  renderUniversityDetail();
});
