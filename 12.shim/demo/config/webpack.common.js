const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 分离css内容的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack  = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../', // 注意背景图
              hmr: devMode,
            },
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.js$/,
        use: ['imports-loader?this=>window', 'babel-loader',]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
    new webpack.ProvidePlugin({
      // _: 'lodash',   // 告知webpack, 如果有使用_则自动引入 lodash
      join: ['lodash', 'join'],  // 具体到方法
      $: 'jquery'
    }),
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
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 0, // 一个模块可以属于多个缓存组。优化将首选优先级较高的缓存组
          // filename: 'vendors.js',  // 拆分后的文件名
          name: 'common/vendors', // 块名 chunk名 如果和entry里的入口点相同则entry里的会被删除
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