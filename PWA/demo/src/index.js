import _ from 'lodash';
import $ from 'jquery';
import print from './print.js';

const dom = document.createElement('div');
const content = _.join(['Hello', 'World'], '~_~');
dom.innerHTML = content;
document.body.append(dom);

print('success---', content);

$('body').css('background', 'pink');

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
