# 开发

## source map

开发中一般会有引用模块的情况，但是当内部模块出现问题时，只会将问题跟踪到经过webpack打包后的bundle文件，不方便定位。为了更容易地追踪错误和警告， 可以使用 source map， 它会将编译后的代码映射回原始源代码，这样出现问题的时候就能够定位到源代码。

通过 devtool: 'source-map类型' 配置source map； source map有很多种[不同的选项](https://www.webpackjs.com/configuration/devtool/)，比如：

source-map：会生成单独的map文件, 可以定位到原始源代码，更试用于生产环境

cheap-source-map：会生成单独的map文件，没有列映射，可以定位到转换过的代码（仅限行）

cheap-module-source-map：会生成单独的map文件，没有列映射，可以定位到原始源代码

eval-source-map：每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中，可定位到原始源代码

cheap-eval-source-map: 类似于eval-source-map，但没有列映射，只能定位到转换后的代码

cheap-module-eval-source-map: 类似于cheap-eval-source-map，但会定位到原始源代码

inline-source-map：source map转换成dataurl添加到bundle中

...

## 开发工具

每次改变代码都要通过 npm run build 重新打包很不方便，webpack提供了以下几种方式，可以在代码发生改变时自动的帮忙打包：

1. watch模式：使用 webpack --watch 即可开启，运行npm run watch进行打包及观察，但需要手动刷新浏览器
```
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch"
  }
```

2. webpack-dev-server：提供了一个简单的 web 服务器，并且能够实时重新加载；可自动刷新; 打包后的文件会放在内存里

  使用前需要npm install webpack-dev-server, 并需要在配置文件中增加devServer进行配置；[devServer的更多配置](https://www.webpackjs.com/configuration/dev-server/)

```
webpack.config.js增加配置：

  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // 告诉服务器从哪里提供内容
    port: 9090,  // 端口号
    open: true  // 是否自动打开浏览器 也可以通过 webpack-dev-server --open 配置
  }

package.json中脚本配置:

  "scripts": {
    "dev": "webpack-dev-server"
  }

```
3. webpack-dev-middleware: 使用node的方式打包；是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)

  需先安装express和webpack-dev-middleware，并配置server.js

```
  const express = require('express');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const app = express();
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  // 监听端口
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
  });

```
脚本配置：

```
"scripts": {
    "server": "node server.js"
  }

```

[官方文档](https://www.webpackjs.com/guides/development/)
