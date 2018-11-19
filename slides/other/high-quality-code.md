title: 开发高质量的前端项目
theme: material

---

# 开发高质量的前端项目
### &nbsp;
### 赵文博 / 奇舞团

---

## 赵文博

360 奇舞团前端工程师

<style>
  a { margin: 0.3em }
  a:hover { border:none }
</style>

<div style="text-align: center">

[:fa-github:](https://github.com/webzhao)
[:fa-twitter:](https://twitter.com/webzhao)
[:fa-linkedin:](http://cn.linkedin.com/pub/wenbo-zhao/29/7b1/514)

</div>

---

## 如何评估代码质量 🤔

---

![good code vs bad code](https://p5.ssl.qhimg.com/t010d1afa3f4df2749b.jpg)

---

fragment: true

* 代码是否符合规范？
* QA 提出的 bug 数量？
* 收到的用户反馈数？

---

## 开发过程

* 💬 需求
* 📝 架构设计
* 🏗️ 编程
* 📐 测试
* 🚚 上线

---

## 质量源于各个环节

越早暴露问题，修复成本越低。

---

## 质量保证

* 需求评审
* 技术选型和架构设计
* 代码逻辑清晰、风格一致
* 完整的测试
* 运维和线上监控

---

## 需求评审阶段

不要做一个吃 🍉 群众

---

## 需求阶段关注什么

---

## 能不能实现

- 现有的技术和框架能不能做
- 数据/接口从哪里来
- 能不能支持这么大数据量

---

## 性价比

- 实现的代价 / 带来的价值

---

## 挖掘真实需求

- 了解要解决什么问题
- 降低实现成本

---

## 隐形需求

- 异常流程处理
- 后期维护需求
- 兼容性、响应式等

---

fragment: 1

## 技术方案

- 前后端如何交互
  - Restful API
  - RPC
  - 模版

- 使用什么样的框架
  - 业务场景
  - 框架成熟度
  - 人员水平

---

## 清晰的代码逻辑

---

## 代码规范

* [ESLint](https://eslint.org/)
  * 编辑器/工作流集成
  * [Standard](https://standardjs.com/)
  * [Prettier](https://prettier.io/)

* [StyleLint](https://stylelint.io/)

---

fragment: 1

## 使用有意义，可读性好的变量名


```javascript
let flag = this.validate(rules);
if (!flag){
  return this.fail('validate error', this.errors());
}
```

---

```javascript
const isValid = this.validate(rules);
if (!isValid) {
  return this.fail('validate error', this.errors());
}
```

---

fragment: 1

## 优先使用 const

```javascript
function reportDescAction() {
  var id = this.get('id');
  let desc = this.reportDesc(id);
  this.sendData(JSON.stringify(desc));
}
```

---

```javascript
function reportDescAction() {
  const id = this.get('id');
  const desc = this.reportDesc(id);
  this.sendData(JSON.stringify(desc));
}
```

---

fragment: 1

```javascript
function secToTime(secs) {
  if (secs === '' || secs == void 0) return '';
  let hours = Math.floor(secs / 3600);
  let minutes = Math.floor((secs - hours * hours) / 60);
  secs = secs % 60;
  let ret = `0${minutes}`.slice(-2) + ':' + `0${secs}`.slice(-2);
  ret = `${hours}`.length === 1 ? `0${hours}:${ret}` : `${hours}:${ret}`;
  return ret;
};
```

---

```javascript
function secToTime(secs) {
  if (secs === '' || secs == void 0) return ''
  const hours   = Math.floor(secs / 3600)
  const minutes = Math.floor(secs % 3600 / 60)
  const seconds = secs % 60
  const padZero = num => `0${num}`.slice(-2)
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}

---

fragment: 1

## [使用常量代替 Magic Number](http://eslint.org/docs/rules/no-magic-numbers)

```javascript
if ((new Date(end) - new Date(start)) > 365 * 24 * 3600 * 1000) {
  return this.$Modal.warn(`您选择时间段超过了一年`);
}
```

---


```javascript
const MS_IN_A_YEAR = 365 * 24 * 3600 * 1000
if (new Date(end) - new Date(start) > MS_IN_A_YEAR) {
  return this.$Modal.warn(`您选择时间段超过了一年`)
}
```

---

## 使用中间变量代替复杂表达式

```javascript
function onScroll(e) {
  let elem = this.$refs.panel;
  let scrollTop = elem.scrollTop;
  let dir = e.deltaY ? (e.deltaY < 0 ? 'up' : 'down') : void 0;

  if (dir === 'up' && scrollTop <= 0) {
    return e.preventDefault();
  }

  if (dir === 'down' && (this.panelHeight + scrollTop) === elem.scrollHeight) {
    return e.preventDefault();
  }
}
```

---

```javascript
function onScroll(e) {
  const elem          = this.$refs.panel
  const scrollTop     = elem.scrollTop
  const isScrollUp    = e.deltaY < 0
  const isReachTop    = scrollTop <= 0
  const isReachBottom = this.panelHeight + scrollTop === elem.scrollHeight

  if ((isScrollUp && isReachTop) || (!isScrollUp && isReachBottom)) {
    e.preventDefault()
  }
}
```

---

## 简化函数

* Single Responsibility Principle
* 一个函数只做一件事情
* Why ？
  * 易于理解
  * 易于组合、复用
  * 易于测试
  * 易于重构

---

## 函数过于复杂的标志

* 参数太多
* 缩进太深
* 代码行数过多
* 代码逻辑复杂

---

## 参数太多 [max-params](http://eslint.org/docs/rules/max-params)

```javascript
function openDialog(type, msg, callback, options) {
  options = options || {};
  //
  // ...
  //
}
```

---

```javascript
function openDialog(msg, options = {
  type = 'alert',
  safe = false,
  position: 'center'
  callback
}) {
  //
  // ...
  //
}
```

---

## 缩进太深 [max-depth](http://eslint.org/docs/rules/max-depth)

```javascript
/**
  [
    {
      name: 'A',
      valid: true,
      price: 1.2
    },
    {
      name: 'B',
      valid: false,
      price: 32
    },
    //...
  ]
*/

function getTotalPrice(products) {
  let total = 0;
  if (Array.isArray(products)) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].valid) {
        total += products[i].price;
      }
    }
  }
  return total;
}

```

---

```javascript
function getTotalPrice(products) {
  if (!Array.isArray(products)) return 0
  return products
    .filter(product => product.valid)
    .reduce((sum, product) => sum += product.price, 0)
}
```

---

```javascript
$.get('/profile').done(function(profile) {
  var uid = profile.id;
  $.get('/detail?uid=' + uid).done(function(detail) {
    console.log(detail);
  })
})
```

---

```javascript
const getProfile = _ => $.get('/profile')
const getDetail = uid => $.get(`/detail?uid=${uid}`)
getProfile()
  .then(profile => profile.id)
  .then(getDetail)
  .then(console.log)
```

---

```javascript
async function () {
  const profile = await $.get('/profile')
  const uid = profile.id
  const detail = await $.get(`/detail?uid=${uid}`)
  console.log(detail)
}
```

---

## 最大行数 [max-statements](http://eslint.org/docs/rules/max-statements)

```javascript
/*
* Param (type) graph_type，图表的类型
* 1表格，2折线图，3柱状图，4饼图，5条形图，6复合图，7交叉表
*/
set (type) {
    //如果维度和指标为空，仅初始化echart，不绘制图表
    if (!this.datas.targets.length && !this.datas.groups.length) {
        return;
    }
    let targets = [];
    let option = {};
    switch (this.type) {
        case 1:    //生成表格
            let origin = this.datas.groups.concat(this.datas.targets);
            if (!origin) {
                return;
            }
            let newTable = {
                "th": [],
                "td": []
            };
            origin.forEach(item => {
                newTable.th.push(item.name);
                if (!item.data) {return;};
                item.data.forEach((d, i) => {
                    if (!newTable.td[i]) {
                        newTable.td[i] = [];
                    }
                    newTable.td[i].push(d);
                });
            });
            this.table = newTable;

            //TODO: Table sticky header
            this.$nextTick(function(){
                
            });

            break;
        case 2:    //生成折线图
            if (!this.datas.groups.length) {
                return;
            }
            this.datas.targets.forEach(target => {
                let item = {
                    "type": "line"
                };
                Object.assign(item, target);
                targets.push(item);
            });
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type : 'line'
                    }
                },
                legend: {
                    data: this.datas.legend
                },
                xAxis: [
                    {
                        type: 'category',
                        name: this.datas.groups[0].name,
                        data: this.datas.groups[0].data
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: targets
            };
            break;
        case 3:    //生成柱状图
            if (!this.datas.groups.length || !this.datas.targets.length) {
                return;
            }
            this.datas.targets.forEach(target => {
                let item = {
                    "type": "bar"
                };
                Object.assign(item, target);
                targets.push(item);
            });
            option = {
                legend: {
                    data: this.datas.legend
                },
                xAxis: [
                    {
                        type: 'category',
                        name: this.datas.groups[0].name,
                        data: this.datas.groups[0].data
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: targets
            };
            break;
        case 4:    //生成饼图
            if (!this.datas.groups.length || !this.datas.targets[0].data) {
                alert("没有数据");
                return;
            }
            this.datas.targets[0].data.forEach((target, index) => {
                targets.push({
                    "value": target,
                    "name": this.datas.groups[0].data[index]
                });
            });
            option = {
                tooltip : {
                    trigger: 'item'
                },
                series : [
                    {
                        type: 'pie',
                        data: targets
                    }
                ]
            };
            break;
        case 5:    //生成条形图
            if (!this.datas.groups.length) {
                alert("没有数据");
                return;
            }
            this.datas.targets.forEach(target => {
                let item = {
                    "type": "bar"
                };
                Object.assign(item, target);
                targets.push(item);
            });
            option = {
                legend: {
                    data: this.datas.legend
                },
                xAxis: [
                    {
                        type: 'value',
                        name: this.datas.groups[0].name
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        data: this.datas.groups[0].data
                    }
                ],
                series: targets
            };
            break;
        case 6:    //生成复合图
            if (this.datas.targets.length < 2) {
                return;
            }
            this.datas.targets.forEach((target, index) => {
                if (!index) {
                    let barItem = {
                        "type": "bar"
                    };
                    Object.assign(barItem, target);
                    targets.push(barItem);
                } else {
                    let lineItem = {
                        "type": "line",
                        "yAxisIndex": 1
                    };
                    Object.assign(lineItem, target);
                    targets.push(lineItem);
                }
            });
            option = {
                legend: {
                    data: this.datas.legend
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.datas.groups[0].data
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: this.datas.targets[0].name
                    },
                    {
                        type: 'value',
                        name: this.datas.targets[1].name
                    }
                ],
                series: targets
            };
            break;
    }

    let obj = Object.assign({},this.baseOption, option);
    this.echart.setOption(obj);
}
```

---


```javascript
export const CHART_TYPES = {
  BAR: 'Bar',
  PIE: 'Pie',
  LINE: 'Line',
  TABLE: 'Table',
  // ...
}

export default {

  /**
   * 设置 echart 选项
   */
  setEchartOptions(type) {
    const options = this[`get${type}Option`]()
    const merged = Object.assign(this.baseOption, options)
    this.echart.setOption(merged)
  }

  /**
   * 获取表格选项
   */
  getTableOption() {
    const origin = this.datas.groups.concat(this.datas.targets)
    if (!origin) return
    const newTable = {
      th: [],
      td: []
    }
    const th = origin.map(item => item.name)
    const td = th.map(_ => [])
    origin.forEach(item => {
      const data = item.data || []
      data.forEach((d, i) => td[i].push(d))
    })
    return { th, td }
  }

  /**
   * 获取折线图选项
   */
  getLineOption() {
    if (!this.datas.groups.length) return
    const series = this.datas.targets.map(target => {
      return Object.assign({
        type: 'line'
      }, target)
    )
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type : 'line'
        }
      },
      legend: {
        data: this.datas.legend
      },
      xAxis: [{
        type: 'category',
        name: this.datas.groups[0].name,
        data: this.datas.groups[0].data
      }],
      yAxis: [{
          type: 'value'
      }],
      series
    }
  }

}

---

fragment: 1

## 逻辑复杂度 [complexity](http://eslint.org/docs/rules/complexity)

* [Cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

---

## DRY 原则

```javascript
function getDatas() {
  // ...
  this.conditions.forEach(item => {
    params.conditions.push({
      "graph_condition_id": item.graph_condition_id,
      "graph_id": this.graph_id,
      "rule_type": item.rule_type,
      "graph_condition_value": item.graph_condition_value,
      "iscustomized": false,
      "column_id": item.column_id,
      "col_classify": item.col_classify,
      "sequence": item.sequence
    });
  });
  // ...
}

function saveGraph() {
  // ...
  this.conditions.forEach(item => {
    params.conditions.push({
      "graph_condition_id": item.graph_condition_id,
      "graph_id": this.graph_id,
      "rule_type": item.rule_type,
      "graph_condition_value": item.graph_condition_value,
      "iscustomized": false,
      "column_id": item.column_id,
      "col_classify": item.col_classify,
      "sequence": item.sequence
    });
  });
  // ...
}
```

---

```javascript
/**
 * 格式化 condition 以发送到服务器
 */
function formatConditions() {
  return this.conditions
    .map(condition => _.pick(condition, [
      'rule_type',
      'graph_condition_id',
      'graph_condition_value',
      'column_id',
      'col_classify',
      'sequence'
    ]))
    .map(condition => _.assign(condition, {
      iscustomized: false,
      graph_id: this.graph_id
    }))
}

function getDatas() {
  // ...
  const conditions = formatConditions()
  const params = {
    // ...
    conditions
    // ...
  }
  // ...
}

function saveGraph() {
  // ...
  const conditions = formatConditions()
  const params = {
    // ...
    conditions
    // ...
  }
  // ...
}
```

---

## 重复代码检测

* [jscpd](https://github.com/kucherenko/jscpd)
* [jsinspect](https://github.com/danielstjules/jsinspect)

---

## 一致的代码风格

* 分号
* 缩进
* 换行
* 空格
* 引号
* ...

---

## 使用同一份配置

* .eslintrc
* .stylelintrc
* [.editorconfig](http://editorconfig.org/)

---

fragment: 1

## lint 时机

* 编辑器实时/保存
* 构建
  * [gulp-eslint](https://github.com/adametry/gulp-eslint)
  * [eslint-loader](https://github.com/MoOx/eslint-loader)
* git hook
  * pre-commit/pre-push
  * 🐶 [husky](https://github.com/typicode/husky)

---

## 自动化测试

* 单元测试
* E2E 测试

---

fragment: 1

## 为什么自动化测试

* 拥抱变化
  * 新功能
  * Bug
  * 代码重构
* Ripple Effect (涟漪效应)
* 多环境自动化

---

## 可测试性

* 单一职责
* 减少副作用
* mock & stub

---

## 测试工具

* Test Runner
  * [karma](http://karma-runner.github.io/)
* Test Framework
  * [🚀 ava](https://github.com/avajs/ava)
  * [🃏 jest](https://facebook.github.io/jest/)
  * [mocha](https://mochajs.org/)
  * [jasmine](https://jasmine.github.io/)
* Assertion
  * [chai](http://chaijs.com/)
  * [should.js](https://github.com/shouldjs/should.js)
* Mocking
  * [Sinon](http://sinonjs.org/)

---

## 持续集成

* Continuous Integtation
* 运行代码检查、单元测试等
* 尽早发现问题
* [Jenkins](https://jenkins.io/)
* [drone](https://drone.io/)

---

fragment: 1

## 线上监控

* 错误监控
  * JavaScript 错误上报
  * window.onerror
  * [sentry.io](https://sentry.io/)
* 性能监控
  * 页面加载时间
  * [performance](https://developer.mozilla.org/en-US/docs/Web/API/Performance) API

---

## 总结

* 项目质量源于各个环节
* 在每个环节尽早暴露问题

---

fragment: true

## 行动起来 🏄‍♀️

* 需求评审时考虑后续环节可能出现的问题，提出问题
* 了解现有项目使用的技术架构及原因
* 在项目中引入 ESLint / StyleLint 等规范检查工具
* 完成一个任务后，主动要求代码 Review
* 给重要或复用较多的代码添加单元测试
* 调研 CI / CD / 自动发布在项目中可行性
* 监控线上的稳定性、性能

---

## 谢谢！ 😃 


