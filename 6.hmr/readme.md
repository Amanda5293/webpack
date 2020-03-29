# 模块热替换(Hot Module Replacement--HMR)

模块热替换会在程序运行过程中增加、修改、删除模块，而无需刷新整个页面。

启用模块热替换, 需要在devServer中将 *hot* 设置为 *true*, plugins中添加 *new webpack.HotModuleReplacementPlugin()*

hmr 修改样式表借助了 style-loader 进行处理。 当修改样式时可看到样式直接进行了替换而未刷新页面

在测试中可以发下，当更改js模块时虽然模块进行了替换，但是其他未更改的模块状态也回到了初始化状态；比如现有页面：
![图片](https://github.com/Amanda5293/webpack/blob/master/6.hmr/imgs/hmr1.PNG)

其中顶部文字区域属于模块head.js中；点击按钮时会在页面上显示点击的次数；如果此时更改了head.js中的innerHTML文字，会发现在页面未刷新的情况下顶部文字发生了改变，但是按钮下方的点击次数回到了初始状态:
![图片](https://github.com/Amanda5293/webpack/blob/master/6.hmr/imgs/hmr2.PNG)

如果需要保留状态，需要通过 *module.hot.accept* 来接受给定依赖模块的更新，触发一个回调来做出一些响应：
```
  import headerFn from './js/head.js';
  var root = document.getElementsByClassName('root')[0];
  headerFn(root);

  if(module.hot) {
    // 接受给定模块的更新，并触发回调
    module.hot.accept('./js/head.js', function() {
      console.log('Accepting the updated head module!');
      root.removeChild(document.getElementById('header'));
      headerFn(root);
    });
  }

```
对于一些框架，可以使用社区提供的相应loader进行，比如 react-hot-loader 、vue-loader

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)
