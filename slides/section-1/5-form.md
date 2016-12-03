title: HTML Table
theme: material
transition: slide

---

# HTML：表单

---

## 使用 `form` 获取让用户提供数据

```markup
<form action="/echo" method="POST">
  <p>用户名：<input type="text" name="username"></p>
  <p>密码：<input type="password" name="password"></p>
  <p><button type="submit">登录</button></p>
</form>
```

---

## GET vs. POST

```markup
<form action="/echo" method="GET">
  <p>用户名：<input type="text" name="username"></p>
  <p>密码：<input type="password" name="password"></p>
  <p><button type="submit">登录</button></p>
</form>
```

---

## URL 编码

```
  => %20 (空格)
! => %21
" => %22
# => %23
$ => %24
% => %25
& => %26
' => %27
...
```

---

## HTTP method

* GET
* POST
* HEAD
* PUT
* DELETE
* OPTIONS

---

## 单行文本框

```markup
<input name="username" value="zhaowenbo">
```

---

## placeholder

```markup
<input name="username" placeholder="请输入用户名">
```

---

## autofocus


```markup
<input name="username" placeholder="请输入用户名" autofocus>
```

---

## 密码

```markup
<input type="password" name="password">
```

---

## 多行文本框

```markup
<textarea cols="40" rows="8">
</textarea>
```

---

## 输入验证

```markup
<form action="/echo">
  <p>
    <input required minlength="2" maxlength="10"
      placeholder="2-10位">
  </p>
  <p>
    <input pattern="1\d{10}" placeholder="输入手机号">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>
```

---

## type

```markup
<form action="/echo">
  <p>
    Search: <input type="search">
  </p>
  <p>
    Email: <input type="email">
  </p>
  <p>
    URL: <input type="url">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>
```

---

## novalidate

```markup
<form action="/echo" novalidate>
  <p>
    <input required minlength="2" maxlength="10"
      placeholder="2-10位">
  </p>
  <p>
    <input pattern="1\d{10}" placeholder="输入手机号">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>
```

---

## radio

```markup
<form action="/echo">
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="radio" name="fruit" value="apple"> 苹果
    <input type="radio" name="fruit" value="banana"> 香蕉
    <input type="radio" name="fruit" value="mango"> 芒果
  </p>
  <p><button>提交</button></p>
</form>
```

---

## checkbox

```markup
<form action="/echo">
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit" value="apple"> 苹果
    <input type="checkbox" name="fruit" value="banana" checked> 香蕉
    <input type="checkbox" name="fruit" value="mango"> 芒果
  </p>
  <p><button>提交</button></p>
</form>
```

---

## label

```markup
<form action="/echo">
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit" value="mango" id="mango">
    <label for="mango">芒果</label>
    <label>
      <input type="checkbox" name="fruit" value="apple">
      苹果
    </label>
    <label>
      <input type="checkbox" name="fruit" value="banana">
      香蕉
    </label>
  </p>
  <p>
    <label for="name">请输入你的名字：</label>
  </p>
  <p><input id="name"></p>
  <p><button>提交</button></p>
</form>

---

## select

```markup
<select name="fruit">
  <option value="1">苹果</option>
  <option value="2">香蕉</option>
  <option value="3">芒果</option>
  <option value="4">菠萝</option>
  <option value="5">榴莲</option>
  <option value="6">木瓜</option>
</select>
```

---

## 多选

```markup
<select name="fruit" multiple size="3">
  <option value="1">苹果</option>
  <option value="2">香蕉</option>
  <option value="3">芒果</option>
  <option value="4">菠萝</option>
  <option value="5">榴莲</option>
  <option value="6">木瓜</option>
</select>
```

---

## 分组

```markup
<label>目的城市：</label>
<select name="country">
  <optgroup label="美洲">
    <option>多伦多</option>
    <option>温哥华</option>
    <option>旧金山</option>
    <option>洛杉矶</option>
    <option>纽约</option>
    <option>华盛顿</option>
    <option>里约热内卢</option>
  </optgroup>
  <optgroup label="亚洲">
    <option>北京</option>
    <option>上海</option>
    <option>首尔</option>
    <option>东京</option>
    <option>香港</option>
  </optgroup>
  <optgroup label="欧洲">
    <option>伦敦</option>
    <option>巴黎</option>
    <option>马德里</option>
    <option>柏林</option>
    <option>雅典</option>
  </optgroup>
</select>
```

---

## hidden

```markup
<form action="/echo">
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit" value="apple"> 苹果
    <input type="checkbox" name="fruit" value="banana" checked> 香蕉
    <input type="checkbox" name="fruit" value="mango"> 芒果
  </p>
  <p><button>提交</button></p>
  <input type="hidden" name="secret" value="1">
</form>
```

---

## 文件选择

```markup
<form action="/echo" method="POST" enctype="multipart/form-data">
  <p>
    <label>您的姓名:</label>
    <input name="fullname">
  </p>
  <p>
    <label>请选择简历:</label>
    <input type="file" name="resume">
  </p>
  <p><button>提交</button></p>
</form>
```

---

## date & time

```markup
<form action="/echo">
  <p>date: <input type="date"></p>
  <p>datetime-local: <input type="datetime-local"></p>
  <p>month: <input type="month"></p>
  <p>week: <input type="week"></p>
  <p>time: <input type="time"></p>
</form>
```

---

## number & range

```markup
<form action="/echo">
  <p>
    <label>身高(m)：</label>
    <input
      type="number"
      min="0.5" max="2.5" step="0.01"
      name="height" value="1.7"
    >
  </p>
  <p>
    <label>体重(kg)：</label>
    <input
      type="range"
      min="10" max="150" step="0.1"
      name="weight" value="62"
    >
    <output for="weight"></output>
  </p>
  <p>
    <label>BMI：</label>
    <output for="weight height"></output>
  </p>
</form>

<script>
var form = document.querySelector('form');
form.addEventListener('input', update);
update();

function update() {
  var data = new FormData(form);
  var height = parseFloat(data.get('height'));
  var weight = parseFloat(data.get('weight'));
  document.querySelector('[for="weight"]').value = weight;
  document.querySelector('[for="weight height"]').value =
    getBMI(height, weight);
}

function getBMI(height, weight) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}
</script>
```

---

## color

```markup
<input type="color">
```

---

## button

<<-

```markup
<form action="/echo">
  <p>您的姓名？</p>
  <p>
    <input type="text" name="fullname" value="abc">
  </p>
  <p>你最喜欢什么水果？</p>
  <p>
    <label><input type="checkbox" name="fruit" value="apple"> 苹果</label>
    <label><input type="checkbox" name="fruit" value="banana" checked> 香蕉</label>
    <label><input type="checkbox" name="fruit" value="mango"> 芒果</label>
  </p>
  <p>
    <button>不指定type</button>
    <button type="submit">submit</button>
    <button type="button">button</button>
    <button type="reset">reset</button>
  </p>
</form>
```
->>

---

## 回车提交

```markup
<form action="/echo">
  <p>您的姓名？</p>
  <p>
    <input type="text" name="fullname" value="abc">
  </p>
  <p>
    <button onclick="alert(1)">不指定type</button>
    <button onclick="alert(2)" type="button">button</button>
  </p>
</form>
```

---

## 控件状态

```markup
<form action="/echo">
  <p>您的姓名？</p>
  <p>
    <input type="text" name="fullname" value="abc" readonly>
  </p>
  <p>你的职业？</p>
  <p>
    <select name="occupation" disabled>
      <option value="1">学生</option>
      <option value="2">工程师</option>
      <option value="3">教师</option>
    </select>
  </p>
  <p>
    <button>提交</button>
  </p>
</form>
```

---

## 表单设计

* 帮助用户不出错
* 尽早提示错误
* 扩大选择/点击区域
* 控件较多时要分组
* 主要动作和次要动作

---

bgcolor: green

<<+++++++++ :fa-comments: +>>


