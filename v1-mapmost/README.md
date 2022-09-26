# {{projectName}}
> 基于mapmost-webgl前端项目，由s2前端框架进行构建。

**重要说明**

* 目前生成的项目中mapmost-webgl使用的是1.x版本，和最新的2.x版本不兼容，若要更新到2.x版本请参照mapmost-webgl的文档进行更新。
* mapmost-webgl最新版本为2.x，此版本仅支持公司发布平台发布的矢量地图服务，不再支持公司之前发布的矢量地图服务。

[s2在线帮助文档](http://58.210.9.133/iplatform/pldoc)
## 初始化
* 安装s2
```
npm i -g @dpark/s2 --registry http://192.168.126.25/npm/
```
* 项目初始化
```
npm run pre
```

### 相关配置
* 配置文件：`src\project.js`
* 路由：`src\views\index.js`

### 运行
* 开发模式
```
npm run dev
```
* 代理模式
```
npm run proxy
```

### 编译
* 打包成模块
```
npm run build:module
```
* 打包成完整项目
```
npm run build
```
