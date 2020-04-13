# css文件的分离

[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) 对css进行分离，用它替换 style-loader并在plugins中使用：
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

...

module: {
  rules: [
    {
       test: /\.(css|less)/,
       use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // 背景图使用有问题时，注意此配置
              hmr: process.env.NODE_ENV !== 'production' // 热更新,
            },
          },
         'css-loader',
         'less-loader'
       ]
    }
  ]
},
plugins: [
  new MiniCssExtractPlugin({
    filename: 打包后的文件名
    chunkFilename: chunk名
  })
]

...

```

生产环境还可以使用 *optimize-css-assets-webpack-plugin* 对css进行压缩