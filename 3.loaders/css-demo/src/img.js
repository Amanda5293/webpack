export default function imgFn(src) {
  var imgDom = new Image();
  imgDom.src = src;
  document.body.append(imgDom);
}
