# api-center

## 技术栈

- 后端：**`node.js` `midway.js` `egg.js` `mysql` `typescript`**
- 前端：**`vue.js` `element-ui` `jsx` `vuex` `vue-router`**

如果你是前端，后端的这些技术选型对你是特别友好的，前端开发者可以较快速地上手。
如果你是后端，Typescript 的语法又跟 java、php 等特别类似，一切看起来也是那么得熟悉。

<!-- 在此次添加使用文档 -->

#### 框架文档

[https://admin.cool-js.com](https://admin.cool-js.com)

#### 项目前端

Todo

## 运行

#### 修改数据库配置，配置文件位于`src/config/config.local.ts`

数据库为 mysql(`>=5.7版本`)，node 版本(`>=14.x`)，首次启动会自动初始化并导入数据

```js
config.orm = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cool-admin',
  synchronize: true,
  logging: true,
};
```

#### 安装依赖并运行

```bash
$ npm i
$ npm run dev
$ open http://localhost:8001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。

[midway]: https://midwayjs.org
