var count = 0;

export default function(dom) {
  var btn = document.createElement('button');
  var text = document.createElement('div');
  btn.innerHTML = '点击';
  btn.onclick = function() {
    count++;
    text.innerHTML = '你点了我' + count + '次了';
  }
  dom.append(btn);
  dom.append(text);
}