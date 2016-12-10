title: 文本样式

---

# CSS - 文本样式

---

## `font-family`

* 使用逗号分隔的字体族名称
* 初始值由浏览器设置决定，可继承

---

# Times New Roman 字体族

<div style="font-family: 'Times New Roman';font-size:2em">
  <p style="font-weight:normal">The five boxing wizards jump quickly.</p>
  <p style="font-weight:bold">The five boxing wizards jump quickly.</p>
  <p style="font-style:italic">The five boxing wizards jump quickly.</p>
  <p style="font-style:italic;font-weight:bold">The five boxing wizards jump quickly.</p>
</div>

---

# Helvetica Neue 字体族

<div style="font-size:2em">
  <p style="font-family:'HelveticaNeue-UltraLight'">The five boxing wizards jump quickly.</p>
  <p style="font-family:'HelveticaNeue-Thin'">The five boxing wizards jump quickly.</p>
  <p style="font-family:'HelveticaNeue-Light'">The five boxing wizards jump quickly.</p>
  <p style="font-family:'HelveticaNeue-Medium'">The five boxing wizards jump quickly.</p>
  <p style="font-family:'HelveticaNeue-Bold'">The five boxing wizards jump quickly.</p>
  <p style="font-family:'HelveticaNeue-CondensedBlack'">The five boxing wizards jump quickly.</p>
</div>

---

```markup
<h1>卡尔斯巴德洞窟（Carlsbad Caverns）</h1>
<p>卡尔斯巴德洞窟（Carlsbad Caverns）是美国的一座国家公园，
位于新墨西哥州东南部。游客可以通过天然入口徒步进入，也可以
通过电梯直接到达230米的洞穴深处。</p>

<style>
  h1 {
    font-family: Helvetica, sans-serif;
  }
  body {
    font-family: Georgia, serif;
  }
</style>
```

---

## 字体匹配算法

1. 浏览器先获取一个系统字体列表
2. 对于元素中每一个字符，使用 `font-family` 属性及其它属性进行匹配，如果能匹配就暂定该字体
3. 如果步骤2没有匹配上，选择下一个可选的 `font-family` 执行步骤2
4. 如果匹配到一个字体，但是字体中没有该字符，继续对下一个可选的 `font-family` 执行步骤2
5. 如果没有匹配到字体，使用浏览器默认字体。

---

## 通用字体族

<ul>
    <li style="font-family:serif">
        Serif 衬线体
        <ul>
            <li>Georgia、宋体</li>
        </ul>
    </li>
    <li style="font-family:Helvetica,sans-serif">
        Sans-Serif 无衬线体
        <ul>
            <li>Arial、Helvetica、黑体、微软雅黑</li>
        </ul>
    </li>
    <li style="font-family:cursive, STKaiti">
        Cursive 手写体
        <ul>
            <li>Caflisch Script、楷体</li>
        </ul>
    </li>
    <li style="font-family:Zapfino,fantasy">
        Fantasy 梦幻字体
        <ul>
            <li>Comic Sans MS, Papyrus, Zapfino</li>
        </ul>
    </li>
    <li style="font-family:monospace">
        Monospace 等宽字体
        <ul>
            <li>Consolas、Courier、中文字体</li>
        </ul>
    </li>
</ul>

---

## `font-family` 使用

* 英文字体放在中文字体前面
* 最后总是添加通用字体族

---

## `font-size`

* 定义文字的大小，可使用px、百分比、em等做单位
* 取值
  * 绝对值 `xx-small | x-small | small | medium | large | x-large | xx-large`
  * 相对值 `larger | smaller`
  * 长度
  * 百分数，相对于父元素计算值

* 初始值为 `medium`（由浏览器设置决定，一般16px），可继承

---

```css
.slide-page li {
  font-size:36px;
}
.richtext h4 {
  font-size: 125%;
}
.continue {
  font-size: 0.85em;
}
```

---

## 长度单位em

* 一般是相对于元素 `font-size` 的计算值的
* 用在 `font-size` 属性上时，是相对于父元素的 `font-size` 计算值

---

```markup
<section>
  <h2>字体族</h2>
  <p>Cursive（手写体）字体的字形，作为用于CSS的术语，一般具有
  连笔（joining strokes）或者其它除斜体字体外的手写特征。</p>
  <p>Fantasy字体，用于CSS，主要是装饰性的，但仍然具有字符表现
  （与不表现字符的Pi或者Picture字体相反）。</p>
</section>

<style>
  section {
    font-size: 16px;
  }
  section h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
</style>
```

---

## font-style

* 定义文字以斜体还是正常方式显示
* 取值：`normal | italic | oblique`
* 初始值为 `normal`，可继承

---

<div style="font-family: 'Helvetica Neue';font-size:1.5em">
  <p style="font-style:normal">The five boxing wizards jump quickly.</p>
  <p style="font-style:italic">The five boxing wizards jump quickly.</p>
  <p style="font-style:oblique;">The five boxing wizards jump quickly.</p>
</div>

---

## font-weight

* 定义文字的粗细程度
* 取值：`normal | bold | bolder | lighter | 100 | 200 | ... | 900`
* 初始值为 `normal`，可继承

---

## 取值含义

* 100 - Thin
* 200 - Extra Light (Ultra Light)
* 300 - Light
* 400 - Normal
* 500 - Medium
* 600 - Semi Bold (Demi Bold)
* 700 - Bold
* 800 - Extra Bold (Ultra Bold)
* 900 - Black (Heavy)
* normal - 400
* bold - 700
* bolder - 比继承值粗
* lighter - 比继承值细

---

## line-height

* 元素所属的 `line box` 所占高度
* 初始值为normal（具体值由浏览器决定），可继承
* 取值：<长度> | <数字> | <百分比>
* 段落文字一般取值1.4～1.8

---

```css
#header { line-height: 48px; }
#content .wrap { line-height: 1.6; }
```

---

```markup
<section>
  <h1>这是一个很长的标题啊</h1>
  <p>这是正文</p>
</section>
<style>
  section {
    width: 10em;
    font-size: 12px;
    line-height: 1.5em;
  }
  h1 {
    font-size: 30px;
  }
</style>
```

---

## font 缩写

```markup
<h1>This is Title</h1>
<p>This is Paragraph</p>

<style>
h1 {
  /* 斜体 粗细 大小/行高 字体族 */
  font: bold 14px/1.7 Helvetica, sans-serif;
}
p {
  font: 14px serif;
}
</style>
```

---

## Web Fonts

<<-

```markup
<h1>I watched the storm, so beautiful yet terrific.</h1>

<style>
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: 400;
  src: local('Lobster'),
       local('Lobster-Regular'),
       url(//lib.baomitu.com/fonts/lobster/lobster-v18-latin-regular.woff2)
       format('woff2'),
       url(//lib.baomitu.com/fonts/lobster/lobster-v18-latin-regular.woff)
       format('woff');
}
h1 {
  font-family: 'Lobster', cursive;
}
</style>
```

->>

---

## 中文 Web Fonts

```markup
<h1>中文也可以使用网络字体啊</h1>

<style>
@font-face {
  font-family: 'fzjljw';
  font-style: normal;
  font-weight: 400;
  src: local('fzjljw'),
       url(http://s6.qhres.com/static/0c7c8a048bccb02f.woff)
       format('woff');
}
h1 {
  font-family: 'fzjljw', cursive;
}
</style>
```

---

## 链接

* [Google Fonts](https://fonts.google.com/)
* [Baomitu CDN](https://cdn.baomitu.com/)
* [Font Spider](http://font-spider.org/)


---

## `text-align`

* 定义文本在容器内的对齐方式
* 取值：`left | right | center | justify`
* 初始值由 HTML 的 `dir` 属性决定，可继承

---

```markup
<p>The common starling is a medium-sized perching bird in the
starling family, Sturnidae. It is about 20 cm (8 in) long and
has glossy black plumage, which is speckled with white at some
times of year. The legs are pink and the bill is black in
winter and yellow in summer; young birds have browner plumage
than the adults. It is a noisy bird, especially in communal
roosts, with an unmusical but varied song. </p>

<style>
  p {
    width: 20em;
    text-align: justify;
  }
</style>
```

---

## `letter-spacing`

* 指定字符之间的间距
* 取值：`normal | <length>`
* 初始值为 `normal`，可继承

---

```markup
<h1>Letter Spacing 字符间距</h1>

<style>
  h1 {
    letter-spacing: 0.2em;
  }
</style>
```

---

## `word-spacing`

* 指定单词之间的间距
* 取值：`normal | <length>`
* 初始值为 `normal`，可继承

---

```markup
<h1>Word Spacing 单词间距</h1>

<style>
  h1 {
    word-spacing: 0.2em;
  }
</style>
```

---

## `text-indent`

* 指定文本缩进
* 取值：`normal | <length> | <percentage>`
* 初始值为 0，可继承

---

```markup
<p>The text-indent property specifies the amount of indentation
(empty space) should be left before lines of text in a block.
By default, this controls the indentation of only the first
formatted line of the block, but the hanging and each-line
keywords can be used to change this behavior.</p>

<style>
  p {
    text-indent: 2em;
  }
</style>
```

---


## text-decoration

* 定义了文本的一些装饰效果，比如下划线、删除线等
* 初始值为none，可继承
* 其它值：<span style="text-decoration:underline">underline</span> | <del>line-through</del> | <span style="text-decoration:overline">overline</span>

---

## white-space

* 指定空白符如何处理
* 取值：normal | nowrap | pre

---

```markup
<p>The change from horizontal to vertical writing can affect
not just the layout, but also the typesetting. For example,
the position of a punctuation mark within its spacing box can
change from the horizontal to the vertical case, and in some
cases alternate glyphs are used.</p>

<style>
  p {
    white-space: pre;
  }
</style>
```

---

## word-break

* 指定是否允许在单词中间换行
* 取值： `normal | break-all | keep-all

---

```markup
<p>The change from horizontal to vertical writing can affect
change from the horizontal to the vertical case, and in some
verylongverylongverylongverylongverylongverylongverylongverylongverylongverylongverylongtext
cases alternate glyphs are used.</p>

<style>
  p {
    width: 10em;
    word-break: normal;
  }
</style>
```

---

bgcolor: green

<<+++++++++ :fa-comments: +>>

