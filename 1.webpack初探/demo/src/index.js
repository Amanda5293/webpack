function domComponent(type, html) {
  var dom = document.createElement(type);
  dom.innerHTML = html;
  document.body.append(dom);
}

domComponent('div', 'Hello World');