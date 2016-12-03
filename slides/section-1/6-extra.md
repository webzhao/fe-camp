title: Getting Started
theme: material
transition: slide

---

# HTML: 扩展知识

---

## 全局属性

* accesskey
* class
* contenteditable
* dir
* title
* hidden
* id
* itemid
* itemprop
* itemref
* itemscope
* itemtype
* lang
* spellcheck
* style
* tabindex
* title

---

## accesskey & tabindex

```markup
<p>
  <input accesskey="i" placeholder="Press Ctrl+Alt+I">
</p>

<p>
  <a href="http://example.com" accesskey="e" tabindex="-1">
    Press <kbd>Ctrl+Alt+E</kbd>
  </a>
</p>
```

---

## id, class & style

* `id` 保证唯一性
* `class` 多用在 CSS
* `style` 指定内联样式

---

## contenteditable & spellcheck

```markup
<section contenteditable spellcheck="true">
  <h1>可读性和易读性</h1>
  <p>可读性和易读性经常被混淆。可读性通常用来形容某种书面语言
  阅读和理解的容易程度——它关乎这种语言本身的难度，而非其外观。
  影响可读性的因素包括词句的长度，以及文中生僻、过度专业性词汇
  的出现频率。</p>
</section>
```

---

## 语言 lang & dir

```markup
<div lang="zh-CN">
  <p>字体排印学的英文 <span lang="en">Typography</span>
  来自希腊语的 <span lang="el">τύπος</span> 和
  <span lang="el">γραφία</span>。</p>
</div>

<p dir="rtl" lang="ar"> وصلت ويكيبيديا الإنجليزية لثلاثة ملايين مقالة</p>

```

---

## title

```markup
<p>My logs show that there was some interest in <abbr
title="Hypertext Transport Protocol">HTTP</abbr> today.</p>
```

---

## hidden

```markup
<p hidden>你看不见我</p>
```

---

## 无障碍性

* 或可访问性，Accessibility
* 确保*任何人*都有办法获取放在网页上的媒体内容
* 不让身体、心理或技术上的问题成为获取信息的障碍

---

## Web 开发者应该做的事情

* [WCAG (Web Content Accessibility Guidelines) 2.0](http://www.w3.org/TR/WCAG20/)
* [ARIA (Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria/)

---

## ARIA

```markup
<ol role="tablist">
  <li role="tab">
    <a href="#ch1">Chapter 1</a>
  </li>
  <li role="tab">
    <a href="#ch2">Chapter 2</a>
  </li>
  <li role="tab">
    <a href="#quiz">Quiz</a>
  </li>
</ol>
```

---

## 提升无障碍性

* 为 `img` 提供 `alt` 属性
* `noscript`
* `input` 和 `label` 对应
* 图形验证码与语音验证码
* 文字和背景有足够对比度
* 键盘可操作

---

## 语义化

* HTML中的元素、属性及属性值都拥有某些含义
* 开发者应该遵循*语义*来编写HTML

---

## 为什么语义化很重要？

* 提升代码可读性、可维护性
* 搜索引擎优化
* 提升无障碍性

---

## 扩展 HTML

* meta
* data-*
* microdata
* RDFa
* JSON-LD

---

## meta 标签

```markup
<!-- 编码 -->
<meta charset="UTF-8">

<!-- 指定HTTP Header -->
<meta http-equiv="Content-Security-Policy"
  content="script-src 'self'">

<!-- SEO 搜索引擎优化 -->
<meta name="keywords" content="关键词">
<meta name="description" content="页面介绍">

<!-- 移动设备Viewport -->
<meta name="viewport" content="initial-scale=1">

<!-- 关闭iOS电话号码自动识别 -->
<meta name="format-detection" content="telphone=no">

<!-- 360浏览器指定内核 -->
<meta name="renderer" content="webkit">

<!-- 指定IE渲染模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

---

## data-*

```markup
<ul>
  <li data-id="1">苹果</li>
  <li data-id="2">香蕉</li>
  <li data-id="3">芒果</li>
</ul>
```

---

## microdata

* HTML 5 中的一个规范
* 在 HTML 中通过属性嵌入格式化数据
* 提供给搜索引擎、浏览器(插件)使用

---

<<-

```markup
<section itemscope itemtype="http://schema.org/Person">
  Hello, my name is
  <span itemprop="name">John Doe</span>,
  I am a
  <span itemprop="jobTitle">Graduate research assistant</span>
  at the
  <span itemprop="affiliation">University of Dreams</span>
  My friends call me
  <span itemprop="additionalName">Johnny</span>
  You can visit my homepage at
  <a href="http://www.example.com.com" itemprop="url">www.example.com</a>
  <section itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    I live at
    <span itemprop="streetAddress">1234 Peach Drive</span>
    <span itemprop="addressLocality">Warner Robins</span>
    <span itemprop="addressRegion">Georgia</span>.
  </section>
</section>
```

->>

---

## JSON-LD

```markup
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Graduate research assistant",
  "affiliation": "University of Dreams",
  "additionalName": "Johnny",
  "url": "http://www.example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Peach Drive",
    "addressLocality": "Wonderland",
    "addressRegion": "Georgia"
  }
}
</script>
```

---

## 相关链接

* [Google Schemas](https://developers.google.com/schemas/)
* [Schema.org](http://schema.org/)

---

## HTML 编码规范

* [Google Coding Style](https://google.github.io/styleguide/htmlcssguide.xml)
* [W3C Validator](https://validator.w3.org/)

---

# 工具

* [emmet](http://emmet.io/)
* [markdown](https://daringfireball.net/projects/markdown/)

---

bgcolor: green

<<+++++++++ :fa-comments: +>>


