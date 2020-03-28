import imgFn from './js/img.js';
import headerFn from './js/head.js';
import img from './flower.jpg';
import './style/index.css';
import './style/head.less';

var root = document.getElementsByClassName('root')[0];

imgFn(root, img);
headerFn(root);