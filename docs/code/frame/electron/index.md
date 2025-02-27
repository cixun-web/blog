# Electron

Electron是一个使用前端技术（HTML、CSS、JS）来开发桌面应用的框架。

## Electron 诞生的原因

在早期的时候，要开发一个桌面应用，能够选择的技术框架并不多：

- Qt
- GTK
- wxWidgets

这三个框架都是基于 C/C++ 语言的，因此就要求开发者也需要掌握 C/C++ 语言，对于前端开发人员来讲，早期是无法涉足于桌面应用的开发的

> StackOverflow 联合创始人 Jeff 说：
>
> 凡是能够使用 JavaScript 来书写的应用，最终都必将使用 JavaScript 来实现。

使用前端技术开发桌面应用相关的框架实际上有两个：

- [NW.js](https://nwjs.io/)
- [Electron](https://www.electronjs.org/zh/)

## Electron 与 NW 对比

| 能力    | Electron      | NW.js |
|-------|---------------|-------|
| 崩溃报告  | 内置            | 无     |
| 自动更新  | 内置            | 无     |
| 社区活跃度 | 良好            | 一般    |
| 周边组件  | 较多，甚至很多官方提供组件 | 一般    |
| 开发难度  | 一般            | 较低    |
| 知名应用  | 较多            | 一般    |
| 维护人员  | 较多            | 一般    |

## 特点

在 Electron 的内部，集成了两大部件：

- Chromium：为 Electron 提供了强大的 UI 能力，可以在不考虑兼容的情况下，利用 Web 的生态来开发桌面应用的界面。
- Node.js：让 Electron 有了底层的操作能力，比如文件读写，集成 C++，而且还可以使用大量开源的 npm 包来辅助开发。

而且 Chromium 和 Node.js 都是跨平台的，这意味着我们使用 Electron 所开发的应用也能够很轻松的解决跨平台的问题。
