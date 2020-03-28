# loaders

由于webpack只能识别js文件，打包其他文件需要通过loader打包。loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。loader是一个模块化打包方案

## 对图片以及字体的处理

当项目中有使用图片时可以使用 file-loader 或 url-loader 进行打包;

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
