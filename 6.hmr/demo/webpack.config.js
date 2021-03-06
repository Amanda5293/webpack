const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // 告诉服务器从哪里提供内容
    port: 9090,
    open: true,
    hot: true
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
            limit: 1024 * 30
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}