+++
title = 'Mermaid 图表展示'
date = '2026-05-05T12:00:00+08:00'
draft = false
tags = ['mermaid', 'diagram']
categories = ['演示']
mermaid = true
type = 'posts'
+++

本文展示主题对 Mermaid 图表的支持，可以直接在 Markdown 中绘制各种图表。

## 流程图

```mermaid
graph TD
    A[开始] --> B{判断条件}
    B -->|条件成立| C[执行操作1]
    B -->|条件不成立| D[执行操作2]
    C --> E[结束]
    D --> E
```

## 时序图

```mermaid
sequenceDiagram
    participant 用户
    participant 浏览器
    participant 服务器
    participant 数据库

    用户->>浏览器: 输入网址
    浏览器->>服务器: 发送 HTTP 请求
    服务器->>数据库: 查询数据
    数据库-->>服务器: 返回结果
    服务器-->>浏览器: 返回 HTML 响应
    浏览器-->>用户: 渲染页面
```

## 类图

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +String breed
        +fetch()
    }
    class Cat {
        +String color
        +climb()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

## 状态图

```mermaid
stateDiagram-v2
    [*] --> 待处理
    待处理 --> 处理中: 开始处理
    处理中 --> 已完成: 处理成功
    处理中 --> 失败: 处理失败
    失败 --> 待处理: 重试
    已完成 --> [*]
```

## 饼图

```mermaid
pie title 技术栈使用比例
    "JavaScript" : 40
    "Python" : 25
    "Go" : 20
    "Rust" : 10
    "其他" : 5
```

## 甘特图

```mermaid
gantt
    title 项目开发计划
    dateFormat  YYYY-MM-DD
    section 设计阶段
    需求分析           :a1, 2026-01-01, 7d
    UI设计             :a2, after a1, 10d
    section 开发阶段
    前端开发           :a3, after a2, 15d
    后端开发           :a4, after a2, 20d
    section 测试阶段
    集成测试           :a5, after a3, 10d
    用户验收           :a6, after a5, 5d
```
