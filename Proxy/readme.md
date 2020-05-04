### 可以在devServer中设置[proxy](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)进行请求转发

```
  proxy: {
    '/api': 'http://other-server.example.com'  // 实际想要请求的地址
  }

  proxy: {
    '/api': {
      target: 'https://other-server.example.com',  // https
      secure: false
    }
  }

```

### devServer中设置[historyApiFallback](https://webpack.docschina.org/configuration/dev-server/#devserver-historyapifallback) 可以解决单页面应用路由问题