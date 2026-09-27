"""Import the curated README entries into the static Paper Explorer.

Usage: python3 scripts/import_papers.py /path/to/README.md
"""
import html
import json
from pathlib import Path
import re
import sys


GROUPS = {
    1: "Benchmarks", 2: "Task Factory", 3: "Trajectories",
    4: "Post-training", 5: "Validity", 6: "Data Systems",
    9: "Further Reading",
}


def read_papers(source):
    papers = {}
    group = topic = ""
    entries = 0
    lines = source.splitlines()
    for index, line in enumerate(lines):
        if line.startswith("## "):
            section = re.search(r"(?:§|/> )(\d+)[. ]", line)
            group = GROUPS.get(int(section[1]), "") if section else ""
            topic = ""
        elif line.startswith("### "):
            topic = html.unescape(line[4:])
        elif group and line.startswith("- **`"):
            heading = re.match(r"- \*\*`([^`]+)`\*\* \*\*(.+?)\*\*\.", line)
            links = [{"label": label, "url": url} for label, url in
                     re.findall(r"\[\[([^\]]+)\]\((.*?)\)\]", line)]
            description = re.search(r"<i>(.*?)</i>", lines[index + 1])
            if not heading or not links or not description:
                raise ValueError(f"Unsupported README entry at line {index + 1}")
            entries += 1
            key = links[0]["url"]
            paper = papers.setdefault(key, {
                "title": html.unescape(heading[2]), "year": heading[1],
                "groups": [], "topics": [], "lessons": [], "tags": [], "links": [],
            })
            values = {
                "groups": [group], "topics": [topic] if topic else [],
                "lessons": [html.unescape(description[1])],
                "tags": re.findall(r"!\[([^\]]+)\]\(", lines[index + 2]),
                "links": links,
            }
            for field, items in values.items():
                for item in items:
                    if item not in paper[field]:
                        paper[field].append(item)
    return list(papers.values()), entries


if __name__ == "__main__":
    papers, entries = read_papers(Path(sys.argv[1]).read_text())
    root = Path(__file__).resolve().parents[1]
    original = json.loads((root / "assets/input/paper-explorer-original.json").read_text())
    indexed = {paper["links"][0]["url"]: paper for paper in papers}
    combined = []
    for paper in original:
        key = next((url for url, candidate in indexed.items()
                    if paper["url"] in [link["url"] for link in candidate["links"]]
                    or paper["title"] == candidate["title"]), None)
        source = indexed.pop(key) if key else None
        paper["groups"] = list(dict.fromkeys([paper["group"]] + (source["groups"] if source else [])))
        combined.append(paper)
    for source in indexed.values():
        url = source["links"][0]["url"]
        combined.append({
            "title": source["title"], "year": source["year"],
            "venue": "arXiv" if "arxiv.org/" in url else "Resource",
            "group": source["groups"][0], "groups": source["groups"],
            "tags": source["topics"] + source["tags"],
            "lesson": " ".join(source["lessons"]), "url": url,
        })
    output = root / "coding-agent-data" / "papers.js"
    output.write_text("// Original 19 cards plus additions from the curated README. See scripts/import_papers.py.\n"
                      + "window.surveyPapers = " + json.dumps(combined, ensure_ascii=False, indent=2) + ";\n")
    print(f"Read {entries} README entries / {len(papers)} unique works.")
    print(f"Preserved {len(original)} original cards; added {len(indexed)}; total {len(combined)}.")
    for group in GROUPS.values():
        print(f"{group}: {sum(group in paper['groups'] for paper in combined)}")
