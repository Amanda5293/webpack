# plugins

插件目的在于解决 loader 无法实现的其他事。可以用于以各种方式自定义 webpack 构建过程。也就是可以在webpack运行到某个时刻的时候，帮你做一些事情。比如：

html-webpack-plugin: 会在 *打包结束后* 自动生成一个html文件(如果有设置模板会根据模板生成)，并把打包生成的js自动引入到html文件中

clean-webpack-plugin: 每次 *打包前* 会先清空指定目录内容

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}

```

[插件配置](https://www.webpackjs.com/guides/output-management/)

[更多插件](https://www.webpackjs.com/plugins/)
