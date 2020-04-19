import _ from 'lodash';
import $ from 'jquery';
import print from './print.js';

const dom = document.createElement('div');
const content = _.join(['Hello', 'World'], '~_~');
dom.innerHTML = content;
document.body.append(dom);

print('success---', content);

$('body').css('background', 'pink');

