# [shim 预置依赖](https://webpack.docschina.org/guides/shimming/)

有一些第三方库可能会引用一些全局依赖（例如 jQuery 中的 $）。因此这些 library 也可能会创建一些需要导出的全局变量，这时就可以通过shim来处理。

## shim预置全局变量
  通过使用 ProvidePlugin 能够在 webpack 编译的每个模块中，通过访问一个变量来获取一个 package。如果 webpack 看到模块中用到这个变量，它将在最终 bundle 中引入给定的 package。

  比如我们可以将lodash的某个方法提取为全局变量：
  ```
  const webpack  = require('webpack');

  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',   // 告知webpack, 如果有使用_则自动引入 lodash
      join: ['lodash', 'join'],  // 具体到方法 可以再模块中直接使用 lodash中的join方法
      $: 'jquery'
    })
  ]

  ```

## 细粒度shim

在一些特殊的场景中可能会需要改变模块的this指向，比如在commonjs上下文中this指向的是module.exports，如果需要将this指向改变，可以通过 **imports-loader** 覆盖

```
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['imports-loader?this=>window', 'babel-loader',]
    }
  ]
}

```