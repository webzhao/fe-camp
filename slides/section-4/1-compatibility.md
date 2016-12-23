title: 浏览器兼容性
transition: slide

---

# 浏览器兼容性

---

## CSS 中的兼容性问题

* 浏览器不支持该特性
* 某些特定条件下触发浏览器 bug

---

## 浏览器特性支持

---

## 了解浏览器支持情况

* [caniuse.com](http://caniuse.com/)
* [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Codrops CSS Reference](https://tympanus.net/codrops/css_reference/)
* [QuirksMode.org CSS](http://www.quirksmode.org/css/index.html)

---

## 你需要兼容哪些浏览器？

* 根据用户群体决定
  * 面向普通用户：IE8+、Chrome、Firefox
  * 企业级产品：IE9+、Chrome、Firefox

* 了解浏览器市场份额
  * 日志分析
  * [百度统计](http://tongji.baidu.com/data/browser)、[NetMarketShare](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)

---

fragment: true

## 浏览器不支持时怎么办？

* 如果低版本浏览器没有这个特性可以接受吗？
  * `border-radius` 不支持时，没有圆角
  * `box-shadow` 不支持时，没有阴影

* 可以使用效果稍微差一些的替代方案吗？
  * `min-height: 100vh`，用 `min-height: 800px`

* 可以使用一些替代方案吗？
  * `opacity: 0.5` 在 IE 下用 `filter: alpha(opacity=50)`

* 可以使用 JavaScript 让浏览器支持吗？
  * 使用 `html5shim.js` 让 IE6 ～8 支持新标签
  * 使用 `DD_belatedPNG.js` 让 IE6 支持半透明 png 图片

* 更换实现方式

---

fragment: true

## 不同浏览器使用不同的样式

* `@supports`
* 层叠
* 条件注释
* 浏览器怪癖

---

## `@supports`

```css
.container {
  display: flex;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template: repeat(4, 1fr) / 50px 100px;
  }
}
```

---

## `@supports` 兼容性

<<++

| :fa-chrome: | :fa-edge: | :fa-internet-explorer: | :fa-firefox: | :fa-opera: | :fa-safari: |
|-------------|-----------|------------------------|--------------|------------|-------------|
| 28.0        | Yes       | No                     | 22           | 12.1       | 9           |

+>>

---

fragment: true

## 浏览器 hack 原理 - 层叠

* 同一个属性，后面书写的值覆盖前面书写的值

  ```css
  p {
    line-height: 2;
    line-height: 3;
  }
  ```

* (对浏览器)无效的属性(值)会被忽略

  ```css
  p {
    display: table;
    display: flex;
  }
  ```

---

## 浏览器 hack 原理 - 条件注释

```markup
<!--[if IE 7 ]>
  <p>只能在 IE 7 下看到我。</p>
<![endif]-->

<!--[if lt IE 8 ]>
  <p>只能在小于 IE 8 的浏览器看到我。</p>
<![endif]-->
```


```markup
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]> <html class="ie7"> <![endif]-->
<!--[if IE 8 ]> <html class="ie8"> <![endif]-->
<!--[if IE 9 ]> <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
  <html class="w3c">
<!--<![endif]-->
```

---

## 浏览器的怪癖

---

## :fa-internet-explorer: Internet Explorer 6

```css
/* IE6 不支持两个类选择器直接组合 */
.unused-class.selector {
  /* IE 6 only CSS */
}

.container {
  height: 100px;
  /* 只有IE6会忽略_ */
  _height: 200px;
}

---

## :fa-internet-explorer: Internet Explorer 7

```css
.container {
  height: 100px;
  /* 只有 IE6 和 7 会忽略* */
  *height: 200px;
}
```

---

## :fa-internet-explorer: Internet Explorer 8

```css
/* IE6-8 不支持 :root 选择器 */
:root .selector {
  /* IE6-8 Style */
}

.selector {
  color: #fff;
  /* IE6-8 会忽略\9 */
  color: #fff\9;
}
```

---

```css
.tip {
  background: blue;
  background: red\9;
  *background: black;
  _background: orange;
}
```

---

## CSS2 选择器兼容性

主要兼容性问题在 IE6-7 上

---

## IE6 不支持多个类直接组合

* `p.class-a.class-b` 被当成 `p.class-b`
* 解决办法：处理好选择器优先级

---

## IE6 不支持父子、兄弟选择器

* `E > F、E + F 和 E ~ F` 选择器无效
* 解决方法：避免使用，换后代选择器或其它

---

## IE6 不支持属性选择器

* 任何一种都不支持
* 解决办法：用 `class`

---

## IE6-7 不支持伪元素

* 不支持 `:before` 和 `:after`
* 解决办法：改变实现方式，或在 HTML 中添加标签

---

## IE6 不支持某些伪类

* 非链接不能使用 `:hover`、`:active`
* 解决办法：使用 `a` 嵌套需要 hover 的元素

---

## IE6-7 不支持 `:focus` 伪类

* 解决办法：使用 JavaScript

---

## IE 6 不支持 `:first-child` 伪类

* 解决办法：给第一个子元素添加 `class="first"`

---

## CSS3 选择器兼容性

* CSS3 中的大部分选择器，兼容性是 IE9+
* 例如 `:target :empty :nth-child :nth-of-type
  :checked :disabled` 无法在 IE6-8 用
* 移动端支持绝大多数 CSS3 选择器

---


## CSS2 属性

问题主要集中在 IE6 上，一小部分 IE7 也不支持

---

## IE6 不支持 `min/max-width/height`

* min-height 解决办法：
  ```css
    div {
      min-height: 500px;
      _height: 500px;
    }
  ```

* min-width 解决办法
  ```markup
  <div class="container">
    <div class="strut"></div>
    <!-- other content -->
  </div>
  <style>
    .container {
      min-width: 500px;
    }
    /* IE6 */
    .container .strut {
      height: 1px;
      width: 500px;
    }
  </style>
  ```

* max-width/height 解决办法
  * 使用 JavaScript

---

## IE6 不支持 `position: fixed`

```css
html, body {
  height: 100%;
}
.go-top {
  position: fixed;
  _position: absolute;
  bottom: 0;
  right: 0;
}
```

---

## IE6-7 不支持块级元素 `inline-block`

* 行级元素支持，而块级元素不支持
* 解决办法
  ```css
  .selector {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }
  ```

---

## IE6-7 不支持 `display:table`

* 请使用 `float` 或 `inline-block` 布局
* 不要使用 `table` 布局

---

## CSS3 属性

* IE6-7 不支持
* IE8 部分支持
* IE9 基本都支持

---

## IE8 支持

* `box-sizing`
* `outline`

---

## IE8 不支持

* `background-size`
  * 推荐在 IE8 及以下使用固定宽度布局
* `border-radius`
* `box-shadow`
* `opacity`
  * `filter: alpha(opacity=50)`
* `rgba、hsl、hsla`
  * 一般场景下，使用相近的不透明颜色代替
  * Alpha 可以通过增加额外元素，并设置透明度实现
* `rem/vh/vw/calc`
  * 降级为固定宽度

---

## IE9 不支持

* `transition` 与 `animation`
  * 可以接受的降级
  * 实在不能接收就用 JavaScript

---

## media query

* 基本的媒体（all/print/screen/speech）都支持
* 媒体特性（width/height/orientation...）IE9 及以上
  * 还是建议 IE8 及以下使用固定宽度布局

---

## 浏览器前缀

* 浏览器厂商为了实验新特性，在属性名前加前缀
* Chrome/Safari/Opera: `-webkit-`
* Microsoft: `-ms-`
* Mozilla: `-moz-`

---

## 2D Transform

<<++

| :fa-chrome: | :fa-internet-explorer: | :fa-edge: | :fa-firefox: | :fa-opera: | :fa-android: | :fa-apple: |
|:-----------:|:----------------------:|:---------:|:------------:|:----------:|:------------:|:----------:|
| 4+<sup>p</sup> 35+ | 9+<sup>p</sup> 10+ | Yes | 3.5+<sup>p</sup> 16+ | 11.5+<sup>p</sup> 23+ | 2.1+<sup>p</sup> 5+ | 3.2+<sup>p</sup> 9.2+ |

+>>

---

```css
.example {
  -webkit-transform: translate(100px, 0);
      -ms-transform: translate(100px, 0);
          transform: translate(100px, 0)
}
```

---

## 3D Transform

<<++

| :fa-chrome: | :fa-internet-explorer: | :fa-edge: | :fa-firefox: | :fa-opera: | :fa-android: | :fa-apple: |
|:-----------:|:----------------------:|:---------:|:------------:|:----------:|:------------:|:----------:|
| 12+<sup>p</sup> 35+ | 10+ | Yes | 10+<sup>p</sup> 16+ | 15+<sup>p</sup> 23+ | 3+<sup>p</sup> 5+ | 3.2+<sup>p</sup> 9.2+ |

+>>

---

## [Transform in IE](https://msdn.microsoft.com/en-us/library/ms532853(v=vs.85).aspx)

```css
.selector {
  -webkit-transform: rotate(40deg) scale(2.0);
      -ms-transform: rotate(40deg) scale(2.0);
          transform: rotate(40deg) scale(2.0);
     filter: progid:DXImageTransform.Microsoft.Matrix(
        sizingMethod='auto expand',
        M11=1.5320888862379554, M12=-1.2855752193730787,
        M21=1.2855752193730796, M22=1.5320888862379558
      );
}
```

---

## Transition

<<++

| :fa-chrome: | :fa-internet-explorer: | :fa-edge: | :fa-firefox: | :fa-opera: | :fa-android: | :fa-apple: |
|:-----------:|:----------------------:|:---------:|:------------:|:----------:|:------------:|:----------:|
| 4+<sup>p</sup> 26+ | 10+ | Yes | 4+<sup>p</sup> 16+ | 10.5+<sup>p</sup> 23+ | 2.1+<sup>p</sup> 4.4+ | 3.2+<sup>p</sup> 7.1+ |

+>>

---

```css
.example {
    -webkit-transform: translate(100px, 0);
        -ms-transform: translate(100px, 0);
            transform: translate(100px, 0);
    -webkit-transition: -webkit-transform .5s ease;
            transition: -webkit-transform .5s ease;
            transition: transform .5s ease;
}
```

---

iframe(src="https://autoprefixer.github.io/" fullscreen)

---

## Animation

<<++

| :fa-chrome: | :fa-internet-explorer: | :fa-edge: | :fa-firefox: | :fa-opera: | :fa-android: | :fa-apple: |
|:-----------:|:----------------------:|:---------:|:------------:|:----------:|:------------:|:----------:|
| 4+<sup>p</sup> 43+ | 10+ | Yes | 5+<sup>p</sup> 16+ | 12+<sup>p</sup> 30+ | 2.1+<sup>p</sup> 5+ | 3.2+<sup>p</sup> 9.2+ |

+>>


---

## Flexbox

<<++

| :fa-chrome: | :fa-internet-explorer: | :fa-edge: | :fa-firefox: | :fa-opera: | :fa-android: | :fa-apple: |
|:-----------:|:----------------------:|:---------:|:------------:|:----------:|:------------:|:----------:|
| 4+<sup>p</sup> 29+ | 10+<sup>p</sup> 11 | Yes | 2+<sup>p</sup> 28+ | 15+<sup>p</sup> 17+ | 2.1+<sup>p</sup> 5+ | 3.2+<sup>p</sup> 7.1+ |

+>>

---

## 语义化的 HTML5 标签

```markup
<style>
  article, main, nav, aside, section,
  header, footer, figure, figcaption {
    display: block;
  }
</style>

<!--[if lte IE 8]>
  <script src="html5shiv.js"></script>
<![endif]-->
```

---

## html5shiv.js

```javascript
(function() {
  var tags = "abbr,article,aside,audio,canvas,datalist,details,\
    dialog,eventsource,figure,footer,header,hgroup,mark,menu,\
    meter,nav,output,progress,section,time,video".split(/,\s*/);
  var i = tags.length;
  while(i--) {
    document.createElement(tags[i]);
  }
})();
```

---

## 浏览器 Bug

---

## IE6 下半透明 png 显示不正确

* [DD_belatedPNG.js](http://www.dillerdesign.com/experiment/DD_belatedPNG/)
* filter
  ```css
  .selector {
    background: url(/path/to/img.png) no-repeat;
    _background: none;
    /* 图片URL必须是完整路径 */
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
      src='/path/to/img.png',
      sizingMethod='crop'
    );
  }
  ```
---

## IE6 浮动双边距

* 浮动元素的与浮动同方向的边距加倍
  ```css
  .selector {
    float:left;
    /* IE6下显示为20px */
    margin-left: 10px;
  }
  ```

* 解决办法
  ```css
  .selector {
    float: left;
    margin-left: 10px;
    _display: inline;
  }
  ```

---

## hasLayout

* [On Having Layout](https://github.com/old9/on-having-layout-zh-cns/blob/master/on-having-layout-zh-CN.md)
* `zoom: 1`

---

## IE 模式

* 浏览器模式 Browser Mode
  * 切换渲染引擎、JavaScript引擎和HTTP请求的UserAgent
  * 兼容模式相当于使用 IE7的引擎

* 文本模式
  * 切换文档模式，即渲染引擎和JavaScript引擎

---

## 控制 IE 模式(<=10)

* DocType 有无控制是否进入怪异模式
* meta 标签控制进入哪种文档模式
  ```markup
  <!-- 使用IE7模式渲染 -->
  <meta http-equiv="X-UA-Compatible" content="IE=7">

  <!-- 使用最新引擎 -->
  <meta http-equiv="x-ua-compatible" content="IE=edge" >
  ```

---

## 测试兼容性

* 虚拟机
* [BrowserStack](https://www.browserstack.com/)

---

## Polyfill

* 使用代码帮助浏览器实现它尚未支持的特性
* 使用（未来）标准写法
* CSS Polyfills
  * [selectivizr](http://selectivizr.com/)
  * [CSS3 PIE](http://css3pie.com/)
  * [box-sizing-polyfill](https://github.com/Schepp/box-sizing-polyfill)
  * [flexibility](https://github.com/jonathantneal/flexibility)
  * [cssSandpaper](https://github.com/zoltan-dulac/cssSandpaper)

---

bgcolor: green

<<+++++++++ :fa-comments: +>>


