---
title: '程序员效率工具推荐'
date: 2026-01-30
permalink: /posts/2026/01/programmer-productivity-tools/
tags:
  - 工具
  - 效率
  - 编程
categories:
  - Tech
---

作为程序员，好的工具可以大幅提升效率。以下是我常用的工具清单。

## 终端工具

| 工具 | 用途 | 安装 |
|------|------|------|
| tmux | 终端复用，保持会话 | `brew install tmux` |
| zsh + oh-my-zsh | 更强大的 shell | [安装指南](https://ohmyz.sh/) |
| fzf | 模糊搜索神器 | `brew install fzf` |
| ripgrep | 比 grep 更快的搜索 | `brew install ripgrep` |

## 编辑器

- **Cursor** - AI 增强的 VS Code，代码补全超强
- **Neovim** - 终端下的效率之王，学习曲线陡峭但值得
- **JetBrains** - 重型 IDE，Java/Python 开发首选

## AI 工具

| 工具 | 场景 |
|------|------|
| Claude Code | 命令行 AI 助手，复杂任务 |
| GitHub Copilot | 实时代码补全 |
| Moltbot | 个人 AI 助理，多平台 |

## 我的 Shell 配置

```bash
# 常用别名
alias ll='ls -la'
alias gs='git status'
alias gp='git push'
alias gc='git commit -m'
alias gd='git diff'

# 快速跳转
alias kb='cd ~/knowledge-base'
alias dev='cd ~/Developer'
alias proj='cd ~/Documents/github'

# 一键启动
alias serve='python -m http.server 8000'
alias notebook='jupyter notebook'
```

## 快速安装

macOS 一键安装常用工具：

```bash
brew install tmux fzf ripgrep bat exa git-delta

# 配置 fzf
$(brew --prefix)/opt/fzf/install
```

---

工具只是手段，关键是找到适合自己的工作流。
