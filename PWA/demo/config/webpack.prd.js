const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');  // 为我们的应用程序添加离线体验

const config = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build/assets'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new webpack.HashedModuleIdsPlugin(), //该插件会根据模块的相对路径生成一个四位数的hash作为模块id; 不管是否添加本地依赖, vendor hash 都应该保持一致
    // 快速启用 ServiceWorkers
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  }
}

module.exports = merge(common, config);
