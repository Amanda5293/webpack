import imgFn from './js/img.js';
import headerFn from './js/head.js';
import btnFn from './js/btn.js';
import utilsFn from './js/utils.js';
import img from './flower.jpg';
import './style/index.css';
import './style/head.less';
import _ from 'lodash';

//动态import
// import(/* webpackChunkName: "lodash" */'lodash')
//   .then(({ default: _ }) => {
//     console.log('difference', _.difference([3, 2, 1], [4, 2]));
//   });

var root = document.getElementsByClassName('root')[0];

imgFn(root, img);
headerFn(root);
btnFn(root);
utilsFn();

console.log('running');

console.log(_.difference([3, 2, 1], [4, 2]));

if(module.hot) {
  // 接受给定模块的更新，并触发回调
  module.hot.accept('./js/head.js', function() {
    console.log('Accepting the updated head module!');
    root.removeChild(document.getElementById('header'));
    headerFn(root);
  });
}
