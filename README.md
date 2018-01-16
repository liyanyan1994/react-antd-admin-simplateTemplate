##基于react+antd+react-router+redux+mock后台管理系统

##运行环境说明
> react V16.2.0

> react-router-dom V4.2.2

> antd V3.1.1

> node V6.11.0

##效果图
 <p align="center">
  <img width="900" src="http://www.liyanyan1994.xyz/images/dashbord.png">
</p>

## 项目说明
    最近很闲,开始学习react，在github上找了好久没有发现使用最新的react-router V4.X以上的后台管理系统.
    主要是路由的嵌套，相对于V2.x的变化还是很大的。
    之前在公司都是使用的vue的全家桶,react也相对的类似,决定自己来写一个简单的后台系统模板。

    本项目是基于React的脚手架crate-react-app,增加了sass
    react-router使用的最新的4.2刚开始看着很抠脚,主要是子路由的嵌套,还研究了半天,里面还有些坑。像子组件接受不到路由，可以使用withRouter

    项目写得很基础适合刚入门，可以根据自己的需求进行改写,当然还有很可以进行改进的地方.

## 技术文档
- [React](https://facebook.github.io/react/)
- [React-router](https://reacttraining.com/react-router/web/example/basic)
- [React-router中文文档](http://reacttraining.cn/web/example/basic)
- [Ant Design of React](http://design.alipay.com/develop/web/docs/introduce)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.github.io/)

## 使用项目

- 1.克隆项目   git clone https://github.com/liyanyan1994/react-antd-admin-simplateTemplate.git
- 2.切换到项目根目录 cd  react-antd-admin-simplateTemplate
- 3.安装依赖包 npm install
- 4.启动服务 npm start
- 5.打包构建 npm build 

注意npm install的时候若node-sass安装不上请使用cnpm

## 目录结构
```shell
├── build                           // 构建相关  
├── public                          // 公用模板
├── src                             // 源代码
│   ├── api                         // 所有请求
│   ├── assets                      // 存放图片等静态资源
│   ├── components                  // 全局公用组件
│   ├── mock                        // 项目mock 模拟数据
│   ├── router                      // 路由
│   ├── utils                       // 全局公用方法
│   ├── views                       // views
│   ├── index.css                   // 全局css样式
│   ├── index.js                    // 入口js 初始化 加载组件等
│   ├── logo.svg                    // log图标
│   └── registerServiceWorker.js    // 本地创建service worker 
├── .gitignore                      // git 忽略项
├── package-lock.json               // package.json
└── package.json                    // package.json

```


