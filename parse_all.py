#!/usr/bin/env python3
"""Complete parser: fetch + parse all 29 remaining 985 universities for data.js"""
import json, urllib.request, time, sys, re

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

KNOWN_CITIES = {'杭州市','上海市','珠海','深圳','广州','合肥市','天津市','武汉市','西安市','成都市',
                '南京市','济南市','青岛市','长沙市','沈阳市','大连市','长春市','哈尔滨市','重庆市','厦门市'}

KNOWN_BATCH_PROGRAMS = {'国家专项计划','中外合作办学','普通类'}

def fetch(sid):
    url = f'https://static-data.gaokao.cn/www/2.0/schoolspecialscore/{sid}/2025/13.json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read())
        except Exception as e:
            if attempt < 2: time.sleep(2)
            else: print(f'  ERROR sid={sid}: {e}', file=sys.stderr); return None

def parse_spname(spname, local_batch, zslx_name):
    """Parse spname into clean name and includes string."""
    # Extract all parenthetical groups
    all_parts = re.findall(r'（([^）]+)）', spname)

    # Core name = everything before first parenthetical
    core = spname.split('（')[0].strip() if '（' in spname else spname.strip()

    # Categorize each parenthetical part
    city = ''
    major_list = ''
    special_program = ''
    other_info = []

    for p in all_parts:
        if p in KNOWN_CITIES:
            city = p
        elif p.startswith('含'):
            major_list = p
        elif p in KNOWN_BATCH_PROGRAMS:
            pass  # Will be added from API metadata
        elif p in ('不限选考科目类专业','理科基础类专业','理科各专业','文科各专业','信息智能方向',
                   '电子信息学院','计算机学院','国家网络安全学院','集成电路学院','机器人学院',
                   '弘毅学堂','弘毅双学位试验班','卓越优才计划','提前批A','提前批B段',
                   '数智建维与软件类','机器人与智能机械试验班','智慧能源与智能制造类','电气类',
                   '智慧城市与建筑工程','材料、化工与高分子','海洋，含智慧海洋卓越班',
                   '拔尖人才试验班','理科各专业','文科各专业'):
            other_info.append(p)
        else:
            # Keep as name suffix or includes
            other_info.append(p)

    # Build display name: core + key qualifiers
    name_parts = [core]
    for p in all_parts:
        if p in KNOWN_CITIES or p in KNOWN_BATCH_PROGRAMS:
            name_parts.append(f'（{p}）')
        elif p.startswith('含') or p in ('不限选考科目类专业','理科基础类专业','理科各专业','文科各专业'):
            pass  # Don't add to name, add to includes
        elif p == '国家专项计划':
            pass
        else:
            # Some parts are qualifiers that should stay in name
            if p not in other_info or p in ('卓越优才计划','竺可桢学院图灵班','匡亚明学院大理科班',
                                             '未来技术拔尖班','弘毅学堂','弘毅双学位试验班'):
                name_parts.append(f'（{p}）')

    display_name = ''.join(name_parts)

    # Build includes
    includes_parts = []
    if city:
        includes_parts.append(city)
    if major_list:
        includes_parts.append(major_list)
    for oi in other_info:
        if oi not in includes_parts and oi not in city:
            includes_parts.append(oi)

    # Add batch suffix
    if local_batch == '本科提前批B段':
        includes_parts.append('提前批B段')
    elif '提前批' in local_batch:
        includes_parts.append(local_batch)

    if zslx_name == '中外合作办学':
        if '中外合作办学' not in '，'.join(includes_parts):
            includes_parts.append('中外合作办学')

    includes = '，'.join(includes_parts)
    return display_name, includes

def process_school(sid, local_id, school_name):
    """Fetch and process one school's data."""
    data = fetch(sid)
    if not data or 'data' not in data:
        return None

    categories = []
    for key, val in data['data'].items():
        if not isinstance(val, dict) or 'item' not in val:
            continue
        if not val.get('item'):
            continue

        parts = key.split('_')
        type_code = parts[0]
        subject = '物理类' if type_code == '2073' else '历史类'

        for item in val['item']:
            spname = item.get('spname', '').strip()
            score = int(item.get('min', 0))
            rank = item.get('min_section')
            if rank is not None:
                rank = int(rank)
            local_batch = item.get('local_batch_name', '')
            zslx_name = item.get('zslx_name', '')

            display_name, includes = parse_spname(spname, local_batch, zslx_name)

            # Determine type
            core_name = spname.split('（')[0].strip()
            cat_type = '大类' if ('类' in core_name) else '专业'
            if any(kw in spname for kw in ['试验班','实验班','英才班','拔尖班','创新班','双学士学位','卓越班']):
                cat_type = '大类'

            categories.append({
                'name': display_name,
                'type': cat_type,
                'subject': subject,
                'quota': 0,
                'score': score,
                'rank': rank,
                'includes': includes,
                '_batch': local_batch,
                '_zslx': zslx_name,
                '_raw_spname': spname,
            })

    # Sort: 历史类 first, then by score desc
    categories.sort(key=lambda c: (
        0 if '历史' in c['subject'] else 1,
        -(c['score'] or 0)
    ))
    return categories

# Main
results = {}
for local_id, name, sid in SCHOOLS:
    print(f'Processing {name} (sid={sid})...', file=sys.stderr)
    cats = process_school(sid, local_id, name)
    if cats:
        results[str(local_id)] = {'name': name, 'categories': cats}
        print(f'  -> {len(cats)} categories', file=sys.stderr)
    else:
        print(f'  -> FAILED', file=sys.stderr)
    time.sleep(0.3)

# Save as JSON
print(json.dumps(results, ensure_ascii=False, indent=2))
