title: 层叠和继承、CSS 单位
theme: material
transition: slide


---

# 层叠、继承和 CSS 单位

---

## 哪条规则生效？

```markup
<article>
  <h1 class="title">拉森火山国家公园</h1>
</article>

<style>
  .title {
    color: blue;
  }
  article h1 {
    color: red;
  }
</style>
```

---

## 选择器的特异度(Specificity)

|       选择器            | 内联? | id个数 | (伪)类个数 | 标签个数 | 特异度 |
|-------------------------|----------|--------|--------------|----------|--------|
| #nav .list li a:link    | 0        | 1      | 2            | 2        | 0122   |
| .hd ul.links a          | 0        | 0      | 2            | 2        | 0022   |

---

## 简单选择器的特异度级别

* Level 0: *
* Level 1: 标签选择器、伪元素
* Level 2: 类、伪类、属性
* Level 3: id
* Level 4: 内联

---

bgcolor: #FDF6E3

iframe(src="https://specificity.keegan.st/" height="1100")

---

## 属性覆盖

```markup
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>

<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333;
  }
  .btn.btn-primary {
    color: #fff;
    background: #218de6;
  }
</style>
```

---

## important

```markup
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>

<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333 !important;
  }
  .btn.btn-primary {
    color: #fff;
    background: #218de6;
  }
</style>
```

---

## important

```markup
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>

<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333 !important;
  }
  .btn.btn-primary {
    color: #fff !important;
    background: #218de6;
  }
</style>
```

---

## Cascading

---

## CSS 样式的来源

* 页面开发者
* 用户设置
* 浏览器预设

---

## 用户样式

浏览器可以指定一个本地 CSS 文件，打开所有页面时自动加载。

---

## 浏览器预设样式

* [Mozilla Firefox 预设样式](https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css)
* [Google Chrome 预设样式](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
* [Internet Explorer 预设样式](http://www.iecss.com/)

---

## 哪条声明起作用？

1. 找出匹配到的该属性所有声明
2. 根据规则来源，优先级从低到高：

    * 浏览器预设
    * 用户设置
    * 网页样式

3. 同一来源中，按照特异度排序，越特殊优先级越高
4. 特异度一样时，按照样式书写顺序，后面的优先级高

---

## 有 `!important` 时的变化

1. 找出匹配到的该属性所有声明
2. 根据规则来源，优先级从低到高：

    * 浏览器预设
    * 用户设置
    * 网页样式
    * 含 `!important` 的网页样式
    * 含 `!important` 的用户设置样式

3. 同一来源中，按照特异度排序，越特殊优先级越高
4. 特异度一样时，按照样式书写顺序，后面的优先级高

---

## 默认值策略 Defaulting

---

## 继承

某些属性会自动继承其父元素的计算值，除非显式指定一个值

```markup
<p>
  This is a <em>test</em> of <strong>inherit</strong>.
</p>
<style>
  p { color: #666; }
  em { color: red; }
</style>
```

---

## 显式继承

```css
* {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
.some-widget {
  box-sizing: content-box;
}
```

---


## 初始值

* CSS 中，每个属性都有一个初始值
* `background-color`  的初始值为 `transparent`
* `margin-left` 的初始值为 0
* 可以显式重置为初始值，比如 `background-color: initial`

---


## CSS 求值过程

---

![value](img/css-value.svg)

---

## `strong` 元素 `font-size` 的求值过程

```markup
<article>
  <h1>猴面包树</h1>
  <p>猴面包树是一种<strong>木棉科</strong>猴面包树属的大型落叶乔木，
  原产于热带非洲，现今中国大陆的云南、福建、广东皆有人工引种栽培。</p>
</article>
<style>
  body { color: #333; background: #f0f0f0; }
  article { font-size: 14px; line-height: 1.6; }
  h1 { font-size: 2em; }
  p { font-size: 1.1em; }
</style>
```


---

fragment: true

## 各种类型的值

* 关键字：`font-size:initial`、`box-sizing:inherit`、`color:red` 等
* 字符串：`content:"abc"`
* URL：`background-image:url(/resources/img/logo.png)`
* 长度：`font-size:2em`、`height:100px`、`width:50vw`
* 百分数：`width: 50%`、`font-size: 200%`
* 整数：`z-index: 9`
* 浮点数：`line-height: 1.8`
* 颜色：`color: #f00`、`color:rgba(0,0,0,0.5)`
* 时间：`transition-duration: 0.3s`
* 角度：`transform: rorateX(deg)`
* 函数：`content: attr(title)`、`height: calc(100vh - 100px)`

---

## 长度单位

* 绝对单位

  - px：像素，对应显示器的一个像素点
  - in：英寸
  - 英寸cm：厘米
  - 厘米mm：毫米
  - 毫米pt：磅 (1 pt 等于 1/72 英寸)
  - 英寸pc：1pc 等于 12pt

* 相对单位

  - em：相对于该元素的一个 `font-size`
  - rem：相对于 `html` 元素的 `font-size`
  - vh：浏览器窗口高度的 1%
  - vw：浏览器窗口宽度的 1%
  - vmin：`vh` 和 `vw` 中的较小者
  - vmax：`vh` 和 `vw` 中的较大者

---

## 颜色

* 关键字
* Hex
* RGB & RGBA
* HSL & HSLA

---


## 颜色的表示：关键字

iframe(src="http://colours.neilorangepeel.com/" fullscreen)

---

bgcolor: #ffd454;

### Hex & RGB

iframe(src="https://www.webpagefx.com/web-design/hex-to-rgb/#ff0000" fullscreen)

---

bgimage: http://s3.qhimg.com/static/65796cb8649a8770/daisy-712892_1280.jpg

<div style="position:absolute;top:20%;left:20%;right:20%;bottom:20%;text-align:center;line-height:60vh;color:#fff;background:rgba(0,0,0,0.5);font-size:3em">
  RGBa
</div>

---

## HSL 颜色模型

使用 Hue、Saturation、Lightness 三个数字来表示颜色

---

## Hue 色相

Hue: 色相(H)是色彩的基本属性,就是平常所说的颜色  
名称，如红色、黄色等。取值范围是0-360。

<img src="https://upload.wikimedia.org/wikipedia/commons/3/32/RGB_color_wheel_72.svg" alt="color wheel" width="300">

---

### HSL 和 HSLA

* Saturation: 饱和度(S)是指色彩的纯度,越高色彩越纯,低则逐渐变灰。取值范围0-100%。
* Lightness: 越高颜色越亮。取值范围是0-100%。
* 例如：hsl(0, 50%, 50%)、hsla(120, 50%, 30%, 0.5)

---

iframe(src="http://color.aurlien.net/" fullscreen)

---

bgcolor: green

<<+++++++++ :fa-comments: +>>

