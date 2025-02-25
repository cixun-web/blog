# 富文本

## 简介

富文本编辑器是一种可内嵌于浏览器，所见即所得的编辑器，它允许用户通过类似于常用的文字处理软件（如 Microsoft Word）的用户界面来编辑内容，但生成的内容是HTML格式的。

## 原理

### 1. contenteditable

contenteditable 属性规定元素内容是否可编辑。

```html
<div contenteditable="true">这是一个富文本编辑器</div>
```

我们会发现在div中可以编辑文字，这就是contenteditable的作用。
在div下面的所有元素都可以编辑，这是以为contenteditable是继承属性。

### 2. execCommand

execCommand() 方法用于向编辑区域发送命令。

参数说明

- 第一个参数 为执行的命令名称
- 第二个参数 为是否显示用户界面，true为显示，false为不显示
- 第三个参数 为执行命令需要的一个值，默认为null

```js
// 选中文字加粗
document.execCommand('bold', false, null)
```

## 封装

### 1. 基本结构

```html
<div class="editor">
  <div class="toolbar"></div>
  <div class="content" contenteditable="true"></div>
</div>
```

### 2. 样式

```css
.editor {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  padding: 10px;
  overflow: auto;
  border: 1px solid #ccc;
}
```

### 3. 功能

#### 1. 加粗

```html
<button class="bold">加粗</button>
```

```js
const bold = document.querySelector('.bold')
bold.addEventListener('click', () => {
  document.execCommand('bold', false, null)
})
```

### 封装成库

想要实现的效果

1. toolbar 工具栏，可以自定义，可以控制显示或者隐藏。自定义是传的是plugins的参数
2. content 编辑区域。
3. 选中文字时，工具栏会根据选中的文字，显示对应的样式。并且出现一个浮窗工具栏，可以对选中的文字进行操作。工具栏可以配置，可以控制显示或者隐藏。自定义是传的是plugins的参数
4. 纯预览模式，不可编辑。

#### vue3版本
