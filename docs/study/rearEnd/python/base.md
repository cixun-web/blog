# 基础

## 注释

单行注释 #

多行注释 以'''开始 以'''结束

## 变量

定义 变量名 = 变量值

### 变量类型

- number 数字
  - int 有符号整型
  - long 长整型（python2)
  - float 浮点数
  - complex 复数
- boolean 布尔类型
  - true
  - false
- string 字符串
- list 列表
- tuple 元组
- dictionary 字典

### 类型转换

- int()
- float()
- str()
- boolean()

## 运算符

### 算数运算符

| 运算符 | 描述   |
| ------ | ------ |
| +      | 加     |
| -      | 减     |
| \*     | 乘     |
| /      | 除     |
| //     | 取整除 |
| %      | 取余   |
| \*\*   | 指数   |
| ()     | 小括号 |

> 注意：混合运算时，优先级顺序为：_ 高于 _ / % //高于+ -为了避免歧义，建议使用()来处理运算符优先级,
> 并且不同类型的数字在进行混合运算时，整数将会转换成浮点数进行运算。

### 变量赋值

单个 =
连续 a = b = 30
多个 a,b,c = 1,2,3

### 复合赋值运算符

+= -= \*= /= //= %= \*\*=

### 比较运算符

/> < >= <= != ==

### 逻辑运算符

and 与 or 或 not 非

## 输入输出

### 输入

input()

```python
name = input("请输入姓名：")
```

### 输出

#### 普通输出

```python
print("hello world")
```

#### 格式化输出

```python
age = 18
name = 'cixun'
# %s 代表的是字符串 %d 代表的是数值
print('我的名字%s, 我的年龄是%d' % (name, age))
```

## 流程控制

### 条件判断

if elif else

```python
if 条件:
    代码块
elif 条件:
    代码块
else:
    代码块
```

### 循环

#### while循环

```python
while 条件:
    代码块
```

#### for循环

```python
# range(开始位置，结束位置，步长)
s = 'china'
for i in s:
    print(i)
print('-------------------')
for i in range(5):
    print(i)
print('-------------------')
for i in range(1, 10):
    print(i)
print('-------------------')
for i in range(1, 10, 3):
    print(i)
```
