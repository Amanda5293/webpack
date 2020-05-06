# Eslint在webpack中的配置

eslint用于帮助团队使用统一的代码格式规范工具。在webpack中使用Eslint首先需要安装
```
  npm install eslint -D
```
然后进行eslint配置初始化，产生配置文件，并配合[官网](https://eslint.bootcss.com/)配置更多规范
``` 
  npx eslint --init

```
还可以在文件**.eslintingore*中对eslint忽略的文件进行配置

对文件进行eslint：
```
  npx eslint ./src/index.js

  npx eslint ./src/**
```

[eslint-loader](https://webpack.docschina.org/loaders/eslint-loader/) 可以协助我们在打包时直接进行代码的eslint