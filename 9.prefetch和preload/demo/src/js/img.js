export default function imgFn(dom, src) {
  var imgDom = new Image();
  imgDom.src = src;
  dom.append(imgDom);
}
