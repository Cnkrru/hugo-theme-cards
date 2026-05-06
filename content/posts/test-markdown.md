+++
title = 'Markdown 渲染测试'
date = '2026-05-05T10:00:00+08:00'
draft = false
tags = ['测试', 'markdown']
categories = ['测试']
type = 'posts'
+++

## 标题层级

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 段落与换行

这是第一个段落。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

这是第二个段落。Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## 文本样式

- **粗体文本**
- *斜体文本*
- ~~删除线文本~~
- ***粗斜体文本***
- `行内代码`
- <mark>高亮文本</mark>
- 上标：H<sub>2</sub>O，下标：E=mc<sup>2</sup>

## 列表

### 无序列表
- 第一项
  - 嵌套项 1
  - 嵌套项 2
- 第二项
- 第三项

### 有序列表
1. 第一步
2. 第二步
   1. 子步骤 A
   2. 子步骤 B
3. 第三步

### 任务列表
- [x] 已完成任务
- [ ] 未完成任务
- [x] 又一个已完成任务

## 引用块

> 这是一段引用文本。
>
> 引用可以包含多行，也可以嵌套：
>> 这是嵌套的引用块。

## 代码块

### 行内代码
使用 `console.log()` 输出调试信息。

### 无语言指定
```
这是一个普通代码块
没有指定语言
```

### JavaScript
```javascript
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet('World');
```

### Python
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### Go
```go
package main

import "fmt"

func main() {
    ch := make(chan string)
    go func() {
        ch <- "Hello from goroutine!"
    }()
    msg := <-ch
    fmt.Println(msg)
}
```

### CSS
```css
.custom-class {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  transition: all 0.3s ease;
}
```

## 表格

| 功能 | 支持状态 | 备注 |
|:---:|:---:|:---|
| Markdown | ✅ | 完整支持 |
| Mermaid | ✅ | 需要启用 |
| KaTeX | ✅ | 需要启用 |
| 图片懒加载 | ✅ | 自动处理 |
| 代码高亮 | ✅ | 内置支持 |
| 多语言 | ✅ | i18n 支持 |

## 水平线

---

## 链接

- [外部链接 - GitHub](https://github.com)
- [外部链接 - Vercel](https://vercel.com)
- [内部链接 - 首页](/)

## 脚注

这是一个带有脚注的句子[^1]。这是另一个脚注[^2]。

[^1]: 这是第一个脚注的内容。
[^2]: 这是第二个脚注的内容，可以写很长。

## 折叠详情

<details>
<summary>点击展开详情</summary>

这是折叠内容区域，可以放置一些补充信息。

- 支持 Markdown
- **粗体**
- `代码`

</details>

## HTML 嵌入

<div style="padding: 1rem; background: var(--common-color-1); border-radius: 8px; color: white;">
  <strong>自定义 HTML 块</strong>
  <p>测试主题对自定义 HTML 的渲染效果。</p>
</div>
