title: CSS
theme: material

---

# CSS 布局实践

---

## 赵文博

* 360 奇舞团高级技术经理
* 从 IE6 时代走来的前端工程师

---

## 布局 Layout

* 确定内容的大小和位置
* 从整体到局部

---

## 核心技术

* float
* position
* table
* flex
* grid
* media query

---

## 没那么简单

* 兼容性
* 内容适配
* 响应式

---

## 左右两栏

<div id="example1">
  <style>
    #example1 { width: 50vw; overflow: hidden; resize: horizontal; }
    #example1 header { height: 10vh; background: #c66 }
    #example1 main { height:30vh; background: #6c6; overflow: hidden }
    #example1 aside { width: 100px; height:30vh; background: #66c;float:left }
    #example1 footer { width: 100%; height: 10vh; background: #6cc; clear:both }
  </style>
  <header></header>
  <aside></aside>
  <main></main>
  <footer></footer>
</div>

---

## 使用 float 实现

```markup
<main>
  <aside>aside</aside>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content).
  </article>
</main>

<style>
  aside {
    width: 10em;
    float: left;
    background: lightblue;
  }
  article {
    overflow: hidden;
    background: coral;
  }
</style>
```

---

## (伪)等高

```markup
<main>
  <aside>aside</aside>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
</main>

<style>
  main {
    overflow: hidden;
  }
  article {
    overflow: hidden;
    background: coral;
    padding-bottom: 99em;
    margin-bottom: -99em;
  }
  aside {
    width: 10em;
    float: left;
    background: lightblue;
    padding-bottom: 99em;
    margin-bottom: -99em;
  }
</style>
```

---

## DOM 顺序调整

```markup
<main>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
  <aside>aside</aside>
</main>

<style>
  main {
    padding-left: 10em;
    overflow: hidden;
  }
  article {
    float: left;
    width: 100%;
    background: coral;
    height: 10em;
  }
  aside {
    width: 10em;
    float: left;
    margin-left: -10em;
    position: relative;
    left: -100%;
    background: lightblue;
    height: 10em;
  }
</style>
```

---

## 使用 position 实现

```markup
<main>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
  <aside>aside</aside>
</main>

<style>
  main {
    font-size: 14px;
    position: relative;
  }
  article {
    background: coral;
    margin-left: 10em;
  }
  aside {
    width: 10em;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: lightblue;
  }
</style>

---

## display table

```markup
<main>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
  <aside>aside</aside>
</main>
<style>
  main {
    display: table;
    width: 100%;
  }
  article, aside {
    display: table-cell;
    padding: 1em;
  }
  article {
    background: coral;
  }
  aside {
    width: 10em;
    background: lightblue;
  }
</style>
```

---

## flex

```markup
<main>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
  <aside>aside</aside>
</main>
<style>
  main {
    display: flex;
  }
  article {
    background: coral;
    flex: 1;
    order: 2;
  }
  aside {
    width: 10em;
    order: 1;
    background: lightblue;
  }
</style>
```

---

## grid

```markup
<main>
  <article>The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph,
    or number), and the marker position with respect to the principal
    box (outside it or within it before content). 
  </article>
  <aside>aside</aside>
</main>
<style>
  main {
    display: grid;
    grid-template-columns: 1fr 10em;
  }
  article {
    background: coral;
  }
  aside {
    background: lightblue;
  }
</style>
```

---


## 兼容性

|               | :fa-internet-explorer: | :fa-chrome:   | :fa-firefox:  |
|---------------|---------------------|------------|------------|
| float         | :fa-check:          | :fa-check: | :fa-check:
| position      | :fa-check:          | :fa-check: | :fa-check:
| display:table | 8+                  | :fa-check: | :fa-check:
| flex          | 10+                 | :fa-check: | :fa-check:
| grid          | 10+                 | 57+        | 52+

---

## 小结

<style>
  .diapo-content table td,.diapo-content table th { padding-left: 1em; padding-right: 1em }
</style>

|               | 兼容性 | 易用性   | 局限  |
|---------------|---------------------|------------|------------|
| float         | 非常好          | 差     | 无法实现等高、灵活性差
| position      | 非常好          | 好     | 容器高度无法自适应、灵活性差
| display:table | 好              | 一般   | 有时需要额外标签嵌套、无法调整顺序
| flex          | 差              | 非常好 |
| grid          | 非常差          | 非常好 |

---

## 导航栏式布局

<style>
  #example2 { resize: horizontal; width: 60vw; overflow: hidden;padding-bottom:1em }
  #example2 nav { display: table; width: 100%; background: #c63; }
  #example2 nav a { display: table-cell; text-align: center; color: #fff; text-decoration: none; line-height: 3; padding: 0 1em; position: relative }
  #example2 nav a:before {content:''; display: block; width: 1px; height: 1em; background: rgba(255,255,255,0.5); position: absolute; left: -1px; top: 1em }
</style>
<div id="example2">
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
    <a href="#">About</a>
  </nav>
</div>

---

## float

```markup
<nav>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Contact</a>
  <a href="#">About</a>
</nav>
<style>
  nav {
    overflow: hidden;
    line-height: 3;
    text-align: center;
    background: #f99
  }
  nav a {
    float: left;
    width: 25%;
  }
</style>
```

---

## table

```markup
<nav>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Contact</a>
  <a href="#">About</a>
</nav>
<style>
  nav {
    display: table;
    width: 100%;
    line-height: 3;
    text-align: center;
    background: #f99
  }
  nav a {
    display: table-cell
  }
</style>
```

---

## flex

```markup
<nav>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Contact</a>
  <a href="#">About</a>
</nav>
<style>
  nav {
    display: flex;
    line-height: 3;
    text-align: center;
    background: #f99
  }
  nav a {
    flex: 1
  }

</style>
```

---

## grid

```markup
<nav>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Contact</a>
  <a href="#">About</a>
</nav>
<style>
  nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
    line-height: 3;
    text-align: center;
    background: #f99
  }

</style>
```

---

## 头尾固定

<style>
  #example3 { resize: vertical; overflow: hidden; height: 60vh; width: 50vw; }
  #example3 header { height: 3em; background:#cc9 }
  #example3 main { height: calc(100% - 6em); background:#f96; overflow-y: auto }
  #example3 footer { height: 3em; background:#69f }
  #example3 article { height: 200vh; background: linear-gradient(to bottom, #22c1c3, #fdbb2d); }
</style>
<div id="example3">
  <header></header>
  <main>
    <article></article>
  </main>
  <footer></footer>
</div>

---

## position

```markup
<header></header>
<main></main>
<footer></footer>

<style>
  body {
    margin: 0;
  }
  header, footer, main {
    position: absolute;
    width: 100%;
  }
  header {
    top: 0;
    height: 3em;
    background: #cc9;
  }
  footer {
    bottom: 0;
    height: 3em;
    background: #69f;
  }
  main {
    top: 3em;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f96;
  }
</style>
```

---

## calc()

```markup
<header></header>
<main></main>
<footer></footer>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }
  header {
    height: 3em;
    background: #cc9;
  }
  footer {
    height: 3em;
    background: #69f;
  }
  main {
    height: calc(100% - 6em);
    background: #f96;
  }
</style>
```

---

## flex

```markup
<header></header>
<main></main>
<footer></footer>

<style>
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  header {
    height: 3em;
    background: #cc9;
  }
  footer {
    height: 3em;
    background: #69f;
  }
  main {
    flex: 1;
    background: #f96;
  }
</style>
```

---

## grid

```markup
<header></header>
<main></main>
<footer></footer>

<style>
  body {
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-rows: 3em 1fr 3em;
  }
  header {
    background: #cc9;
  }
  footer {
    background: #69f;
  }
  main {
    background: #f96;
  }
</style>
```

---

## 网格型

<style>
  #example4 {
    resize: horizontal;
    overflow: hidden
  }
  #example4 ul {
    display: grid;
    width: 60vw;
    grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
    grid-gap: 1em;
  }
  #example4 li {
    display: block;
    background: #f99;
    margin: 0;
    padding-top: 100%
  }
</style>
<div id="example4">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

---

## float + media query

```markup
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    float: left;
    display: block;
    margin: 0 1em 1em 0;
    height: 5em;
    background: #f99;
  }
  @media (max-width: 480px) {
    li {
      width: calc((100% - 1em) / 2);
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (min-width: 481px) and (max-width: 720px) {
    li {
      width: calc((100% - 2em) / 3);
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
  }
  @media (min-width: 721px) and (max-width: 1000px) {
    li {
      width: calc((100% - 3em) / 4);
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
  }
  @media (min-width: 1001px) {
    li {
      width: calc((100% - 4em) / 5);
    }
    li:nth-child(5n) {
      margin-right: 0;
    }
  }
</style>
```

---

## 保持高宽比

```markup
  <div></div>
  <style>
    div {
      padding-top: 50%;
      background: #f66;
    }
  </style>
```

---

## flex

```markup
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<style>
  body {
    overflow: hidden;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    margin-right: -1em;
  }
  li {
    display: block;
    min-width: 200px;
    max-width: 300px;
    flex: 1;
    margin: 0 1em 1em 0;
    background: #f99;
  }
  li:after {
    content: '';
    display: block;
    height: 0;
    padding-top: 60%;
  }
</style>
```

---

## grid

```markup
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1em;
    padding: 0;
  }
  li {
    display: block;
    margin: 0;
    background: #f99;
  }
  li:after {
    content: '';
    display: block;
    padding-top: 60%;
  }
</style>
```

---

![weekly](https://p1.ssl.qhimg.com/t01e88440b10da41210.png)

---

## 居中

---

## 水平居中

```markup
<article>
  <h1>Colors and Backgrounds</h1>
  <p>CSS properties allow authors to specify the foreground
    color and background of an element. Backgrounds may be
    colors or images. Background properties allow authors to
    position a background image, repeat it, and declare
    whether it should be fixed with respect to the viewport
    or scrolled along with the document.</p>
</article>

<style>
  article {
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
    background: lightblue;
    line-height: 1.8;
    max-width: 40em;
  }
  h1 {
    background: coral;
    text-align: center;
  }
</style>
```

---

## 单行文字垂直居中

```markup
<h1>CSS Vertical Align</h1>

<style>
  h1 {
    background: #f99;
    line-height: 4;
    text-align: center
  }
</style>
```

---

## inline-block 垂直居中

```markup
<p><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i> 加载中...</p>

<link rel="stylesheet"
  href="http://lib.baomitu.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  p {
    text-align: center
  }
  .fa {
    vertical-align: middle
  }
</style>
```

---

## 绝对定位

```markup
<div class="modal" role="dialog">
</div>

<style>
  .modal {
    position: fixed;
    width: 20em;
    height: 10em;
    top: 50%;
    left: 50%;
    margin-left: -10em;
    margin-top: -5em;
    background: #f99;
  }
</style>
```

---

```markup
<div class="modal" role="dialog">
</div>

<style>
  .modal {
    position: fixed;
    width: 20em;
    height: 10em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f99;
  }
</style>
```

---

## flex

```markup
<div class="modal" role="dialog">
</div>

<style>
  body {
    display: flex;
    height: 100vh;
  }
  .modal {
    margin: auto;
    width: 20em;
    height: 10em;
    background: #f99;
  }
</style>
```

---

bgcolor: green

<<+++++++++ :fa-comments: +>>

---

fragment: true

## 总结

* 布局套路
  * 多栏、导航、头尾固定、网格、居中
* 相关技术
  * `float / position / calc`
  * `display: table | flex | grid`
* 使用场景
  * 兼容性、内容变化、响应式
* 没有最好的，只有最合适的

---

![weekly](https://p1.ssl.qhimg.com/t01e88440b10da41210.png)



