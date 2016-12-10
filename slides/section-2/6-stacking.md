title: 定位和堆叠上下文

# 定位

---

## position

* static，非定位，默认值
* relative，相对定位（相对自己）
* absolute，绝对定位，相对非 static 祖先元素定位
* fixed，相对于视口绝对定位

---

```markup
<figure>
  <img src="http://s3.qhimg.com/static/65796cb8649a8770/d.jpg"
    width="512" alt="daisy">
  <figcaption>图片标题</figcaption>
</figure>

<style>
  figure {
    width: 512px;
  }
  figure img {
    display: block;
  }
  figcaption {
    position: relative;
    top: -28px;
    background: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 14px;
    line-height: 2;
    padding: 0 1em;
  }
</style>
```

---

```markup
<figure>
  <img src="http://s3.qhimg.com/static/65796cb8649a8770/d.jpg"
    width="512" alt="daisy">
  <figcaption>图片标题</figcaption>
</figure>

<style>
  figure {
    width: 512px;
    position: relative;
  }
  figure img {
    display: block;
  }
  figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 14px;
    line-height: 2;
    padding: 0 1em;
  }
</style>
```

---

## 自动计算

* 这些值都可以不指定

    * top
    * left
    * right
    * bottom
    * width
    * height

* 如果冲突了怎么办?

---

```markup
<p>Enter your email below to get exclusive access to
our best articles and tips before everybody else.</p>
<div class="box">
  绝对定位内容。
</div>
<p>Just look at the image at the top of this article
to see how it will all work. Yes, you can install VLC
or another piece of Windows software that easily!
After you run the command, OneGet will locate the
package in your configured package sources, download
it to your computer, and install it — all
automatically.</p>

<style>
.box {
  position: absolute;
  background: #f00;
  color: #fff;
}
</style>
```

---

## `position:fixed`

* 相对于 `Viewport` 定位
* 不会随页面滚动发生位置变化

---

## 堆叠层次

* z-index，整数
* z-index大的一定在上面吗？

---

## z-index的大小与层次

```markup
<nav>
  <ul>
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</nav>

<div id="dialog" hidden>
  dialog content
</div>

<style>
  nav {
    position: fixed;
    top: 0;
  }
  nav ul {
   position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: red;
    padding: 1em;
    width: 10em;
  }
  #dialog {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background: blue;
    height: 10em;
    width: 10em;
  }



  body {
    color: #fff;
  }
  li {
    margin: 1em 0;
    list-style:none;
  }
  #dialog {
    padding: 1em;
  }
  ul {
    padding: 1em;
  }
</style>

<script>
  document.querySelector('nav').addEventListener('click',
  function() {
    document.querySelector('#dialog').hidden = false;
  })
</script>
```

---

### 堆叠层次

* z-index指定元素在所属堆叠上下文中的层次
* 堆叠上下文的形成
    * z-index值为非auto的定位元素

---

### 绘制顺序

* 每个堆叠上下文中， 从下到上的顺序显示：
    * background, boder
    * z-index为负值的定位元素
    * 正常块级元素
    * 浮动
    * 行级元素
    * z-index为0
    * z-index为正数

---


bgcolor: green

<<+++++++++ :fa-comments: +>>


