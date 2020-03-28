export default function headerFn() {
  var header = document.createElement('div');
  header.innerHTML = 'HELLO WORLD  <a href="#header">link</a>';
  header.setAttribute('id', 'header');
  header.className = 'iconfont icon-mianhua';
  document.body.prepend(header);
}