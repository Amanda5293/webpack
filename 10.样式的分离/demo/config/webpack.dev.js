const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build/assets-dev'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js' // 非入口文件走这里 未在entry中配置的
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build/assets-dev'), // 告诉服务器从哪里提供内容
    port: 8090,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(common, config);

