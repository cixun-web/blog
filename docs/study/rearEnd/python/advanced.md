# 进阶操作

## 切片

切片是指对操作的对象截取其中一部分的操作。字符串、列表、元组都支持切片操作

语法：[起始: 结束: 步长]， 也可以简化使用[起始:结束]

注意：选取的区间从“起始”位开始，到“结束”为的前一位结束（不包含结束位本身），步长表示选取间隔

## 字符串

### 字符串的常用操作

- 字符串拼接 'hello' + 'world'

* 字符串重复 'hello' \* 3

- [] 通过下标获取字符串中字符
- in 判断指定字符是否存在于字符串中
- not in 判断指定字符是否不存在于字符串中
- % 格式化字符串

```python
# 字符串的常用操作
# + 字符串拼接
print('hello' + 'world')
# * 字符串重复
print('hello' * 3)
# [] 通过下标获取字符串中字符
print('hello'[1])
# in 判断指定字符是否存在于字符串中
print('h' in 'hello')
# not in 判断指定字符是否不存在于字符串中
print('h' not in 'hello')
# % 格式化字符串
print('hello %s' % 'world')
```

## 列表

### 添加

- append 在末尾添加元素
- insert 在指定位置插入元素
- extend 合并两个列表

```python
# 添加元素
# append 在末尾添加元素
first_list = [1, 2]
print(first_list)
first_list.append(3)
print(first_list)
first_list.append([4, 5])
print(first_list)
# insert
first_list.insert(1, 'b')
print(first_list)
# extend
second_list = [8, 9]
first_list.extend(second_list)
print(first_list)
```

### 修改

通过指定下标来访问列表元素，因此修改元素的时候，为指定的列表下表赋值即可

```python
# 修改元素
first_list[1] = 'c'
print(first_list)
```

### 查询

in 和not in

- in (存在), 如果存在那么结果为true，否则为false
- not in (不存在), 如果不存在那么结果为true，否则为false

```python
# 查询元素
if 1 in first_list:
    print('1存在')
if 4556 not in first_list:
    print('4556不存在')
```

### 删除

- del 删除指定下标的元素
- pop 删除指定下标的元素，如果不指定下标，那么默认删除最后一个元素
- remove 删除指定的元素，如果元素不存在，那么会报错

```python
# 删除元素
del first_list[1]
print(first_list)
first_list.pop(1)
print(first_list)
first_list.remove([4, 5])
print(first_list)
```

### 排序

- sort 排序
- reverse 反转

```python
# 排序
first_list.sort()
print(first_list)
first_list.reverse()
print(first_list)
```

### 统计

- len 统计列表中元素的总数
- count 统计某一个元素在列表中出现的次数

```python
# 统计
print(len(first_list))
print(first_list.count(1))
```

### 遍历

- item
- index, item

```python
# 遍历
for item in first_list:
    print(item)
for index, item in enumerate(first_list):
    print(index, item)
```

## 元组

元组的元素是不可以修改的，也是和列表的区别之一

注意：定义只有一个元素的元组，需要在唯一的元素后写一个逗号

```python
# 元组
first_tuple = (1, 2, 3)
print(first_tuple)
print(type(first_tuple))
# 定义只有一个元素的元组，需要在唯一的元素后写一个逗号
second_tuple = (1,)
print(second_tuple)
print(type(second_tuple))
```

## 字典

### 添加

```python
person['name2'] = 'xiaoMing'
print(person, person['name2'])
```

### 修改

```python
person['name'] = 'xiaoMing'
print(person, person['name'])
```

### 查询

- []
- get

```python
print(person['name'])
print(person.get('name'))
```

### 删除

- del
  - 删除字典中指定的某一个元素 del person['name']
  - 删除整个字典 del person
- pop 删除字典中指定的某一个元素 person.pop('name2')
- clear 清空字典，但是保留字典对象 clear person

```python
del person['name']
print(person)
person.pop('name2')
print(person)
person.clear()
print(person)
```

### 遍历

- keys
- values
- items
- key, value

```python
for key in person.keys():
    print(key)
for value in person.values():
    print(value)
for item in person.items():
    print(item)
for key, value in person.items():
    print(key, value)
```
