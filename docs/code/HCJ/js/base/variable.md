# 变量

## 什么是变量

变量是一块内存空间，用于保存数据

## 如何使用变量

1. 声明（定义）变量
    ```js
    var 变量名; // undefined, 类型是undefined
    ```
2. 赋值
    ```js
    var 变量名 = 值; // 值, 类型是值的类型
    // 或者
    var 变量名;
    // 不写var定义时，相当于给window的某个属性赋值
    变量名 = 值;

    ```
3. 使用，变量的值是可以重新赋值的
    ```js
    var 变量名;
    变量名 = 值1;
    变量名 = 值2; // 值2 可以和 值1 的类型不同
    console.log(变量名);
    变量名 = 对象；
    console.log(对象.属性);
    console.log(对象[属性]); // 当属性不存在时，输出 undefined，但是对象如果是undefined或者null时，报错
    对象.属性 = 值 // 当属性不存在时，会自动创建属性
    ```

## 变量的命名规则

1. 变量名必须以英文字母、下划线或$符号开头
2. 变量名可以包含字母、数字、下划线或美元符号
3. 变量名不能包含空格、特殊字符、关键字等

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
// 等价于
var a
console.log(a) // => undefined
a = 10

console.log(b) // => 报错
let b = 20

console.log(c) // => 报错
const c = 30
```

### 暂时性死区

暂时性死区是指在代码块中，如使果用 let 或 const 声明变量，那么在变量声明之前，该变量是不可用的。

```js
if (true) {
  console.log(a) // => 报错
  let a = 10
}
```

### 块级作用域

块级作用域是指在代码块中声明的变量，只在代码块中有效。

```js
if (true) {
  var a = 10
  let b = 20
  const c = 30
}
