export default function headerFn(dom) {
  var header = document.createElement('div');
  header.innerHTML = 'HELLO WORLD';
  header.setAttribute('id', 'header');
  header.className = 'iconfont icon-mianhua';
  dom.prepend(header);
}