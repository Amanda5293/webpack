# entry和output

## 入口和上下文 (entry和context)
entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。

context: 基础目录,绝对路径

entry: 起点或是应用程序的起点入口。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。 如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个键(key)会是 chunk 的名称，该值描述了 chunk 的入口起点。

1. 单入口

以下几种方式都只会导向到一个chunk里。值为数组时表示想多个依赖一起注入，并将依赖导出到一个bundle
```
  entry: {
    main: './src/index.js'
  }

  entry: './src/index.js'

  entry: ['./src/index.js', './src/utils.js']

```
![图片](https://github.com/Amanda5293/webpack/blob/master/2.entry%E5%92%8Coutput/imgs/single-entry.PNG)

2. 对象语法

每个键名作为chunk名
```
  entry: {
    main: './src/index.js',
    utils: './src/utils.js'
  }

```
![图片](https://github.com/Amanda5293/webpack/blob/master/2.entry%E5%92%8Coutput/imgs/obj-entry.PNG)

## output

配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。

path：输出目录(绝对路径)

filename: 每个输出 bundle 的名称, 文件将位于path指定目录下。可以是一个静态名称比如bundle.js，也可以使用模板字符串的方式： [name] (模块名称) [id](模块标识符) [hash](模块标识符的hash) [chunkhash](chunk 内容的 hash)
```
基本输出配置:
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
```

[入口和上下文](https://www.webpackjs.com/configuration/entry-context/)

[输出配置](https://www.webpackjs.com/configuration/output/)
