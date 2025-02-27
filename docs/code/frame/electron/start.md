# 起步

## 基本要求

1. 文本编辑器
2. node
3. git

## 创建基础页面

### 初始化地址

首先创建一个新的目录，例如 client，然后进行初始化。
```bash
npm init -y
```

## 安装 Electron 依赖

```bash
npm install --save-dev electron
```

## 创建 index.html 和 main.js 文件

```html
<!-- index.html 负责的是我们桌面应用的视图。 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 书写桌面程序界面的 -->
    <h1>Hello Electron</h1>
    <p>Hello from Electron！！！</p>
</body>
</html>
```

```js
// main.js
const { app, BrowserWindow } = require("electron");

// 创建窗口的方法
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
};

// whenReady是一个生命周期方法，会在 Electron 完成应用初始化后调用
// 返回一个 promise
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

### package.json 中添加配置

```json
{
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

## 使用预加载脚本

### 什么是预加载脚本？

为了将 Electron 的不同类型的进程桥接在一起，我们需要使用被称为 **预加载** 的特殊脚本

## 添加功能

## 打包

## 发布和更新
