# JS

> 在 ECMAScript 规范中，共定义了 7 种数据类型，分为 基本类型 和 引用类型 两大类

## 基本类型

- String
- Number
- Boolean
- Undefined
- Null
- Symbol (es6新增)
- BigInt (es6新增)

## 引用类型

- Object
  - Function
  - Array
  - Date
  - RegExp
  - ...

## 数据类型转换

### 隐式转换

- 字符串拼接
- == 运算符
- if 语句
- 逻辑运算

### 显式转换

- Number()
- parseInt()
- parseFloat()
- String()
- Boolean()

## 箭头函数与普通函数的区别

1. 箭头函数没有自己的this，箭头函数的this继承自外层代码块的this
2. 箭头函数没有arguments，箭头函数的arguments继承自外层代码块的arguments
3. 箭头函数不能通过new关键字调用
4. 箭头函数没有原型对象
5. 箭头函数不能作为Generator函数
6. 箭头函数不能使用yield关键字

```js
class Contruct {
  constructor(name) {
    this.consName = name
  }
  arrowLog = () => {
    console.log(this.consName)
  }
  normalLog() {
    console.log(this.consName)
  }
}
const construct = new Contruct('arrow')
setTimeout(construct.arrowLog, 1000) // 1s后 => 'arrow'
setTimeout(construct.normalLog, 1000) // 1s后 => 'undefined'
setTimeout(construct.normalLog.bind(construct), 1000) // 1s后 => 'arrow'
```

### 为什么不能作构造函数

箭头函数本身是存在原型链的，它也有自己的构造函数，但原型链到箭头函数这一环就断了，因为它没有 prototype 属性，没办法连接它的实例的原型链，所以箭头函数就无法作为构造函数。

### 箭头函数如何获取全部参数

```js
const arrow = (...arg) => {
  console.log(arg) // => [1, [1, 2], [1, 2, 3]]
}
arrow(1, [1, 2], [1, 2, 3])
```

## var，let与const的区别

let 与 const 都是es6引入的变量声明方式，var 则是 es5引入的。

- var 声明的变量会挂载到window上，而 let 和 const 声明的变量不会
- var 声明的变量存在变量提升，而 let 和 const 声明的变量不存在变量提升
- let 和 const 声明的变量存在暂时性死区，而 var 声明的变量不存在暂时性死区
- let 和 const 声明的变量具有块级作用域，而 var 声明的变量具有函数级作用域

### 变量提升

变量提升是指在代码执行之前，JavaScript 引擎会自动将 var 声明的变量和 function 声明的函数提升到当前作用域的顶部。

```js
console.log(a) // => undefined
var a = 10

console.log(b) // => 报错
let b = 20

console.log(c) // => 报错
const c = 30
```

## 闭包

闭包是指有权访问另一个函数作用域中的变量的函数。

```js
function outer() {
  let outerVar = 'outer'
  function inner() {
    let innerVar = 'inner'
    console.log(outerVar)
  }
  return inner
}
const closure = outer()
closure() // => outer
```

### 闭包的用途

- 私有变量
- 实现模块化
- 函数防抖和节流

### 闭包的缺点

- 闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露

## 防抖节流

### 防抖

> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

```js
function debounce(func, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
```

### 节流

> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

```js
function throttle(func, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
```

对比两个函数，会发现区别就在于。当timeout存在时，一个是清除上一个创建新的，一个是不再创建

## 浅拷贝，深拷贝

### 浅拷贝

#### 概念

> 浅拷贝会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

```js
const obj1 = {
  name: 'cx',
  age: 18,
}
const obj2 = Object.assign({}, obj1)
obj2.name = 'cx-blog'
console.log(obj1) // => { name: 'cx', age: 18 }
```

#### 实现

- Object.assign
- 展开运算符

```js
const obj1 = {
  name: 'cx',
  age: 18,
}
const obj2 = { ...obj1 }
obj2.name = 'cx-blog'
console.log(obj1) // => { name: 'cx', age: 18 }
```

### 深拷贝

#### 概念

> 解决浅拷贝出现的会修改原值的问题。

#### 实现

- JSON.parse(JSON.stringify(obj))
- 递归实现

```js
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  let cloneObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}
```
