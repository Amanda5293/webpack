# loaders

由于webpack只能识别js文件，打包其他文件需要通过loader打包。loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。loader是一个模块化打包方案

## 对图片以及字体的处理

当项目中有使用图片、字体时可以使用 file-loader 或 url-loader 进行打包;

 file-loader: 将图片打包到输入路径，并将路径返回;

 url-loader: 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL

 file-loader的使用：
 ```
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name][hash].[ext]'
          }
        }
      }
    ]
  }

 ```
 ![图片](https://github.com/Amanda5293/webpack/blob/master/3.loaders/imgs/img-file-loader.PNG)

 url-loader的使用：
 ```
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 500  // 超出 500k 会使用file-loader(需install)打包，否则返回一个DataURL
          }
        }
      }
    ]
  }
 ```
 ![图片](https://github.com/Amanda5293/webpack/blob/master/3.loaders/imgs/img-url-loader.PNG)
 ![图片](https://github.com/Amanda5293/webpack/blob/master/3.loaders/imgs/img-url-loader-html.PNG)

## 对样式文件的处理

对 css 文件的处理需要使用 style-loader 和 css-loader； less文件需要再使用 less-loader

style-loader: 将打包后的css以style标签注入的方式插入到页面

css-loader: 打包css模块

less-loader：打包less模块

postcss-loader: 可以自动给一些css加浏览器厂商前缀(autoprefixer)等功能

```
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }

```
Notes:
1. use中的loader执行顺序是从后往前，也就是先执行 css-loader打包css模块，然后再执行style-loader将打包后的css插入到页面
2. 当css文件中引入了 less 文件需要在处理css文件的配置处使用less-loader,即：
  ```
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }
  ```
  less中有引入css文件，直接按less文件的配置处理即可
  ```
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }
  ```

## babel-loader

[Babel](https://babel.docschina.org/docs/en/) 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码; babel主要包含三个部分，解析、转换以及生成。 babel 本身不提供转换工具，需要通过一些plugins来实现。一般都会通过presets进行plugins包的预设

@babel/core: babel的核心

@babel/preset-env: 根据指定的环境预设一些插件包；可以进行一些语法的转换，比如 箭头函数

@babel/polyfill: 支持更多的api的转换，比如 Promise Map ... 实例上的方法 includes 等

@babel/plugin-transform-runtime: 可以重用babel中的助手函数, 这些方法都将引用@babel/runtime模块内容来避免在编译的输出中重复出现；@babel/polyfill会污染全局，而使用@babel/plugin-transform-runtime不会

webpack中使用babel需要通过 babel-loader 来作为 babel 和 webpack间的桥梁。

1. 首先需要安装babel 和 babel-loader: npm install @babel/core babel-loader -D
2. 在配置文件中增加babel-loader的配置
```
 module: {
   rules: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
     }
   ]
  }

```
3. 安装@babel/preset-env、@babel/plugin-transform-runtime(-D) 以及 @babel/runtime(--save)
3. 在与配置文件同级的目录下增加babel的配置文件 .babelrc
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage", // 这个选项用于配置如何处理polyfill, 在每个文件的顶部添加此文件中使用但目标环境不支持的功能的polyfill导入
        "targets": "> 0.25%, not dead",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3 // @babel/runtime --> @babel/runtime-corejs3
    }]
  ]
}

```


[loader配置](https://www.webpackjs.com/guides/asset-management/)

[更多loader](https://www.webpackjs.com/loaders/)
