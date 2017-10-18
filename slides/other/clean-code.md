title: clean code

---

# Clean Code
## —— 编写整洁的 JavaScript 代码

---

![good code vs bad code](https://p5.ssl.qhimg.com/t010d1afa3f4df2749b.jpg)

---

![clean code book](https://p5.ssl.qhimg.com/t01e963ea12a7e700e1.jpg)

---

fragment: true

## 声明

1. 每个人的经验和习惯不同，对书中一些内容可能  
会有异议，欢迎讨论

2. 所有代码均来自实际项目，代码作者可以争辩

---
<style scopped>
  .toc { width: 80vw }
  .toc li { display: inline-block; width: 20%; white-space: nowrap; border: 1px solid; margin: 2%; padding: 1em }
  .toc li:nth-child(1) { color: #E57373 }
  .toc li:nth-child(2) { color: #9575CD }
  .toc li:nth-child(3) { color: #4FC3F7 }
  .toc li:nth-child(4) { color: #81C784 }
  .toc li:nth-child(5) { color: #90A4AE  }
  .toc li:nth-child(6) { color: #FF8A65 }
  .toc li:nth-child(7) { color: #FFF176}
  .toc li:nth-child(8) { color: #A1887F }
  .toc li:nth-child(9) { color: #DCE775 }
  .toc li:nth-child(10) { color: #4DB6AC }
</style>
<div class="toc">

* :fa-usd: 变量
* :fa-cube: 函数
* :fa-table: 数据结构
* :fa-cubes: 类
* :fa-lightbulb-o: SOLID
* :fa-flask: 测试
* :fa-code-fork: 并发
* :fa-exclamation-circle: 错误处理
* :fa-code: 代码风格
* :fa-commenting-o: 注释

</div>

---

## 变量

---

```javascript
let flag = this.validate(rules);
if (!flag){
  return this.fail('validate error', this.errors());
}
```

---

```javascript
const isValid = this.validate(rules);
if (!isValid){
  return this.fail('validate error', this.errors());
}
```
---

### 使用有意义，可读性好的变量名


---
 

```javascript
var FIRST_US_PRESIDENT = "George Washington";
```

```javascript
const FIRST_US_PRESIDENT = "George Washington";
```

---

### 使用 ES6 的 const 定义常量

---

### 优先使用 const

```javascript
function reportDescAction() {
  var id = this.get('id');
  try {
    let desc = this.reportDesc(id);
    this.sendData('', JSON.stringify(desc));
  } catch(e) {
    this.error(e);
  }
}
```

---

### 优先使用 const

```javascript
function reportDescAction() {
  const id = this.get('id');
  try {
    const desc = this.reportDesc(id);
    this.sendData('', JSON.stringify(desc));
  } catch(e) {
    this.error(e);
  }
}
```

---

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
```
---
 

### ESLint

* [no-var](http://eslint.org/docs/rules/no-var)
* [prefer-const](http://eslint.org/docs/rules/prefer-const)

---

### 统一业务中的术语命名

```javascript
getUserInfo();
getClientData();
getCustomerRecord();
```

---

```javascript
getUser();
```
---

### [使用常量代替 Magic Number](http://eslint.org/docs/rules/no-magic-numbers)

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


### 使用中间变量代替复杂表达式

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
  const dir           = e.deltaY ? (e.deltaY < 0 ? 'up' : 'down') : void 0
  const isReachTop    = scrollTop <= 0
  const isReachBottom = this.panelHeight + scrollTop === elem.scrollHeight

  if (
    dir === 'up'   && isReachTop ||
    dir === 'down' && isReachBottom
  ) {
    return e.preventDefault();
  }
}
```

---

### [避免无法理解的缩写](http://eslint.org/docs/rules/id-length)

```javascript
var g = parent;
//
// ...
//
for(i = 0,len= callback.length;i<len;i++){
  if(i==0 && callback[0]=="parent"){
    g = parent;
    scope = parent;
  }else if(i==0 && callback[0]=="top"){
    g = top;
    scope = top;
  }else{
    if(i<len-1){
      scope = scope[callback[i]];
    }
    g = g[callback[i]];
  }
}

g.call(scope,args);
```

---

### 可以接受的缩写

* 简短箭头函数
* `event => e`
* `index => i`

---

### 避免重复的描述

```javascript
const Car = {
  carMaker: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue'
};

function paintCar(car) {
  car.carColor = 'Red';
}
```

---

```javascript
const Car = {
  maker: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar(car) {
  car.color = 'Red';
}
```

---

### 使用默认参数代替判断

```javascript
function formatDate(date, pattern) {
  pattern = pattern || 'yyyy/MM/dd';
  // ...
}

function makeTimeLegends(now) {
  now = now || new Date();
  // ...
};

```

---

```javascript
function formatDate(date, pattern = 'yyyy/MM/dd') {
  // ...
}

function makeTimeLegends(time = new Date) {
  // ...
};
```

---

> 注意： 默认参数只适用于参数为 `undefined` 的场景，  
> 如果要判断 `0 null ''` 等值，请不要使用默认参数。

---

## 函数

---

### [函数不超过3个参数](http://eslint.org/docs/rules/max-params)

```javascript
function textEllipsidRender(index, value, item, size = 50) {
  if (!_.isNull(value) && value.length > size) {
    return `<span title="${value}">${value}</span>`
  } else {
    return value
  }
}
```

---

```javascript
function textEllipsidRender(text, size = 50) {
  if (!_.isNull(text) && text.length > size) {
    return `<span title="${text}">${text}</span>`
  } else {
    return value
  }
}
```

---

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

```javascript
const DIALOG_TYPES = {
  ALERT:   Symbol('alert'),
  SUCCESS: Symbol('success'),
  ERROR:   Symbol('error')
}

const DIALOG_POS = {
  TOP:    Symbol('top'),
  CENTER: Symbol('center')
}

function openDialog(msg, options = {
  type = DIALOG_TYPES.ALERT,
  safe = false,
  position: DIALOG_POS.CENTER
  callback
}) {
  //
  // ...
  //
}
```

---


### 一个函数只做一件事

* 软件工程中最重要的原则之一
* 复杂函数难以组合、测试和理解
* 功能单一的函数易于重构
* 相关规则：

    * [max-statements](http://eslint.org/docs/rules/max-statements)
    * [complexity](http://eslint.org/docs/rules/complexity)
    * [max-depth](http://eslint.org/docs/rules/max-depth)
    * [max-params](http://eslint.org/docs/rules/max-params)

---

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



```

---


```javascript
const CHART_TYPES = {
  TABLE   : 'Table',
  LINE    : 'Line',
  BAR     : 'Bar',
  PIE     : 'Pie',
  // ...
}

export default {

  /**
   * 设置 echart 选项
   */
  setEchartOptions(type) {
    // ...
  }

  /**
   * 获取表格选项
   */
  [`get${CHART_TYPES.TABLE}Option`]() {
    // ...
  }

  /**
   * 获取折线图选项
   */
  [`get${CHART_TYPES.LINE}Option`]() {
    // ...
  }

}
```

---

### 函数应该 "名副其实"

```javascript
function checkInput(e) {
  var maxCols = this.cols;
  this.content.content = this.content.content.split('\n')
    .map(i => i.slice(0, maxCols))
    .slice(0, this.rows)
    .join('\n');
}
```

---

```javascript
function normalizeInput(e) {
  this.content.content = this.content.content.split('\n')
    .map(i => i.slice(0, this.cols))
    .slice(0, this.rows)
    .join('\n');
}
```

---

### 移除重复的代码

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

### 重复代码检测

* [jscpd](https://github.com/kucherenko/jscpd)
* [jsinspect](https://github.com/danielstjules/jsinspect)

---

### 不要使用标记(Flag)作为函数参数

* 这通常意味着函数的单一性已经破坏
* 应考虑对函数进行再次划分

---

```javascript
function request(url, params, isList) {
  params = _.extend(params, { domainId: this.domainId });
  this.isLoading = !!isList;
  return this.$http.get(url, { params }).then(res => {
    return res.data;
  }).catch(e => {
    return { errno: -1, errmsg: '网络错误，请求失败'};
  }).then(data => {
    this.isLoading = false;
    return data;
  });
}
```

---

```javascript
/**
 * 请求接口数据
 */
function request(url, params = {}) {
  const errno  = -1
  const errmsg = '网络错误，请求失败'
  params.domainId = this.domainId
  return this.$http.get(url, { params })
    .then(res => res.data)
    .catch(e => ({ errno, errmsg }))
}

/**
 * 请求接口同时显示 loading
 */
function requestWithLoading(url, params) {
  this.isLoading = true
  return this.request(...arguments)
    .then(data => {
      this.isLoading = false
      return data
    })
}
```

---

### (尽量)避免副作用

* 副作用：*依赖或改变*函数外的状态
* 纯函数
  * 输出完全由输入所决定
  * 不依赖于系统的状态和上下文环境
  * 不改变它作用域之外的环境状态

---

```javascript
import globalState from '../store/global-state'

export default {
  data() {
    return {
      state: globalState.state,
      company: {
        email: '',
        user_name: '',
        company_name: '',
        company_address: '',
        contacter: '',
        contacter_phone: '',
        website: ''
      },
      pageTitle: '账户设置'
    }
  },
  computed: {
    showName() {
      var state = this.state;
      return state.signed && state.userInfo ? state.userInfo.uname : '';
    }
  },
  ready() {
    var qid = this.state.userInfo.qid;
    this.$parent.init(this.pageTitle);
    this.$http.get(`/dmpweb/api/user/detail?qid=${qid}`).then(res => {
      if (res.data && res.data.errno) {
        alert(res.data.errmsg || '获取用户信息失败');
        return;
      }
      this.company = res.data;
    });
  },

}
```

---

```javascript
/**
 * file store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  pageTitle: '',
  signed: false,
  userInfo: {}
}

const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  }
}

export default new Vuex.Store({
  state,
  mutations
})


/**
 * file account.vue
 */
import { mapMutations } from 'vuex'

export default {

  data() {
    return {
      pageTitle: '账户设置',
      company: {
        email: '',
        website: '',
        contacter: '',
        user_name: '',
        company_name: '',
        company_address: '',
        contacter_phone: ''
      }
    }
  },

  computed: {
    showName() {
      const state = this.$store.state
      return state.signed ? state.userInfo.uname : ''
    }
  },

  ready() {
    setPageTitle(this.pageTitle)
    const qid     = state.userInfo.qid
    const api     = '/dmpweb/api/user/detail'
    const state   = this.$store.state
    const errmsg  = '获取不到用户信息'
    const onError = msg => alert(msg || errmsg)
    this.$http.get(api, { api })
      .then(res => res.data || {})
      .then(data => {
        if (data.errno) return onError(data.msg)
        this.company = data
      })
      .catch(onError)
  }

  methods: {
    ..mapMutations([
      'setPageTitle'
    ])
  }

}

```

---

### 不要写全局函数/变量

```javascript
Array.prototype.getParticularObjectInArray = function (key, value){
  for(var i=0,len=this.length; i<len; i++){
    if(this[i][key] == value) {
      return this[i];
    }
  }
  return null;
};

const getMatchOrFirst = (list = [], key, val) => {
  let match = list.getParticularObjectInArray(key, val);
  return match || list[0];
};
```

---

```javascript
const getMatchOrFirst = (list = [], key, val) => {
  const match = list.find(item => item[key] == val)
  return match || list[0]
}
```

---

```javascript
const getMatchOrFirst = (list = [], key, val) => {
  const match = _.find(list, _matchesProperty(key, val))
  return match || list[0]
}
```

---

```javascript
const getMatchOrFirst = (list = [], key, val) => {
  const match = R.find(R.propEq(key, val), list)
  return match || list[0]
}
```

---

### 优先使用函数式编程

```javascript
for (let i=0,len1=this.tree.length; i<len1; i++) {
  let business = this.tree[i];
  for (let j=0,len2=business.logics.length; j<len2; j++) {
    let logic = business.logics[j];
    if (logic.logic_name) {
      logic.is_cal_sel = true;
      this.$emit('output-change', logic);
      return;
    }
  }
}
```

---

```javascript
this.tree.find(business => {
  const logic = business.logics.find(logic => logic.name)
  if (logic) {
    logic.is_cal_sel = true
    this.$emit('output-change', logic)
    return true
  }
})
```

---

### 封装判断条件

```javascript
if(_.has(this.$route.query, 'infoshow') && this.$route.query.infoshow == 1){
  this.$Modal.confirm('该账号未完善用户信息，现在去完善？', result => {
    if(result) {
      this.$router.push('/nopermission')
    }
  })
}
```

---

```javascript
const shouldShowInfo = function() {
  return _.has(this.$route.query, 'infoshow')
    && this.$route.query.infoshow == 1
}
const msg = '该账号未完善用户信息，现在去完善？'

if (shouldShowInfo()) {
  this.$Modal.confirm(msg, result => {
    if(result) {
      this.$router.push('/nopermission')
    }
  })
}
```

---

### 避免否定的条件判断

<<-

```javascript
function creatChart(data, chart) {
  let isNotEmpty = data && data.nodes && data.nodes.length > 1 && data.links && data.links.length > 1;
  if (isNotEmpty === false) {
    return false;
  }
  // ...
}
```

->>

---


```javascript
function creatChart(data, chart) {
  const hasNode = _.has(data, 'nodes') && !_.isEmpty(data.nodes)
  const hasLink = _.has(data, 'links') && !_.isEmpty(data.links)
  const isValid = hasNode && hasLink

  if (!isValid) {
    return false;
  }
  // ...
}
```

---

### 避免过度优化

```javascript
for (var i = 0, len = list.length; i < len; i++) {
  if (list[i][key] == value) {
    return i;
  }
}
```

---

```javascript
for (var i = 0; i < list.length; i++) {
  if (list[i][key] == value) {
    return i;
  }
}
```

---

### [真正的性能杀手](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)

---

### 删除无效的代码

* 及时删除不再使用的代码
* 时间越长越不敢动

---

```javascript
export default {

  mounted() {
    this.checkMsg();
    //this.t = window.setInterval(() => {
    //  this.checkMsg();
    //}, 1000 * 300);
  }

}
```

---

## 对象/类

---

### 使用 `class` 替代 `function` 实现类

```javascript
function Timespan(delimiter = "-"){
    this.delimiter = delimiter
    this.times = []
    this.allTimes = [
        {
            name: '今天',
            date: this.getToday()
        },
        {
            name: '昨天',
            date: this.getYesterday()
        },
        {
            name: '最近7天',
            date: this.getOneWeekAgo()
        },
        {
            name: '最近30天',
            date: this.getOneMonthAgo()
        },
        {
            name: '最近90天',
            date: this.getThreeMonthAgo()
        },
    ]
    this.allTimes.forEach( time => {
        time.active = false
    })
}

Timespan.prototype.setActive = function(time){
    this.times.forEach(time => time.active = false)
    time.active = true
}

Timespan.prototype.deactiveAll = function(){
    this.times.forEach(time => time.active = false)
}

Timespan.prototype.getDate = function(d){
    const year  = d.getFullYear()
    const mon   = d.getMonth() + 1
    const date  = d.getDate()
    return [year,formatTime(mon), formatTime(date)].join(this.delimiter)
}

Timespan.prototype.now = function(){
    return new Date()
}

Timespan.prototype.getDateOffset = function(offset){
    const now = this.now()
    now.setDate(now.getDate() + offset)
    return this.getDate(now)
}
```

---

```javascript
class Timespan {
  constructor(delimiter = '-') {
    this.delimiter = delimiter
    this.times = []
    this.allTimes = [
      {
        name: '今天',
        date: this.getToday()
      },
      {
        name: '昨天',
        date: this.getYesterday()
      },
      {
        name: '最近7天',
        date: this.getOneWeekAgo()
      },
      {
        name: '最近30天',
        date: this.getOneMonthAgo()
      },
      {
        name: '最近90天',
        date: this.getThreeMonthAgo()
      },
    ]
    this.allTimes.forEach( time => {
      time.active = false
    })
  }

  setActive(time) {
    this.times.forEach(time => time.active = false)
    time.active = true
  }

  deactiveAll() {
    this.times.forEach(time => time.active = false)
  }

  getDate(d) {
    const year  = d.getFullYear()
    const mon   = d.getMonth() + 1
    const date  = d.getDate()
    return [
      year,
      formatTime(mon),
      formatTime(date)
    ].join(this.delimiter)
  }

  now() {
    return new Date()
  }

  getDateOffset(offset){
    const now = this.now()
    now.setDate(now.getDate() + offset)
    return this.getDate(now)
  }

}
```

---

## SOLID 原则

* Single responsibility principle
* Open/closed principle
* Liskov substitution principle
* Interface segregation principle
* Dependency inversion principle

---

### Single responsibility principle

```javascript
export default {
  //获取人群趋势数据
  getCrowdScale(){
    let me = this;
    // 初始化chart
    if(!me.scale.crowd_id){
      return false;
    }
    me.$http.get(me.crowdapi).then(function(responce){
      let data = responce.data;
      window.myLine && window.myLine.destroy();
      if(data.errno) {
        alert(data.errmsg);
        return false;
      }
      let labels = data.list.map(function(item){
        return item.datatime;
      });
      let datas = data.list.map(function(item){
        return item.crowd_scale;
      });
      if(labels.length <= 0 || datas.length <=0 ){
        labels = [me.scale.starttime, me.scale.endtime];
        datas = [0, 0];
      }
      var lineChartData = {
        labels: labels,
        datasets: [{
          label: "人群规模趋势图",
          fillColor: "#fff",
          strokeColor: "#2196f3",
          pointColor: "#fff",
          pointStrokeColor: "#2196f3",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#2196f3",
          data: datas
        }]
      }
      var ctx = document.getElementById("canvas").getContext("2d");
      window.myLine = new Chart(ctx).Line(lineChartData, {
        scaleShowGridLines : true,
        bezierCurve : false,
        datasetFill : false,
        pointDotRadius : 4,
        pointDotStrokeWidth : 2,
        tooltipFontFamily: "normal normal 12px/1.6 Helvetica, Microsoft Yahei, Sans-Serif",
        tooltipYPadding: 16,
        tooltipXPadding: 16,
        tooltipTemplate: "<%if (label){%>当前日期：<%=label%>；人群规模：<%}%><%= value %>",
        responsive: true
      });
    },function(responce){
      //error callback
      alert('system error!');
      window.myLine && window.myLine.destroy();
    });
  },
}
```

---

```javascript
// 折线图默认选项
const lineChartDefaultOptions = {
  scaleShowGridLines : true,
  bezierCurve : false,
  datasetFill : false,
  pointDotRadius : 4,
  pointDotStrokeWidth : 2,
  tooltipFontFamily: '12px/1.6 Helvetica, Microsoft Yahei, Sans-Serif',
  tooltipYPadding: 16,
  tooltipXPadding: 16,
  responsive: true
}

// 折线图线条默认选项
const serieDefaultOption = {
  fillColor: "#fff",
  strokeColor: "#2196f3",
  pointColor: "#fff",
  pointStrokeColor: "#2196f3",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "#2196f3",
}

export default {

  /**
   * 获取人群规模数据
   */
  getCrowdScale() {
    const me = this
    if (!me.scale.crowd_id) return false
    return me.$http.get(me.crowdapi).then(responce => {
      const data = responce.data
      if (data.errno) return alert(data.errmsg)
      return data
    })
  },

  /**
   * 根据数据计算折线图选项
   */
  getLineChartOption(data) {
    let labels = data.list.map(item => item.datatime)
    let datas  = data.list.map(item => item.crowd_scale)
    if (!labels.length || !datas.length) {
      labels = [this.scale.starttime, this.scale.endtime]
      datas  = [0, 0]
    }
    const lineChartOptions = {
      labels,
      datasets: [Object.assign({
        label: "人群规模趋势图",
        data: datas
      }), serieDefaultOption]
    }
  },

  /**
   * 渲染折线图
   */
  renderChart() {
    this.lineChart && this.lineChart.destroy()
    const ctx = this.$el.querySelector("canvas").getContext("2d")
    const tooltipTemplate = `
      <%if (label){%>
        当前日期：<%=label%>；人群规模：
      <%}%>
      <%= value %>
    `
    this.lineChart = new Chart(ctx).Line(
      lineChartOptions, 
      Object.assign({
        tooltipTemplate
      }, lineChartDefaultOptions) 
    )
  }

}
```


---

### Open/closed principle

* Open for extension
* Closed for modification

---

### Liskov substitution principle


---

### Interface segregation principle

* [拆分接口(Interface)](http://www.jianshu.com/p/7dca689129fd)
* [Duck typing](https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B)

---

### Dependency inversion principle

* 高层模块不应该依赖于低层模块，二者都应该依赖于抽象
* 抽象不应该依赖于细节，细节应该依赖于抽象

---

* [cdnplz](https://github.com/zhouweicsu/cdnplz)
* [felis](https://git.corp.qihoo.net/bizfe/felis-recur/tree/master/server/auth)

---

## 测试

---

### 自动化测试

* 单元测试
* E2E 测试

---

### 为什么自动化测试

* 拥抱变化
  * 新功能
  * Bug
  * 代码重构
* Ripple Effect (涟漪效应)
* 多环境自动化

---

### 可测试性

* 单一职责
* 减少副作用
* mock & stub

---

## 并发

---

### 用 Promises 替代回调

```javascript
require('request').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', function(err, response) {
  if (err) {
    console.error(err);
  }
  else {
    require('fs').writeFile('article.html', response.body, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('File written');
      }
    })
  }
})
```

---

```javascript
require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then(function(response) {
    return require('fs-promise').writeFile('article.html', response);
  })
  .then(function() {
    console.log('File written');
  })
  .catch(function(err) {
    console.error(err);
  })
```

---

### async / await

```javascript
require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then(function(response) {
    return require('fs-promise').writeFile('article.html', response);
  })
  .then(function() {
    console.log('File written');
  })
  .catch(function(err) {
    console.error(err);
  })

```

---

```javascript
async function getCleanCodeArticle() {
  try {
    var request = await require('request-promise')
    var response = await request.get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    var fileHandle = await require('fs-promise');

    await fileHandle.writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.log(err);
  }
}
```

---

## 错误处理

---

### 别忘了捕获错误

* IO
  * 文件
  * 数据库
  * 网络请求
* localStorage
* JSON.parse
* 空值判断

---


### 使用 catch 捕获 Promise 异常

```javascript
getdata()
.then(data => {
  functionThatMightThrow(data);
})
.catch(error => {
  console.log(error);
});
```

---

```javascript
getdata()
.then(data => {
  functionThatMightThrow(data);
})
.catch(error => {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
});
```

---

## 代码格式

* [standard.js](https://standardjs.com/rules-zhcn.html)

---

## 注释

---

### 好代码会自我解释


