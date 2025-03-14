# 网络嗅探器

这个项目的原理是使用python的库进行抓包，写这个实战的原理是如何将python的脚本与electron结合

## 使用python 编写flask api，并打包成可执行文件

### 相关依赖下载

```bash
# 写快捷接口的
pip install Flask
# 将python打包成可执行exe文件
pip install pyinstaller
```

### 代码

```python [serve.py]
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/message', methods=['GET'])
def get_message():
    return jsonify(message="Hello form Python")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

### 打包成可执行文件

```bash
pyinstaller --onefile serve.py
```

## electron 配置

```bash
pnpm add electron electron-builder -D
```
:::code-group
```js [main.js]
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})
```
```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Electron App!
    <button id="fetch-messgae"> Fetch Message </button>
    <script>
        const fecthMessageBtn = document.getElementById('fetch-messgae');
        fecthMessageBtn.addEventListener('click', () => {
            console.log('click')
            fetch('http://127.0.0.1:5000/api/message')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    document.getElementById('fetch-messgae').innerText = data.message;
                })
        })
    </script>
</body>
</html>
```
```json [package.json]
{
  "name": "electron-python-app",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "dev": "electron .",
    "build": "electron-builder"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^35.0.0",
    "electron-builder": "^25.1.8"
  }
}
```
:::

## 将打包的exe 内置在electron中

> 直接使用上方打包的exe，内置在electron的时候，启动程序会生成两个pId

:::code-group
```js [main.js]
let pyProc = null;
function startPythonServer() {
  const resourcePath = process.resourcesPath.indexOf('node_modules') > -1
    ? path.join(__dirname, 'serve.exe')
    : path.join(process.resourcesPath, 'serve.exe');
  pyProc = spawn(resourcePath);

  pyProc.stdout.on('data', (data) => {
    console.log(`Python 服务输出: ${data}`);
  });

  pyProc.stderr.on('data', (data) => {
    console.error(`Python 服务错误: ${data}`);
  });

  pyProc.on('close', (code) => {
    console.log(`Python 服务已关闭，退出码: ${code}`);
  });
}
```
```json [package.json]
{
  "build": {
    "appId": "com.example.app",
    "files": [
      "index.html",
      "main.js",
      "serve.exe"
    ],
    "extraResources": [
      {
        "from": "./serve.exe",
        "to": "./serve.exe",
        "filter": [
          "**/*"
        ]
      }
    ]
  }
}
```
