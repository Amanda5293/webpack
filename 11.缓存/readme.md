# [缓存](https://webpack.docschina.org/guides/caching/)

当我们将打包后的内容部署到服务器，一般client就可以访问服务器上的资源，而获取资源是比较耗时的，故而浏览器采用了缓存技术，提升网站加载速度。然而当我们重新部署时如果未改变文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。

### [contenthash] 根据资源内容创建出唯一 hash (不能和热更新同时使用)
  当资源内容发生变化时，\[contenthash\] 也会发生变化; 在output中配置：

```
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build/assets'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  }

```

### 提取引导模板
  配置了contenthash后，如果使用了低版本的webpack打包会发现打包后的文件名发生了变化(源文件未改变)，这是因为文件中包含了入口文件和其他文件之间的引导模块内容(特别是runtime和manifest); 此时可以使用 **optimization.runtimeChunk: 'single'** 设置将 runtime 代码拆分为一个单独的 chunk，这样就不会出现上述问题。

### 模块标识符

如果在项目中添加并引入一个新的本地模块，然后再重新构建，期望的是main文件的hash发生变化，然而是都发生了改变。这是因为每个 module.id 会默认地基于解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变：
1. main bundle 会随着自身的新增内容的修改，而发生变化
2. vendor bundle 会随着自身的 module.id 的变化，而发生变化
3. manifest bundle 会因为现在包含一个新模块的引用，而发生变化

第二点是可以优化的，可以使用 [HashedModuleIdsPlugin](https://webpack.docschina.org/plugins/hashed-module-ids-plugin)

```
  const webpack = require('webpack');

  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../build/assets'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js'
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin() //该插件会根据模块的相对路径生成一个四位数的hash作为模块id;
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all'
      }
    }
  }

```
这样配置后，不管是移除还是添加引入本地模块都不会影响verdor
