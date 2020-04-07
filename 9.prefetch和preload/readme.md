[prefetch和preload](https://webpack.docschina.org/guides/code-splitting/#%E9%A2%84%E5%8F%96-%E9%A2%84%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97-prefetch-preload-module-)

webpack期望首次加载速度最优化，而不是利用缓存在下次加载时提高访问速度，而且缓存优化有限；应该通过提高代码利用率来进行优化; 比如交互代码可以放到单独的异步模块里，提高加载速度以及利用率

ctrl + shift + p ---> show coverage (代码使用率工具)
