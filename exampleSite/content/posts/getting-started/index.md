+++
title = '开始使用 Cards 主题'
date = '2024-01-15T10:00:00+08:00'
draft = false
tags = ['hugo', '教程']
categories = ['指南']
type = 'posts'
+++

## 欢迎使用 Cards

Cards 是一个为 Hugo 设计的**卡片式博客主题**，专注于阅读体验和交互细节。

### 快速开始

```bash
# 创建新站点
hugo new site my-blog
cd my-blog

# 初始化主题
git init
git submodule add https://github.com/yourname/cards themes/cards

# 复制示例配置
cp themes/cards/exampleSite/hugo.toml .

# 启动预览
hugo server
```

### 核心特性

- **PJAX 无刷新导航** — 页面切换流畅，保留滚动位置
- **暗色模式** — 支持跟随系统、手动切换
- **多语言** — 内置 7 种语言（中/英/法/德/俄/印尼/繁体）
- **全文搜索** — 基于 Fuse.js 的模糊搜索
- **阅读增强** — 进度条、阅读时间、TOC 随滚动高亮
- **打字机动画** — 首页 Hero 特效
- **代码高亮** — Hugo Chroma，暗色代码块
- **数学公式** — KaTeX 支持
- **图表** — Mermaid 图表渲染
- **图片灯箱** — PhotoSwipe 5 响应式灯箱
- **社交分享** — 支持微信、QQ 等 8 个平台
- **PWA 支持** — 离线浏览、Service Worker 缓存

### 配置颜色

Cards 使用 CSS 变量系统，颜色完全可定制：

```toml
[params.colors.light]
    color1 = 'rgba(102, 126, 234, 1)'   # 主色调
    bg = 'white'                          # 背景色
    text = '#333'                         # 文字色
    content = 'white'                     # 内容区背景
    hover = 'rgba(102, 126, 234, 1)'      # 悬停色
```

祝你写作愉快！
