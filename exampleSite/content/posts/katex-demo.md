+++
title = '数学公式渲染'
date = '2026-05-05T14:00:00+08:00'
draft = false
tags = ['math', 'katex']
categories = ['演示']
math = true
type = 'posts'
+++

本文展示主题对数学公式的支持，使用 KaTeX 引擎渲染。

## 行内公式

质能方程 $E = mc^2$ 由爱因斯坦提出，揭示了质量与能量的等价关系。

勾股定理：$a^2 + b^2 = c^2$，描述了直角三角形三边关系。

欧拉公式：$e^{i\pi} + 1 = 0$，被誉为最美的数学公式。

## 独立公式

### 二次方程求根公式

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### 定积分

$$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$

### 矩阵运算

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
\times
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\
b_2 \\
b_3
\end{bmatrix}
$$

### 求和与极限

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\lim_{x \to \infty} \frac{1}{x} = 0$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

### 偏微分方程

$$\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$$

### 概率统计

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

$$\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}$$

### 向量分析

$$\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z}\right)$$

$$\nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$$
