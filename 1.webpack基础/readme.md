# Webpack 基础

Q: 
  1. webpack 是什么
  2. 如何安装 webpack
  3. 如何使用 webpack

## webpack是一个模块化打包工具
  webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)，即一个模块化打包工具。当使用webpack时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

  webpack支持commonjs、es module模块化规范，对于一些其他模块比如 css 、图片可以通过loader进行打包

## webpack的安装
1. 安装nodejs; 通过 node -v npm -v分别查看安装的node和npm版本
2. 创建一个目录，初始化 npm本地安装webpack及 webpack-cli (webpack-cli是webpack的命令行工具,可以使我们在命令行中使用webpack命令)
  
  ```
  npm init -y
  npm install webpack webpack-cli --save-dev

  ```

## webpack的使用
1. 初始化项目并安装webpack和webpack-cli
2. 建立需要进行打包的文件 index.js

  ![图片](https://github.com/Amanda5293/webpack/blob/master/1.webpack%E5%9F%BA%E7%A1%80/imgs/structure.PNG)

3. 执行打包
* cli打包方式：

全局打包(需全局安装webpack webpack-cli)： *webpack* 或者本地打包：*npx webpack* (npx 会先在当前的node_modules下找webpack)

比如demo中的index.js文件可以通过以下几种打包：
```
 webpack ./src/index.js -o ./dist/bundle.js
 npx webpack ./src/index.js -o ./dist/bundle.js

```
![图片](https://github.com/Amanda5293/webpack/blob/master/1.webpack%E5%9F%BA%E7%A1%80/imgs/webpack.PNG)

大多数项目会需要很复杂的设置，这就需要通过配置文件来进行打包；建立 webpack.config.js 来配置打包
```
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}

```
执行 npx webpack --config webpack.config.js

* package.json中 *配置 npm scripts* 然后通过 *npm run xxx* 执行
  ```
    "scripts": {
      "build": "webpack"
    }

    执行 npm run build 进行打包 (默认会去同级找webpack.config.js文件，也可以通过 --config 指定)
  ```


