const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build/assets'),
    filename: '[hash].js'
  }
}

module.exports = merge(common, config);
