# Paper Explorer 更新

来源：`/Users/yzb/Desktop/research/exp48_awesome-data-for-coding-agents/README.md`，本地 HEAD `9af37f4`，README 无未提交修改。日期：2026-09-27。

保留原有 19 条卡片的标题、年份、来源、说明、标签、链接和顺序。README 有 95 次文献收录，合并为 85 篇作品，其中新增 66 篇。Contributing 中的格式示例不计入。卡片继续采用原来的展示形式；新增 Validity、Data Systems、Further Reading 筛选按钮。重复作品保留跨分类检索能力。

`coding-agent-data/papers.js` 保存页面数据；`assets/input/paper-explorer-original.json` 保存原有 19 条记录；`scripts/import_papers.py` 从 README 生成合并数据。更新命令（在 repo 目录执行）：

```sh
python3 scripts/import_papers.py /Users/yzb/Desktop/research/exp48_awesome-data-for-coding-agents/README.md
```

新增记录的描述、年份、标签和主链接来自 README；原有 19 条内容按要求保留。本次没有重新核验各论文的实验结论或所有远端链接。非 arXiv 新记录以 Resource 标记，不推断发表会议。

验证：JavaScript 语法通过；原有 19 条字段逐项相等；85 个唯一主链接；全部文献条目已读取。浏览器显示 85 张卡片，七类筛选分别返回 20、22、20、21、3、6、6 条；由于分类可重叠，数量不能相加。HumanEval 搜索返回 1 条，未匹配查询显示空结果，清空恢复 85 条。390px 视口下页面宽度为 390px，无横向溢出。

文献扩充已随提交 `16956a9` 推送到远端 main。
