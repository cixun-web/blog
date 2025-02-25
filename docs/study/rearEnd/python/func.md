# 函数

### 定义函数

def 函数名():

### 函数参数

- 实参： 调用函数时传递的参数
- 形参： 定义函数时的参数

### 函数返回值

return

### 函数的嵌套调用

```python
def test1():
    print('test1')
    def test2():
        print('test2')
    test2()
test1()
```

### 函数的递归调用

在递归的时候记得要有一个出口，不然会无限递归下去，直到内存溢出

```python
def test1():
    print('test1')
    test1()
test1()
```

### 局部变量和全局变量

- 局部变量： 在函数内部定义的变量，只能在函数内部使用
- 全局变量： 在函数外部定义的变量，所有函数内部都可以使用，如果在函数内部修改全局变量，需要使用global关键字

```python
num = 10
def test1():
    global num
    num = 20
    print(num)
def test2():
    print(num)
test1()
test2()
```
