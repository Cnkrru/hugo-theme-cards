+++
title = 'Markdown 语法展示'
date = '2026-05-06T10:00:00+08:00'
draft = false
tags = ['markdown', 'syntax']
categories = ['文档']
type = 'posts'
+++

## 标题层级

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 段落与文本样式

这是普通段落文本。**这是粗体文本**，*这是斜体文本*，~~这是删除线文本~~，***这是粗斜体文本***。

`行内代码` 用于展示短代码片段。还可以使用 <mark>高亮标记</mark> 来强调内容。

## 列表

### 无序列表

- 第一项内容
  - 嵌套子项 A
  - 嵌套子项 B
- 第二项内容
- 第三项内容

### 有序列表

1. 第一步操作
2. 第二步操作
   1. 子步骤 A
   2. 子步骤 B
3. 第三步操作

### 任务列表

- [x] 已完成的功能开发
- [x] 文档编写
- [ ] 待测试的功能
- [ ] 发布新版本

## 引用块

> 这是一段引用文本，用于展示引用的样式效果。
>
> 引用块可以包含多行内容，也可以嵌套使用：
>> 这是嵌套的引用块，展示层级关系。

## 代码块

### JavaScript

```javascript
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);
```

### Python

```python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))
```

### CSS

```css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}
```

## 表格

| 功能特性 | 支持状态 | 备注说明 |
|:---:|:---:|:---|
| Markdown 渲染 | ✅ | 完整支持标准语法 |
| 代码高亮 | ✅ | 内置 Chroma 高亮 |
| 图片懒加载 | ✅ | 自动处理内容图片 |
| 数学公式 | ✅ | KaTeX 渲染 |
| Mermaid 图表 | ✅ | 流程图、时序图等 |
| 多语言 | ✅ | i18n 国际化支持 |
| 深色模式 | ✅ | 自动/手动切换 |
| 全文搜索 | ✅ | Fuse.js 搜索 |

## 水平线

---

## 链接

- [外部链接 - Hugo 官网](https://gohugo.io/)
- [外部链接 - GitHub](https://github.com)
- [站内链接 - 首页](/)

## 脚注

这是一个带有脚注的示例文本[^1]。这是另一个脚注引用[^2]。

[^1]: 这是第一个脚注的详细内容。
[^2]: 这是第二个脚注的内容，可以写很长的说明文字。

## 折叠详情

<details>
<summary>点击展开折叠内容</summary>

这是折叠区域的内容，可以放置一些补充信息或详细说明。

- 支持 Markdown 语法
- **粗体文本**
- `代码片段`

</details>
