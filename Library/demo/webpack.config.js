const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals: ['lodash'], // externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法,  而改成依赖于用户环境中的依赖
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      root: '_'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'libiary.js',
    library: 'utils', // 暴露库名
    libraryTarget: 'umd' // 兼容环境 
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader'
      }
    ]
  }
}
