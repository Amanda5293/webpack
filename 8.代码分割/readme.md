# 代码分割

代码分割在我们做项目的时候特别重要，尤其是在引入了一些第三方库、插件的情况下；如果不做分割，所有的代码都会打包到一个js文件中包括引入的插件代码，增加了包的大小影响页面加载速度，特别是更新了业务代码后，用户请求页面时会全部重新获取，包括第三方插件，但是往往这些在未更改的情况下是不需要重新获取的，可以直接从浏览器缓存中拿，这就影响了页面重新加载的速度，所以代码分割就尤为重要。

## 动态引入的模块会自动分离到一个chunk中

调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中
```
import(/* webpackChunkName: "lodash" */'lodash') 

/* webpackChunkName: "lodash" */  magic comment 的方式可以指定chunk名
```

## SplitChunksPlugin

webpack 会基于如下原则自动分割代码：

1. 公用代码块或来自 node_modules 文件夹的组件模块
2. 打包的代码块大小超过 30k（最小化压缩之前）
3. 按需加载代码块时，同时发送的请求最大数量不应该超过 5
4. 页面初始化时，同时发送的请求最大数量不应该超过 3

当试图完成后两项时，总会生成较大体积的代码块

默认的配置：
```
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true  // 如果当前块包含一个已经从主打包文件中分离出来的模块，那么它将被重复使用而不是新生成模块
        }
      }
    }
  }
};

```

#### chunks: 用于指定哪些块将被优化。可以为字符串或者函数；字符串值可以为 all async(异步) initial(同步)

#### minSize: 块的最小体积

#### maxSize: 块的最大体积，当超过这个数值时，块会继续被拆分（分割出的块需大于minSize)

#### minChunks: 代码拆分前的最小公共块数量

#### maxAsyncRequests: 按需加载模块时所允许的最大请求数

#### maxInitialRequests: 入口点所允许的最大请求数

#### name: 分割块的名称；如果和entry里的入口点相同则entry里的会被删除；也可以为boolean

#### cacheGroups: 当模块匹配了上面的一些规则后会继续配置缓存组规则，模块会匹配缓存组里的组别配置，匹配成功后放到改组里，一直等到全部匹配完成后统一打包(如果匹配上了多个组则会按照优先级高的进行匹配)



[代码分离](https://webpack.docschina.org/guides/code-splitting/)

[SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin/)