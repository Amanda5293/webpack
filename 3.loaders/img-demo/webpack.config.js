const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: 'images/',
        //     name: '[name][hash].[ext]'
        //   }
        // }
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 500
          }
        }
      }
    ]
  }
}