title: 定位模式
transition: slide

# 定位模式

---

## 定位模式(Positioning schemes)

* 常规流(Normal Flow)
* 浮动(Float)
* 绝对定位(Absolute Positioning)

---

# 常规流

* 除根元素、浮动元素和绝对定位元素外，其它元素都在常规流之内(in-flow)
* 而根元素、 浮动和绝对定位的元素会脱离常规流(out of flow)
* 常规流中的盒子，属于块级格式化上下文或行级格式化上下文

---

## 块级格式化上下文 (Block Formatting Context)

* 盒子在容器（包含块）内从上到下一个接一个地放置
* 两个兄弟盒之间的竖直距离由 `margin` 属性决定
* 同一个 BFC 内垂直 `margin` 会合并
* 盒子的左外边缘挨着容器（包含块）的左边

---

## 行级格式化上下文 (Inline Formatting Context)

* 盒子一个接一个水平放置
* 盒之间的水平 `margin，border和padding` 都有效
* 同一行的盒子所在的矩形区域叫行盒(Line box)
* 当一个行盒放不下上下文内所有盒子时，会被分到多个垂直堆叠的行盒里
* 行盒内的水平分布由'text-align'属性决定
* 如果一个行级块无法分割(单词、inline-block)，该元素会被作为一个整体决定分布在哪一个行盒

---

<<++++++

😲

+>>

---

## 浮动（float）

* 浮动元素从常规流中脱离，被漂浮在容器(包含块)左边或右边
* 浮动盒会一直漂到其外边缘挨到容器边缘或另外的浮动盒
* 浮动元素不会影响其后面的流内块级盒
* 但是浮动元素后面的行级盒子会变短以避开浮动元素

---

```markup
<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg"
    width="120" alt="house">
  <p><span>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的
  短叶丝兰——约书亚树的特殊栖息地。约书亚树以从茂密的森林到远远
  间隔的实例等各种形式出现。除了约书亚树森林之外，该公园的西部包
  括加州沙漠里发现的最有趣的地质外观。</span></p>
</section>

<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
</style>
```

---

```markup
<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg"
    width="120" alt="house">
  <p>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的
  短叶丝兰——约书亚树的特殊栖息地。</p>
</section>
<section>
  <h1>科罗拉多沙漠</h1>
  <p>科罗拉多沙漠海拔低于3000英尺（910米），环绕着约书亚树国家
  公园的东部，其主要特征为墨西哥三齿拉瑞阿低矮丛林、墨西哥刺木、
  沙漠滨藜和包括丝兰和灌木仙人掌混合的低矮丛林的生存环境。</p>
</section>

<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
</style>
```

---

## clear

* 指定元素哪一边不能与之前的浮动框相邻
* 取值: `left | right | both`

---

```markup
<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg"
    width="120" alt="house">
  <p>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的
  短叶丝兰——约书亚树的特殊栖息地。</p>
</section>
<section class="cleared">
  <h1>科罗拉多沙漠</h1>
  <p>科罗拉多沙漠海拔低于3000英尺（910米），环绕着约书亚树国家
  公园的东部，其主要特征为墨西哥三齿拉瑞阿低矮丛林、墨西哥刺木、
  沙漠滨藜和包括丝兰和灌木仙人掌混合的低矮丛林的生存环境。</p>
</section>

<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
  .cleared {
    clear: both;
  }
</style>
```
---

## clearfix

```css
.clearfix::after {
  content: ' ';
  display: block;
  clear: both;
  height:0;
  overflow: hidden;
}
```

---

## 块级格式化上下文(BFC) 的特性

* BFC 内的浮动不会影响到BFC外部的元素
* BFC 的高度会包含其内的浮动元素
* BFC 不会和浮动元素重叠
* BFC 可以通过 `overflow:hidden` 等方法创建

---

```markup
<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg"
    width="120" alt="house">
  <p>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的
  短叶丝兰——约书亚树的特殊栖息地。</p>
</section>
<section>
  <h1>科罗拉多沙漠</h1>
  <p>科罗拉多沙漠海拔低于3000英尺（910米），环绕着约书亚树国家
  公园的东部，其主要特征为墨西哥三齿拉瑞阿低矮丛林、墨西哥刺木、
  沙漠滨藜和包括丝兰和灌木仙人掌混合的低矮丛林的生存环境。</p>
</section>

<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
</style>
```

---

## BFC 的创建

* 浮动框
* 绝对定位框
* 非块级的块容器(inline-block)
* overflow 属性非 visible 的块框

---

## BFC的作用

* 清除浮动
* 防止 margin 折叠
* 双栏布局

---

bgcolor: green

<<+++++++++ :fa-comments: +>>


