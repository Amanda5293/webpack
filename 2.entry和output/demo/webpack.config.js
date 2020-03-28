const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js',
    './src/utils.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    pathinfo: false
  }
}