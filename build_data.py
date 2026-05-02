#!/usr/bin/env python3
"""Build complete data.js with admission data for all 29 remaining universities."""
import json, re

with open('/tmp/all_schools.json', 'r') as f:
    all_data = json.load(f)

# We already have detailed data for ids 0-9
# Now generate the new university entries for ids 10-38

def parse_spname(spname):
    """Parse spname into core name and metadata parts."""
    parts = re.findall(r'（([^）]+)）', spname)
    # Remove parentheticals from name to get core
    core = spname
    for p in parts:
        core = core.replace(f'（{p}）', '')
    core = core.strip()

    # Categorize parenthetical parts
    includes_parts = []
    city = ''
    for p in parts:
        if p in ('国家专项计划',):
            continue  # Will be added from API metadata
        if '含' in p:
            includes_parts.append(p)
        elif p in ('杭州市', '上海市', '珠海', '深圳', '广州', '合肥市', '天津市', '武汉市', '西安市', '成都市',
                    '南京市', '济南市', '青岛市', '长沙市', '沈阳市', '大连市', '长春市', '哈尔滨市',
                    '重庆市', '厦门市'):
            city = p
        elif p not in ('不限选考科目类专业', '理科基础类专业', '理科各专业', '文科各专业',
                       '信息智能方向', '电子信息学院', '计算机学院', '国家网络安全学院',
                       '集成电路学院', '机器人学院', '弘毅学堂', '弘毅双学位试验班',
                       '卓越优才计划', '中外合作办学', '数智经济与管理', '提前批A', '提前批B段'):
            includes_parts.append(p)

    includes = '，'.join(includes_parts) if includes_parts else ''
    if city and city not in includes:
        includes = city + ('，' + includes if includes else '')

    return core, includes

def build_categories(data_entry):
    """Build categories from raw API data for one school."""
    if data_entry.get('error'):
        return []

    categories = []
    for key, val in data_entry.items():
        if not isinstance(val, dict) or 'numFound' not in val:
            continue
        if not val.get('item'):
            continue

        parts = key.split('_')
        type_code = parts[0]
        batch_code = parts[1]

        subject = '物理类' if type_code == '2073' else '历史类'

        for item in val['item']:
            spname = item.get('spname', '').strip()
            score = int(item.get('min', 0))
            rank = int(item.get('min_section', 0)) if item.get('min_section') else None
            local_batch = item.get('local_batch_name', '')
            zslx_name = item.get('zslx_name', '')
            sp_type = item.get('sp_type', '')

            # Determine type
            # sp_type: 80001=普通类, 80002=中外合作办学, 80003=国家专项, etc.
            cat_type = '大类' if ('类' in spname.split('（')[0]) else '专业'
            if '试验班' in spname or '实验班' in spname or '英才班' in spname:
                cat_type = '大类'

            # Build includes
            core, extra_includes = parse_spname(spname)

            includes_parts = []
            if extra_includes:
                includes_parts.append(extra_includes)

            # Add batch/plan info for non-standard batches
            if local_batch == '本科提前批B段':
                includes_parts.append('提前批B段')
            elif '提前批' in local_batch:
                includes_parts.append(local_batch)

            if zslx_name == '中外合作办学' or sp_type == '80002':
                if '中外合作办学' not in '，'.join(includes_parts):
                    includes_parts.append('中外合作办学')

            includes = '，'.join(includes_parts)

            categories.append({
                'name': spname,
                'type': cat_type,
                'subject': subject,
                'quota': 0,  # API doesn't have 计划人数
                'score': score,
                'rank': rank,
                'includes': includes,
                'batch': local_batch,
                'zslx': zslx_name,
            })

    # Sort: 历史类 before 物理类, then by score desc
    categories.sort(key=lambda c: (
        0 if '历史' in c['subject'] else 1,
        -(c['score'] or 0)
    ))
    return categories

# Process all schools
output_lines = []
output_lines.append('// ========== Remaining 29 985 Universities (auto-generated from gaokao.cn API) ==========\n')

for local_id_str, entry in all_data.items():
    local_id = int(local_id_str)
    school_name = entry.get('name', 'Unknown')
    categories = build_categories(entry.get('categories_data', entry))

    # Actually let me re-read the data structure
    print(f'School {local_id}: {school_name} - {len(categories)} categories')

# Check the actual structure of all_data
print("\nData structure:")
for k in list(all_data.keys())[:3]:
    v = all_data[k]
    print(f"  {k}: type={type(v).__name__}, keys={list(v.keys()) if isinstance(v, dict) else 'N/A'}")
    if isinstance(v, dict):
        print(f"    categories count: {len(v.get('categories', []))}")
        if v.get('categories'):
            print(f"    first category: {v['categories'][0]}")
