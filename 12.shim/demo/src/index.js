// import print from './print.js';

const dom = document.createElement('div');
// const content = _.join(['Hello', 'World'], '~_~');
const content = join(['Hello', 'World'], '#_#');
dom.innerHTML = content;
document.body.append(dom);

// print('success---', content);

$('body').css('background', 'pink');

console.log(this, this === window) // 使用imports-loader改变this 

