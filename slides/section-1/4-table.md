title: HTML Table
theme: material
transition: slide

---

# HTML：表格

---

```markup
<table border="1">
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Opera</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
```

---

## 错误的嵌套

```markup
<table>
  <td>Chrome</td>
  <td>Blink</td>
  <td>V8</td>
</table>
```

---

## 合并行

```markup
<table border="1">
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td rowspan="2">Blink</td>
      <td rowspan="2">V8</td>
    </tr>
    <tr>
      <th>Opera</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
```

---

## 合并列

```markup
<table border="1">
  <thead>
    <tr>
      <th>浏览器</th>
      <th>Chrome</th>
      <th>Opera</th>
      <th>Firefox</th>
      <th>Edge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>渲染引擎</th>
      <td colspan="2">Blink</td>
      <td>Gecko</td>
      <td>Edge</td>
    </tr>
    <tr>
      <th>JavaScript 引擎</th>
      <td colspan="2">V8</td>
      <td>SpiderMonkey</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
```

---

## 表格说明

```markup
<table border="1">
  <!-- caption 必须是table的第一个元素 -->
  <caption>浏览器及其引擎</caption>
  <thead>
    <tr>
      <th>浏览器</th>
      <th>Chrome</th>
      <th>Opera</th>
      <th>Firefox</th>
      <th>Edge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>渲染引擎</th>
      <td colspan="2">Blink</td>
      <td>Gecko</td>
      <td>Edge</td>
    </tr>
    <tr>
      <th>JavaScript 引擎</th>
      <td colspan="2">V8</td>
      <td>SpiderMonkey</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
```

---

## 列组（colgroup）

```markup
<table border="1">
  <colgroup>
    <col class="browser">
    <col class="engine" span="2">
  </colgroup>
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Opera</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
<style>
  .engine { background-color: lime }
</style>
```

---


bgcolor: green

<<+++++++++ :fa-comments: +>>


