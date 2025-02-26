# JS

## 数据类型

JS共有八种数据类型，分别是 `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`、`BigInt`。

其中Symbol和BigInt是es6新增的数据类型

- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
  Symbol是没有构造函数constructor，不能通过new Symbol()获取示例，它是基本数据类型，不能与其他类型的数据进行运算。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，
  使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了
  Number 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型

- 栈：原始数据类型（`Undefined`、`Null`、`Boolean`、`Number`、`String`）
- 堆：引用数据类型（对象、数组和函数）

### 栈和堆的区别

- 栈（stack）
  - 占据空间小、大小固定，属于被频繁使用数据。
  - 存取方式为先进后出
  - 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
- 堆（heap）
  - 占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈
    中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
    堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中
  - 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定
  - 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

### 判断类型

1.  typeof 对数组、对象、null 都会被判断为 object，其他判断都正确

    ```js
    console.log(typeof 1) // number
    console.log(typeof '1') // string
    console.log(typeof true) // boolean
    console.log(typeof Symbol()) // symbol
    console.log(typeof undefined) // undefined
    console.log(typeof null) // object
    console.log(typeof []) // object
    console.log(typeof {}) // object
    console.log(typeof function () {}) // function
    ```

2.  instanceof instanceof 可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。

    ```js
    console.log(2 instanceof Number) // false
    console.log(true instanceof Boolean) // false
    console.log('str' instanceof String) // false
    console.log([] instanceof Array) // true
    console.log(function () {} instanceof Function) // true
    console.log({} instanceof object) // true
    ```

3.  constructor 有两个作用，一是判断数据的类型，二是对象实例通过 constructor 对象访问它的构造函数。
    需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了

    ```js
    console.log((2).constructor == Number) // true
    console.log(true.constructor === Boolean) // true
    console.log('str'.constructor == String) // true
    console.log([].constructor == Array) // true
    console.log(function () {}.constructor == Function) // true
    console.log({}.constructor == object) // true
    ```

    ```js
    function Person() {}
    Person.prototype = new Array()
    const f = new Person()

    console.log(f.constructor === Person) // false
    console.log(f.constructor === Array) // true
    ```

4.  Object.prototype.toString.call()使用 Object 对象的原型方法toString来判断数据类型

        ```js
        const a = Object.prototype.toString
        console.log(a.call(2)); // [object Number]
        console.log(a.call(true)); // [object Boolean]
        console.log(a.call('str')); // [object String]
        console.log(a.call([])); // [object Array]
        console.log(a.call(function(){})); // [object Function]
        console.log(a.call({})); // [object Object]
        ```

    > 同样是检测对象 obj 调用 toString 方法，obj.toString()的结果和 Object.prototype.toString.call(obj)的结果不一样，这是为什么？

这是因为 toString 是 Object 的原型方法，而 Array、function 等类型作为 Object 的实例，都重写了 toString 方法。
不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（function 类型返回内容为函数体的字符串，Array
类型返回元素组成的字符串…），而不会去调用 Object 上原型toString 方法（返回对象的具体类型），所以采用 obj.toString()不能得到其对象类型，
只能将 obj 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法

> 结合typeof和instanceof可以判断，但是比较繁琐，一个通用的方法是通过Object.prototype.toString.call()来判断

```js
const getType = val => {
  return Object.prototype.toString
    .call(val)
    .replace(/\[object\s(\w+)\]/, '$1')
    .toLowerCase()
}
```

### null 和 undefined 的区别

1. 都是基本数据类型，分别都只有一个值，就是 undefined 和 null。
2. undefined 代表的含义是未定义，null 代表的含义是空对象。
3. 用途
   1. 一般变量声明了但还没有定义的时候会返回 undefined，
   2. null 主要用于赋值给一些可能会返回对象的变量，作为初始化。
4. undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。
   **`我们可以通过一些方法获得安全的 undefined 值，比如说 void 0`**。
5. 当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。
6. 当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。即null == undefined // true null === undefined // false

### instanceof 操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置

```js
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = object.getPrototypeOf(left)
  // 获取构造函数的prototype对象
  let prototype = right.prototype
  // 判断构造函数的prototype对象是否在对象的原型链上
  while (true) {
    if (!proto) return false
    if (proto == prototype) return true
    // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf 方法用来获取指定对象的原型
    proto = object.getPrototypeOf(proto)
  }
}
```

### Object.is() 与比较操作符 “===”、“==” 的区别

使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的

```js
// ==
console.log(1 == '1') // true
console.log(NaN == NaN) // true
console.log(+0 == -0) // true
// ===
console.log(1 === '1') // false
console.log(NaN === NaN) // false
console.log(+0 === -0) // true
// Object.is
console.log(Object.is(1, '1')) // false
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
```

#### 隐式类型转换

### 包装类型

在 JavaScript 中，基本类型是没有属性和方法的，但是为了便于操作基本类型的值，在调用基本类型的属性或方法时 JavaScript 会在
后台隐式地将基本类型的值转换为对象，如

```js
const a = 'abc'
a.length // 3
a.toUpperCase() // "ABC"
```

在 访 问 'abc'.length 时 ， JavaScript 将 'abc' 在 后 台 转 换 成 String('abc')，然后再访问其 length 属性。
JavaScript 也可以使用 Object 函数显式地将基本类型转换为包装类型：

```js
const a = 'abc'
Object(a) // String {"abc"}
```

也可以使用 valueOf 方法将包装类型倒转成基本类型：

```js
const a = 'abc'
const b = Object(a)
const c = b.valueOf() // "abc"
```

看看如下代码会打印出什么

```js
const a = new Boolean(false)
if (!a) {
  console.log('hello world')
}
```

答案是什么都不会打印，因为虽然包裹的基本类型是 false，但是 false 被包裹成包装类型后就成了对象，
所以其非值为 false，所以循环体中的内容不会运行。

### BigInt

JavaScript 中 Number.MAX_SAFE_INTEGER 表示最⼤安全数字，计算 结果是 9007199254740991，
即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js 就会出现计算不准确的情况，
这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了 BigInt 来解决此问题

### 空对象判断

1. Json.stringify(obj) == '{}'
2. Object.keys(obj).length < 0

## 变量声明

var const let

### const

#### const对象的属性可以修改吗？

const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。
对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。
但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，
const 只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

## 箭头函数

### 如果 new 一个箭头函数的会怎么样

箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。
new 操作符的实现步骤如下：

1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的**proto**属性指向构造函数的 prototype 属性）
3. 指向构造函数中的代码，构造函数中的 this 指向该对象（也就是 为这个对象添加属性和方法）
4. 返回新的对象

所以，上面的第二、三步，箭头函数都是没有办法执行的。

### 箭头函数的 this 指向哪⾥？

箭头函数不同于传统 JavaScript 中的函数，箭头函数并没有属于⾃⼰的 this，它所谓的 this 是捕获其所在上下⽂的 this 值，
作为⾃⼰的 this 值，并且由于没有属于⾃⼰的 this，所以是不会被 new 调⽤的，这个所谓的 this 也不会被改变

可以⽤Babel 理解⼀下箭头函数:

```js
// es6
const obj = {
  getArrow() {
    return () => {
      console.log(this === obj)
    }
  },
}
```

转化后：

```js
var obj = {
  getArrow: function getArrow() {
    var _this = this
    return function () {
      console.log(_this === obj)
    }
  },
}
```

## 扩展运算符

1. 对象扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
2. 数组扩展运算符

## 原型和原型链

## 闭包
