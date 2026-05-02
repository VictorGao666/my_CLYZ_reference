#!/usr/bin/env python3
"""Fetch 2025 Hebei admission data from gaokao.cn for all remaining 985 universities."""

import json
import urllib.request
import time
import sys

# All remaining universities: local_id -> (name, gaokao_school_id)
SCHOOLS = [
    (10, '中国人民大学', 46),
    (11, '北京师范大学', 52),
    (12, '北京航空航天大学', 47),
    (13, '北京理工大学', 143),
    (14, '中国农业大学', 557),
    (15, '中央民族大学', 45),
    (16, '南开大学', 59),
    (17, '天津大学', 60),
    (18, '大连理工大学', 138),
    (19, '东北大学', 134),
    (20, '吉林大学', 122),
    (21, '同济大学', 73),
    (22, '华东师范大学', 131),
    (23, '东南大学', 109),
    (24, '厦门大学', 102),
    (25, '山东大学', 126),
    (26, '中国海洋大学', 61),
    (27, '华中科技大学', 127),
    (28, '湖南大学', 44),
    (29, '中南大学', 123),
    (30, '华南理工大学', 105),
    (31, '四川大学', 99),
    (32, '重庆大学', 119),
    (33, '电子科技大学', 661),
    (34, '西北工业大学', 107),
    (35, '兰州大学', 97),
    (36, '国防科技大学', 939),
    (37, '西北农林科技大学', 332),
    (38, '华东理工大学', 133),
]

# Type codes
TYPE_MAP = {'2073': '物理类', '2074': '历史类'}

# Batch codes -> (batch_name, plan_name)
BATCH_MAP = {
    '14': ('本科批', '普通类'),
    '37': ('本科提前批B段', '国家专项计划'),
}

# Plan codes (3rd part of key) -> plan name override
PLAN_MAP = {
    '0': '',
    '555': '国家专项计划',
    '207': '中外合作办学',
}

def fetch_school(sid):
    """Fetch admission data for a school."""
    url = f'https://static-data.gaokao.cn/www/2.0/schoolspecialscore/{sid}/2025/13.json'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read())
        except Exception as e:
            if attempt < 2:
                time.sleep(2)
            else:
                print(f'  ERROR fetching sid={sid}: {e}', file=sys.stderr)
                return None

def clean_name(spname):
    """Clean up specialty name - remove redundant parenthetical suffixes."""
    # Remove repeated trailing parentheticals that duplicate info
    import re
    name = spname.strip()
    # If ends with duplicated parenthetical like "（国家专项计划）（国家专项计划）", clean it
    # Keep only the last occurrence of repeated patterns
    parts = re.findall(r'（[^）]+）', name)
    if len(parts) >= 2:
        seen = {}
        cleaned_parts = []
        for p in parts:
            if p not in seen:
                seen[p] = True
                cleaned_parts.append(p)
        if len(cleaned_parts) < len(parts):
            # Rebuild name with unique parts only
            base = name
            for p in parts:
                base = base[:base.rfind(p)] + base[base.rfind(p)+len(p):]
            # Add back unique parts
            for p in cleaned_parts:
                if p not in base:
                    base += p
            return base.strip()
    return name

def extract_includes(spname):
    """Extract includes text from parenthetical content in spname."""
    import re
    # Find all parenthetical groups
    parts = re.findall(r'（([^）]+)）', spname)
    if len(parts) <= 1:
        return ''
    # The content of the last parenthetical typically has the major list
    # Return the most informative part
    for p in reversed(parts):
        if '含' in p or '专业' in p or '等' in p:
            return p
    return parts[-1] if parts else ''

def parse_data(data, local_id, school_name):
    """Parse API response into admission categories."""
    categories = []

    if not data or 'data' not in data:
        return categories

    for key, val in data['data'].items():
        if not isinstance(val, dict) or 'item' not in val:
            continue
        if not val.get('item'):
            continue

        # Parse key: type_batch_plan, e.g., '2073_14_0' or '2074_37_555'
        parts = key.split('_')
        type_code = parts[0]
        batch_code = parts[1]
        plan_code = '_'.join(parts[2:]) if len(parts) > 2 else '0'

        subject = TYPE_MAP.get(type_code, type_code)
        batch_info = BATCH_MAP.get(batch_code, (batch_code, ''))
        batch_name = batch_info[0]
        default_plan = batch_info[1]

        # For 本科批, determine if 中外合作办学 from data
        is_hezuo = '中外合作办学' in key or '207' in plan_code

        for item in val['item']:
            spname = item.get('spname', '').strip()
            score = int(item.get('min', 0))
            rank = int(item.get('min_section', 0)) if item.get('min_section') else None
            quota_str = item.get('zslq', '0')
            try:
                quota = int(quota_str) if quota_str else 0
            except (ValueError, TypeError):
                quota = 0

            # Determine if 大类 or 专业
            cat_type = '大类' if '类' in spname and '专业' not in spname.split('（')[0] else '专业'
            # Override: 试验班 is usually 大类
            if '试验班' in spname or '实验班' in spname:
                cat_type = '大类'

            # Extract includes from parentheticals
            includes = extract_includes(spname)

            # Clean name for display
            name = spname

            # Determine plan/batch suffix for includes
            plan_suffix = ''
            if batch_code == '37':
                plan_suffix = '提前批B段'
            elif batch_code != '14':
                plan_suffix = batch_name

            if is_hezuo:
                if plan_suffix:
                    plan_suffix += '，中外合作办学'
                else:
                    plan_suffix = '中外合作办学'

            # Build final includes
            includes_parts = []
            if includes:
                includes_parts.append(includes)
            if plan_suffix:
                includes_parts.append(plan_suffix)
            final_includes = '，'.join(includes_parts) if includes_parts else ''

            categories.append({
                'name': name,
                'type': cat_type,
                'subject': subject,
                'quota': quota,
                'score': score,
                'rank': rank,
                'includes': final_includes,
            })

    return categories

def categories_to_js(categories, indent=8):
    """Convert categories list to JS array string."""
    lines = []
    for i, c in enumerate(categories):
        rank_str = str(c['rank']) if c['rank'] is not None else 'null'
        includes = c['includes'].replace('\\', '\\\\').replace("'", "\\'")
        name = c['name'].replace('\\', '\\\\').replace("'", "\\'")
        comma = ',' if i < len(categories) - 1 else ''
        lines.append(f"{' ' * indent}{{ name: '{name}', type: '{c['type']}', subject: '{c['subject']}', quota: {c['quota']}, score: {c['score']}, rank: {rank_str}, includes: '{includes}' }}{comma}")
    return '\n'.join(lines)

# Main execution
all_results = {}

for local_id, name, sid in SCHOOLS:
    print(f'Fetching {name} (sid={sid})...', file=sys.stderr)
    data = fetch_school(sid)
    if data:
        categories = parse_data(data, local_id, name)
        all_results[local_id] = {
            'name': name,
            'sid': sid,
            'categories': categories,
        }
        print(f'  -> {len(categories)} categories', file=sys.stderr)
    else:
        print(f'  -> FAILED', file=sys.stderr)
        all_results[local_id] = {
            'name': name,
            'sid': sid,
            'categories': [],
            'error': True,
        }
    time.sleep(0.5)  # Be polite to the API

# Output JSON for use by the generation script
print(json.dumps(all_results, ensure_ascii=False, indent=2))
