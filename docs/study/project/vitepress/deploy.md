# 部署

在不同的版本中可以存在些许差异。大致的步骤是这样的

1. build打包成静态文件
2. 启动
   2.1 本地使用preview预览
   2.2 部署到github pages 或者gitee pages
   2.3 将静态文件部署到服务器

本人是使用docker部署到服务器的，所以这里只介绍docker部署的方式。

```dockerfile
FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

RUN npm install nrm -g
RUN nrm use taobao
RUN npm install pnpm -g

COPY . .

RUN pnpm i

RUN pnpm run build

FROM nginx:latest as production

COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE ***
```
