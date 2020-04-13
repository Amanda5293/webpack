const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build/assets'),
    filename: '[hash].js'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({})
  ]
}

module.exports = merge(common, config);
