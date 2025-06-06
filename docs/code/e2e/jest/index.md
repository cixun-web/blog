# JEST

## 基础使用

test, it, describe等方法是全局使用的，不需要引入

### 快速入门

```js
// tools.test.js
const sum = (a, b) => a + b;

// 测试用例
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds 1 + a to equal 1a', () => {
  expect(sum(1, 'a')).toBe('1a');
});
```

在源码中，`test` 和 `it` 函数都可以用来定义测试用例，第一个参数是测试用例的名称，第二个参数是测试用例的具体实现

> 最好的是一个函数对应一个测试文件

### 测试用例分组

在一个测试套件中，针对不同测试用例，我们可以使用 `describe` 函数来分组

```js
// tools.test.js
const sum = (a, b) => a + b;

describe('这是一组加法测试', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('adds 1 + a to equal 1a', () => {
    expect(sum(1, 'a')).toBe('1a');
  });
});
```

在源码中，`describe` 函数接收两个参数，第一个参数是分组名称，第二个参数是分组内的测试用例

## 匹配器 Matchers

expect 调用之后，会返回expectation对象，expectation对象提供了一系列的匹配器，在这个对象上就可以使用修饰符 以及 匹配器

### 修饰符

- .not 不
- .resolves 异步成功
- .rejects 异步是不

### 匹配器

#### 常用匹配器

- toBe 等于
- toEqual 深度比较，会递归比较对象的所有属性

#### 布尔值相关匹配器

- toBeFalsy 为false
- toBeTruthy 为true

#### 无参匹配器

- toBeNull null
- toBeUndefined undefined
- toBeDefined 定义过

#### 数值相关匹配器

- toBeGreaterThan 大于
- toBeGreaterThanOrEqual 大于等于
- toBeLessThan 小于
- toBeLessThanOrEqual 小于等于
- toBeCloseTo 接近。可以指定精度，默认是2位小数

#### 字符串相关匹配器

- toMatch 正则匹配，检测字符串是否匹配

#### 数组相关匹配器

- toContain 包含，检测数组是否包含某个元素，全等比较。还可以判断一个字符串是否包含某个子字符串。也可以用到Set集合中，是否包含某个元素

#### 异常相关匹配器

- toThrow 抛出异常，可以传递不同的参数

#### 非对称匹配器

- toEqual 匹配对象，里面类似一种描述

## 生命周期

### 重复性的生命周期

- beforeEach 每个测试用例执行之前执行
- afterEach 每个测试用例执行之后执行

### 一次性的生命周期

- beforeAll 所有测试用例执行之前执行
- afterAll 所有测试用例执行之后执行

如果既有全局的beforeEach，又有局部的beforeEach，那么全局的beforeEach会先执行，然后再执行局部的beforeEach。afterEach相反。

## 模拟

### 模拟模块

#### 第三方模块

```js
// 模拟axios
jest.mock('axios', () => {
  return {
    get: jest.fn(() => {
      const data = { name: 'John' };
      return Promise.resolve(data);
    }),
  }
});

it('axios 请求', async () => {
  const result =  await axios.get('/users');
  expect(result).toEqual({ name: 'John' });
})

```

#### 文件模块

```js
// 模拟文件模块
jest.mock('./tools', () => {
  return {
    sum: jest.fn(() => {
      return 100;
    }),
  }
});

import { sum } from './tools';

it('should sum', () => {
  expect(sum(1, 2)).toEqual(100);
})
```

### 模拟函数

```js
// 指定返回值是42
const mock = jest.fn(); // 返回的是 mock 函数，可以调用
mock.mockReturnValue(42);
```

## 配置

```bash
npx jest --init
```

```js
// jest.config.js
module.exports = {
  verbose: true, // 显示测试用例执行结果
  collectCoverage: true, // 统计代码覆盖率
  coverageThreshold: { // 代码覆盖率阈值
    /**
     * branches: 分支覆盖率
     * functions: 函数覆盖率
     * lines: 行覆盖率
     * statements: 语句覆盖率
     * */
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [ // 测试匹配规则
    '**/__tests__/**/*.test.js',
    '**/?(*.)+(spec|test).js',
  ],
  moduleFileExtensions: [ // 模块文件扩展名
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
}
```
