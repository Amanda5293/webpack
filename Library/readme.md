# Libray 的打包
webpack除了打包应用程序，还可以打包 javascript库。在一些场景中，我们希望库本身对一些第三方内容不做打包，而交由库的使用方来处理，此时可以通过 *externals* 来进行配置。（ externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法,  而改成依赖于用户环境中的依赖）

```
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'libiary.js',
    library: 'utils',       // 暴露库名
    libraryTarget: 'umd'    // 兼容环境
  },
  // externals: ['lodash'],
  externals: {
    lodash: {
      commonjs: "lodash",    // 可以将 library 作为一个 CommonJS 模块访问
      commonjs2: "lodash",   // 和上面的类似，但导出的是 module.exports.default
      amd: 'lodash',         // 类似于 commonjs，但使用 AMD 模块系统
      root: '_'              // 可以通过一个全局变量访问 library(例如，通过 script 标签)
    }
  }

```

libraryTarget可选值有：
1. var: 作为一个全局变量，通过 script 标签来访问
2. this: 通过 this 访问
3. window: 在浏览器中通过 window 访问
4. umd: 将你的 library 暴露为所有的模块定义下都可运行的方式

如果设置了 library 但没有设置 libraryTarget，则 libraryTarget 默认指定为 var。 [更多内容](https://webpack.docschina.org/configuration/output/#output-library)