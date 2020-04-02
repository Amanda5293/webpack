const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|gif)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 200
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,  // 拆分块的最大值，当超过这个数值是，块会被拆分（需大于minSize)
      minChunks: 1,  // 拆分前模块被共享的次数小于这个数字时不拆分
      maxAsyncRequests: 5, // 按需加载模块时所允许的最大请求数
      maxInitialRequests: 3,
      automaticNameDelimiter: '.',
      name: true,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/]_lodash@4.17.15@lodash[\\/]/,
          priority: 0, // 一个模块可以属于多个缓存组。优化将首选优先级较高的缓存组
          // filename: 'vendors.js',  // 拆分后的文件名
          name: '/common/lodash', // 块名 chunk名 如果和entry里的入口点相同则entry里的会被删除
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true  // 如果当前块包含已经从主包中分离出来的模块，则将重用它，而不是生成新的模块
        }
      }
    }
  }
}