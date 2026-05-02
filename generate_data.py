#!/usr/bin/env python3
"""Generate the updated data.js content with admission data for all remaining universities."""
import json, re

with open('/tmp/parsed_v3.json') as f:
    parsed = json.load(f)

# We need to read the original data.js and insert the new university structures
# The current structure for ids 10-38 is simple: { id: X, name: '...', ... hasDetail: false }
# We need to replace each with the full structure including admission

# First, read current data.js
with open('/home/gmy_victor/my_portfolio/assets/js/data.js', 'r') as f:
    content = f.read()

# For each university id 10-38 (except 36 国防科技大学), generate the new JS code
# The new format for each university should include:
# - Basic info (same as before but with hasDetail: true)
# - admission: { year: '2025', province: '河北', categories: [...] }
# - schools: [] (placeholder for now)

def js_escape(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")

def categories_to_js(cats):
    lines = []
    for i, c in enumerate(cats):
        rank = str(c['rank']) if c['rank'] is not None else 'null'
        name = js_escape(c['name'])
        includes = js_escape(c['includes'])
        comma = ',' if i < len(cats) - 1 else ''
        lines.append(f"        {{ name: '{name}', type: '{c['type']}', subject: '{c['subject']}', quota: {c['quota']}, score: {c['score']}, rank: {rank}, includes: '{includes}' }}{comma}")
    return '\n'.join(lines)

# Process each school
for local_id_str, cats in parsed.items():
    local_id = int(local_id_str)
    if not cats:
        continue

    # Find the school name from the original data
    # Search for the simple entry pattern
    old_pattern = f"{{ id: {local_id}, "
    # Find the actual entry
    idx = content.find(old_pattern)
    if idx < 0:
        print(f"WARNING: Could not find id={local_id} in data.js", flush=True)
        continue

    # Find the end of this simple entry (ends with },)
    end_idx = content.index('}', idx)
    if content[end_idx+1] == ',':
        end_idx += 1

    old_entry = content[idx:end_idx+1]
    old_entry_single_line = old_entry.replace('\n', ' ')[:200]
    print(f"Replacing id={local_id}: {old_entry_single_line}...")

    # Build admission block
    cat_js = categories_to_js(cats)
    admission_block = f"""    admission: {{
      year: '2025',
      province: '河北',
      categories: [
{cat_js}
      ]
    }}"""

    # Build new entry (includes old name, province, city, batch, intro)
    # Parse old entry to get fields
    name_match = re.search(r"name:\s*'([^']+)'", old_entry)
    province_match = re.search(r"province:\s*'([^']+)'", old_entry)
    city_match = re.search(r"city:\s*'([^']+)'", old_entry)
    batch_match = re.search(r"batch:\s*'([^']+)'", old_entry)
    name = name_match.group(1) if name_match else 'Unknown'
    province = province_match.group(1) if province_match else ''
    city = city_match.group(1) if city_match else ''
    batch = batch_match.group(1) if batch_match else '二期'

    # Intro texts for remaining universities
    intros = {
        '中国人民大学': '中国人文社会科学领域的顶尖研究型大学，创办于1937年，被誉为"中国人文社会科学的一面旗帜"。',
        '北京师范大学': '中国师范教育的最高学府，创办于1902年，教育学、心理学、中国语言文学等学科全国领先。',
        '北京航空航天大学': '中国航空航天领域的顶尖研究型大学，创办于1952年，航空航天、信息技术等工科实力突出。',
        '北京理工大学': '中国共产党创办的第一所理工科大学，创办于1940年，兵器科学与技术、车辆工程等领域领先。',
        '中国农业大学': '中国农业领域的最高学府，创办于1905年，农学、生命科学、食品科学等学科实力雄厚。',
        '中央民族大学': '中国民族高等教育的最高学府，创办于1941年，民族学、社会学、语言学等领域特色鲜明。',
        '南开大学': '中国著名的综合性研究型大学，创办于1919年，文理并重，经济、化学、历史等学科实力突出。',
        '天津大学': '中国第一所现代大学，创办于1895年，以工科见长，化工、精仪、建筑等学科全国领先。',
        '大连理工大学': '中国东北地区重要的工科研究型大学，创办于1949年，化工、水利、机械等学科实力雄厚。',
        '东北大学': '中国东北地区重要的工科研究型大学，创办于1923年，自动化、计算机、材料等学科优势明显。',
        '吉林大学': '中国规模最大的综合性研究型大学之一，创办于1946年，学科门类齐全，法学、化学、车辆工程等实力突出。',
        '同济大学': '中国著名的工科综合性研究型大学，创办于1907年，土木工程、建筑学、交通运输等领域世界领先。',
        '华东师范大学': '中国师范教育的顶尖学府之一，创办于1951年，教育学、地理学、生态学等学科全国领先。',
        '东南大学': '中国著名的工科综合性研究型大学，创办于1902年，建筑学、电子科学、交通运输等领域实力突出。',
        '厦门大学': '中国风景最优美的综合性研究型大学之一，创办于1921年，经济、管理、化学、海洋等学科实力雄厚。',
        '山东大学': '中国历史悠久的综合性研究型大学，创办于1901年，文理医工协调发展，数学、中文等学科实力突出。',
        '中国海洋大学': '中国海洋科学领域的最高学府，创办于1924年，海洋科学、水产学等学科全国领先。',
        '华中科技大学': '中国中部地区工科实力最强的研究型大学之一，创办于1952年，机械、光电、电气等领域突出。',
        '湖南大学': '中国历史悠久的综合性研究型大学，创办于976年（岳麓书院），土木、机械、设计等学科实力雄厚。',
        '中南大学': '中国中部地区重要的综合性研究型大学，创办于2000年，材料、冶金、交通运输、医学等领域突出。',
        '华南理工大学': '中国南方工科实力最强的研究型大学之一，创办于1952年，轻工、建筑、材料等学科全国领先。',
        '四川大学': '中国西南地区最具影响力的综合性研究型大学，创办于1896年，文理医工协调发展，口腔医学全国第一。',
        '重庆大学': '中国西南地区重要的工科综合性研究型大学，创办于1929年，机械、电气、建筑等学科实力雄厚。',
        '电子科技大学': '中国电子信息领域的顶尖研究型大学，创办于1956年，电子科学与技术、通信工程等全国领先。',
        '西北工业大学': '中国航空、航天、航海领域的顶尖研究型大学，创办于1938年，三航特色鲜明，材料科学突出。',
        '兰州大学': '中国西北地区最具影响力的综合性研究型大学，创办于1909年，化学、草学、生态学等学科实力突出。',
        '西北农林科技大学': '中国西北地区农林领域的最高学府，创办于1934年，农学、林学、葡萄酒等学科特色鲜明。',
        '华东理工大学': '中国化工领域的顶尖研究型大学，创办于1952年，化学工程、材料科学等学科全国领先。',
    }
    intro = intros.get(name, '')

    comma = ',' if local_id != 38 else ''
    new_entry = f"""  {{
    id: {local_id},
    name: '{name}',
    province: '{province}',
    city: '{city}',
    batch: '{batch}',
    intro: '{intro}',
    hasDetail: true,
    schools: [],
{admission_block}
  }}{comma}"""

    # Replace in content
    content = content.replace(old_entry, new_entry, 1)
    print(f"  -> {len(cats)} categories added", flush=True)

# Write updated content
with open('/home/gmy_victor/my_portfolio/assets/js/data.js', 'w') as f:
    f.write(content)

print("\nDone! data.js updated.")
