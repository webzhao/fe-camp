title: HTML introlduction and text
theme: material
transition: slide

---

# HTML：简介、文本

---

```markup
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>页面标题</title>
    </head>
    <body>
        <h1>这是内容</h1>
    </body>
</html>
```

---

## HTML 是什么？

* HyperText Markup Language
* 使用 *标签* 来描述页面的 *内容* 和 *结构*

---

## HTML 的产生

* 1989 年, Tim Berners-Lee
* 共享文档需要
* 还发明了浏览器、服务器和 HTTP

---

## HTML 1.0, 1991

```
TITLE NEXTID A ISINDEX PLAINTEXT

P H1 H2 H3 H4 H5 H6 ADDRESS

DL DT DD UL LI
```

---

### HTML 2.0, 1994, IETF

```
<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">

HTML HEAD BODY H1 H2 H3 H4 H5 H6

P PRE XMP LISTING ADDRESS BLOCKQUOTE

UL OL LI DIR MENU DL DT DD 

EM STRONG B I CITE CODE DFN KBD

SAMP VAR STRIKE U TT BR IMG

FORM INPUT SELECT OPTION TEXTAREA
```

---

## HTML 3.2, 1997, W3C

* Netscape 引入私有标签
* HTML 3.0 失败
* W3C 接管 HTML 标准化

---

## HTML 4.01, 1998

* 样式与内容分离，CSS 支持
* Doctype

---

## Doctype 的作用

* 指定HTML页面使用的标准和版本
* 浏览器根据doctype决定使用哪种渲染模式

---

## 渲染模式

* Quirks Mode 怪异模式
* Almost Standard Mode 准标准模式
* Standard Mode 标准模式

---

```
<!DOCTYPE html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
  "http://www.w3.org/TR/html4/loose.dtd">
```

---

## XHTML 1.0, 2000

* 用 XML 语法重新定义 HTML
* 语法严格要求

---

## XHTML 2.0

* 不兼容历史
* 去除样式类标签
* 去除 `img`、`a`
* 彻底修改 Form
* 开发者不欢迎，浏览器不支持

---

## HTML 5

* 2004年，WHATWG 继续发展 HTML
* 2008年，W3C HTML5 草案发布

---

## HTML5 设计思想

* 兼容已有内容
* 避免不必要的复杂性
* 解决现实的问题
* 优雅降级
* 尊重事实标准
* 用户 》开发者 》浏览器厂商 》标准制定者 》理论完美

---

## HTML5 中的变化

* `doctype`、`meta`
* 新增语义化标签和属性
* 去掉纯展示性标签
* `canvas`、`video`、`audio`、离线、本地存储、拖拽等

---

## 语法

* 标签不区分大小写，推荐小写
* 空标签可以不闭合，比如 `input`、`meta`
* 属性不必引号，推荐双引号
* 某些属性值可以省略，比如 `required`、`readonly`

---

<object data="slides/section-1/img/element.svg" height="360" width="1000"></object>

---

# HTML 中的文本标签

---

## `p`

```markup
<p>At the first World Wide Web conference organized by CERN 
in May 1994, all was merry with 380 attendees - who mostly
were from Europe but also included many from the United
States. </p>

<p>The conference ended with a glorious evening cruise on
board a paddle steamer around Lake Geneva with Wolfgang and
the Werewolves providing Jazz accompaniment.
```

---

## h1 ~ h6

```markup
<h1>Typography</h1>
<h2>History</h2>
<p>Although typically applied to printed, published, broadcast,
and reproduced materials in contemporary times, all words,
letters, symbols, and numbers written alongside the earliest
naturalistic drawings by humans may be called typography.</p>
<h3>Evolution</h3>
<p>The design of typefaces has developed alongside the
development of typesetting systems.</p>
<h2>Scope</h2>
```

---

## hr 段落级别的话题切换

```markup
<h3>Principles of the typographic craft</h3>
<p>Much of the legibility research literature is somewhat
atheoretical—various factors were tested individually or
in combination (inevitably so, as the different factors are
interdependent), but many tests were carried out in the
absence of a model of reading or visual perception.</p>
<hr>
<p>Type may be combined with negative space and images,
forming relationships and dialog between the words and
images for special effects. Display designs are a potent
element in graphic design. </p>
```

---

## 列表

* 有序列表
* 无序列表
* 定义列表

---

## 有序列表

```markup
<h1>世界电影票房排行榜</h1>
<ol start="1">
  <li>阿凡达</li>
  <li>泰坦尼克号</li>
  <li>复仇者联盟</li>
</ol>
```

---

## 无序列表

```markup
<h1>购物清单</h1>
<ul>
  <li>1个西瓜</li>
  <li>2瓶矿泉水</li>
  <li>1盒酸奶</li>
</ul>
```

---

```markup
<ul>
  <li>1个西瓜</li>
  <li>2瓶矿泉水</li>
  <li>1盒酸奶</li>
  <li>
    垃圾袋
    <ul>
      <li>大号垃圾袋</li>
      <li>小号垃圾袋</li>
    </ul>
  </li>
</ul>
```



