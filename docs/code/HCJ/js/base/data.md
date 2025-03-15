# 数据和数据类型

数据：有用的信息
数据类型：数据的分类

## JS 数据类型

### 原始类型

- 数字类型 number
  - 直接书写即可，包括整数和浮点数，如 `1`、`3.14`、`-100`、`NaN`、`Infinity` 等。
  - 可以加上前缀，表示不同进制，如 `0b101` 表示二进制，`0o12` 表示八进制，`0x1a` 表示十六进制。
- 字符串类型 string
  - 单引号 `'hello'`
  - 双引号 `"hello"`
  - 反引号 `` `hello` `` (模板字符串)
  - 字符串中的特殊字符需要转义，如 `\n` 表示换行，`\t` 表示制表符，`\\` 表示反斜杠，`\'` 表示单引号，`\"` 表示双引号，`\`` 表示反引号。
- 布尔类型 boolean
  - true 表示真
  - false 表示假
- undefined 类型，表示未定义不存在。
- null 类型，表示空，不存在。
<!-- - Symbol (es6新增)
- BigInt (es6新增)
- 字符类型 character (es6新增) -->

### 引用类型

- 对象 object
- 函数 function，详细看function章节。
<!-- - Array
- Date
- RegExp
- ... -->

#### object

数据使用堆存储，当对象被复制时，不是将对象复制到内存中，而是复制对象的引用地址。

### 浅拷贝，深拷贝

#### 浅拷贝

- 概念

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

- 实现

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

#### 深拷贝

- 概念

> 解决浅拷贝出现的会修改原值的问题。

- 实现
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

## 类型判断

### typeof

> 对null，以及引用类型中的数组、日期、正则没有返回自己的具体类型。简单的记就是只可以返回基本类型（null除外），function以及Object（null返回的也是Object）

1. 对于基本类型，除null外，均可以返回正确的结果
2. 对引用类型中的function 返回 function类型
3. null以及其他引用类型 返回 object类型

### instanceof

> 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B。注意的是 instanceof 检测的是原型。**instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型**

```js
;[] instanceof Object // true
;[] instanceof Array // true
```

模拟实现一个instanceof

```js
function instance_of(Case, Constructor) {
  // 基本数据类型返回false
  // 兼容一下函数对象
  if ((typeof Case != 'object' && typeof Case != 'function') || Case == 'null')
    return false
  let CaseProto = Object.getPrototypeOf(Case)
  while (true) {
    // 查到原型链顶端，仍未查到，返回false
    if (CaseProto == null) return false
    // 找到相同的原型
    if (CaseProto === Constructor.prototype) return true
    CaseProto = Object.getPrototypeOf(CaseProto)
  }
}
```

### constructor

**可追溯的实例的构造器**。

```js
function F() {}
var f = new F()
// f.constructor === F
```

### Object.toString

> toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
> 对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

```js
const typeofType = value => {
  const callType = Object.prototype.toString.call(value)
  return callType.slice(8, -1)
}
```
