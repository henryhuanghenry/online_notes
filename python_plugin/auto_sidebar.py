import js2py
import json
path = r"E:\A_Notes\docs\.vuepress\nav.json"
# 读取文件数据
parsed = js2py.parse_js(path)
with open(path, "r", encoding='utf-8') as f:
    row_data = json.load(f)
# 读取每一条json数据
for d in row_data:
    print(d)

# const navs = 
# module.exports = navs;