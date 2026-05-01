// 移动端菜单切换
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// 高亮当前页面导航链接
function highlightNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
      link.classList.remove('text-gray-700', 'hover:text-blue-600');
    }
  });
}

// ========== 高校页面功能 ==========

function renderUniversities(filter = '') {
  const container = document.getElementById('universities-grid');
  if (!container) return;

  const filtered = universities.filter(u =>
    u.name.includes(filter) || u.province.includes(filter) || u.city.includes(filter)
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-500">
        <p class="text-lg">未找到匹配的高校</p>
        <p class="text-sm mt-2">请尝试其他关键词</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(u => `
    <a href="university.html?id=${u.id}" class="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 hover-lift cursor-pointer group">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">${u.name}</h3>
        <span class="text-xs px-2 py-1 rounded-full ${u.batch === '一期' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'} whitespace-nowrap ml-2">${u.batch}</span>
      </div>
      <div class="space-y-1 text-sm text-gray-600">
        <p class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${u.province} · ${u.city}
        </p>
        <p class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          985工程${u.batch}
        </p>
      </div>
      <div class="mt-3 text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        查看详情 →
      </div>
    </a>
  `).join('');
}

function setupUniversitySearch() {
  const input = document.getElementById('university-search');
  if (!input) return;
  input.addEventListener('input', (e) => renderUniversities(e.target.value));
  renderUniversities();
}

// ========== 专业页面功能 ==========

function renderMajors(filter = '') {
  const container = document.getElementById('majors-container');
  if (!container) return;

  container.innerHTML = majors.map((cat, idx) => {
    const filteredMajors = filter
      ? cat.majors.filter(m => m.includes(filter))
      : cat.majors;

    if (filteredMajors.length === 0) return '';

    const categoryColors = {
      '哲学': 'from-indigo-500 to-purple-500',
      '经济学': 'from-amber-500 to-orange-500',
      '法学': 'from-red-500 to-rose-500',
      '教育学': 'from-green-500 to-emerald-500',
      '文学': 'from-pink-500 to-rose-500',
      '历史学': 'from-yellow-600 to-amber-600',
      '理学': 'from-cyan-500 to-blue-500',
      '工学': 'from-slate-600 to-gray-700',
      '农学': 'from-lime-500 to-green-600',
      '医学': 'from-teal-500 to-cyan-600',
      '管理学': 'from-blue-600 to-indigo-600',
      '艺术学': 'from-fuchsia-500 to-pink-600'
    };

    const color = categoryColors[cat.category] || 'from-blue-500 to-indigo-500';
    const totalCount = cat.majors.length;
    const showCount = filteredMajors.length;

    return `
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <button onclick="this.parentElement.querySelector('.majors-list').classList.toggle('hidden'); this.querySelector('.arrow').classList.toggle('rotate-180')"
                class="w-full flex items-center justify-between p-5 bg-gradient-to-r ${color} text-white hover:opacity-95 transition-opacity">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-bold">${cat.category}</span>
            <span class="text-sm opacity-80">${showCount} 个专业${filter && showCount !== totalCount ? ` / 共 ${totalCount} 个` : ''}</span>
          </div>
          <svg class="w-5 h-5 arrow transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="majors-list ${filter ? '' : 'hidden'}">
          <div class="p-5 flex flex-wrap gap-2">
            ${filteredMajors.map(m => `
              <span class="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default">${m}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 更新无结果提示
  const visibleCards = container.querySelectorAll('.bg-white').length;
  if (visibleCards === 0) {
    container.innerHTML = '<p class="text-center text-gray-500 py-12 text-lg">未找到匹配的专业</p>';
  }
}

function jumpToCategory(idx) {
  const cards = document.querySelectorAll('#majors-container > div');
  if (!cards[idx]) return;
  cards.forEach((card, i) => {
    const list = card.querySelector('.majors-list');
    const arrow = card.querySelector('.arrow');
    if (i === idx) {
      list.classList.remove('hidden');
      arrow?.classList.add('rotate-180');
    } else {
      list.classList.add('hidden');
      arrow?.classList.remove('rotate-180');
    }
  });
  cards[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleAllMajors(expand) {
  document.querySelectorAll('.majors-list').forEach(list => {
    if (expand) {
      list.classList.remove('hidden');
      list.parentElement.querySelector('.arrow')?.classList.add('rotate-180');
    } else {
      list.classList.add('hidden');
      list.parentElement.querySelector('.arrow')?.classList.remove('rotate-180');
    }
  });
}

function setupMajorSearch() {
  const input = document.getElementById('major-search');
  if (!input) return;
  input.addEventListener('input', (e) => renderMajors(e.target.value));
  renderMajors();
}

// ========== 初始化 ==========

document.addEventListener('DOMContentLoaded', () => {
  highlightNav();
  setupUniversitySearch();
  setupMajorSearch();
});
