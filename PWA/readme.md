# [PWA (渐进式网络应用程序：Progressive Web Application)](https://webpack.docschina.org/guides/progressive-web-application/)

pwa是一种类似于native app体验的web app。pwa可以做很多事，其中最重要的是，可以在离线时应用程序能够继续运行的功能。这是通过 Service Workers技术实现的。

要想让我们的应用程序添加离线体验，可以通过 google的 workbook。

1. 首先安装并配置workbox-webpack-plugin 

```
const WorkboxPlugin = require('workbox-webpack-plugin');

...
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new webpack.HashedModuleIdsPlugin(), 

    // 快速启用 ServiceWorkers
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
...

```

2. 注册 ServiceWorker 

```
// 注册 ServiceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError  => {
        console.log('SW registration failed: ', registrationError);
      })
  });
}

```

通过以上配置，停止 server并刷新页面，可以看到程序仍在运行(如果浏览器支持Service Worker)
