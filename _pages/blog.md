---
permalink: /blog/
title: "Blog & Knowledge Base"
author_profile: true
---

<style>
.post-list {
  list-style: none;
  padding: 0;
}
.post-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.post-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.post-title {
  font-size: 1.3rem;
  margin-bottom: 8px;
}
.post-title a {
  color: #0366d6;
  text-decoration: none;
}
.post-title a:hover {
  text-decoration: underline;
}
.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 8px;
}
.post-excerpt {
  color: #444;
  line-height: 1.6;
}
.post-tags {
  margin-top: 10px;
}
.post-tag {
  display: inline-block;
  background: #e1e4e8;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-right: 6px;
  color: #586069;
}
</style>

欢迎来到我的博客和知识库！这里记录着我的学习笔记、技术分享和日常思考。

---

## 📝 最新文章

<ul class="post-list">
{% for post in site.posts %}
  <li class="post-item">
    <h3 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <div class="post-meta">
      📅 {{ post.date | date: "%Y-%m-%d" }}
      {% if post.categories %}
      · 📁 {{ post.categories | join: ", " }}
      {% endif %}
    </div>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
    {% endif %}
    {% if post.tags %}
    <div class="post-tags">
      {% for tag in post.tags %}
      <span class="post-tag">{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="color: #666; text-align: center; padding: 40px;">
  🚧 博客正在建设中，敬请期待...
</p>
{% endif %}

---

## 📚 分类

- **Tech** - 技术笔记、编程心得
- **Research** - 科研相关、论文笔记
- **Life** - 生活随想、读书笔记
- **Tools** - 效率工具、配置分享

---

<p style="text-align: center; color: #999; font-size: 0.9rem;">
  🤖 由 Jarvis 协助维护 · Powered by Jekyll & GitHub Pages
</p>
