#!/usr/bin/env python3
"""Final fetch + parse for all remaining 29 985 universities."""
import json, urllib.request, time, sys

SCHOOLS = [
    (10, '中国人民大学', 46), (11, '北京师范大学', 52), (12, '北京航空航天大学', 47),
    (13, '北京理工大学', 143), (14, '中国农业大学', 557), (15, '中央民族大学', 45),
    (16, '南开大学', 59), (17, '天津大学', 60), (18, '大连理工大学', 138),
    (19, '东北大学', 134), (20, '吉林大学', 122), (21, '同济大学', 73),
    (22, '华东师范大学', 131), (23, '东南大学', 109), (24, '厦门大学', 102),
    (25, '山东大学', 126), (26, '中国海洋大学', 61), (27, '华中科技大学', 127),
    (28, '湖南大学', 44), (29, '中南大学', 123), (30, '华南理工大学', 105),
    (31, '四川大学', 99), (32, '重庆大学', 119), (33, '电子科技大学', 661),
    (34, '西北工业大学', 107), (35, '兰州大学', 97),
    (37, '西北农林科技大学', 332), (38, '华东理工大学', 133),
]

def fetch(sid):
    url = f'https://static-data.gaokao.cn/www/2.0/schoolspecialscore/{sid}/2025/13.json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read())
        except:
            if attempt < 2: time.sleep(2)
            else: return None

def extract_parentheticals(text):
    """Extract only TOP-LEVEL parenthetical groups (ignores nested ones)."""
    results = []
    depth = 0
    start = -1
    for i, ch in enumerate(text):
        if ch == '（':
            if depth == 0:
                start = i + 1
            depth += 1
        elif ch == '）':
            depth -= 1
            if depth == 0 and start >= 0:
                results.append(text[start:i])
                start = -1
    return results

def parse_spname(spname, local_batch, zslx_name):
    """Parse spname into (name, includes)."""
    parens = extract_parentheticals(spname)

    # Deduplicate: keep order, skip repeated items
    seen = set()
    unique = []
    for p in parens:
        if p not in seen:
            seen.add(p)
            unique.append(p)

    # Core name (before first parenthetical)
    core = spname.split('（')[0].strip()

    # Separate: things that go in name vs includes
    name_parens = []
    includes_parts = []

    for p in unique:
        if p.startswith('含'):
            includes_parts.append(p)
        elif p in ('国家专项计划', '普通类'):
            pass  # Replaced by API metadata
        else:
            name_parens.append(p)

    # Build name
    name = core + ''.join(f'（{p}）' for p in name_parens)

    # Add batch/plan to includes
    if local_batch == '本科提前批B段':
        includes_parts.append('提前批B段')
    elif '提前批' in local_batch:
        includes_parts.append(local_batch)

    if zslx_name == '中外合作办学':
        if not any('中外合作' in p for p in includes_parts):
            includes_parts.append('中外合作办学')

    includes = '，'.join(includes_parts)
    return name, includes

def process(sid):
    data = fetch(sid)
    if not data or 'data' not in data: return None

    cats = []
    for key, val in data['data'].items():
        if not isinstance(val, dict) or not val.get('item'): continue
        type_code = key.split('_')[0]
        subject = '物理类' if type_code == '2073' else '历史类'

        for item in val['item']:
            spname = item.get('spname', '').strip()
            if not spname: continue
            score = int(item.get('min', 0))
            rank = item.get('min_section')
            rank = int(rank) if rank is not None else None
            local_batch = item.get('local_batch_name', '')
            zslx_name = item.get('zslx_name', '')

            name, includes = parse_spname(spname, local_batch, zslx_name)

            core_name = spname.split('（')[0].strip()
            is_dalei = ('类' in core_name or '试验班' in spname or '实验班' in spname
                       or '英才班' in spname or '拔尖班' in spname or '创新班' in spname)

            cats.append({
                'name': name, 'type': '大类' if is_dalei else '专业',
                'subject': subject, 'quota': 0,
                'score': score, 'rank': rank, 'includes': includes,
            })

    cats.sort(key=lambda c: (0 if '历史' in c['subject'] else 1, -(c['score'] or 0)))
    return cats

# Main
results = {}
for local_id, name, sid in SCHOOLS:
    print(f'{name}...', file=sys.stderr, end=' ')
    cats = process(sid)
    if cats:
        results[str(local_id)] = cats
        print(f'{len(cats)} cats', file=sys.stderr)
    else:
        print(f'FAILED', file=sys.stderr)
    time.sleep(0.3)

print(json.dumps(results, ensure_ascii=False))
