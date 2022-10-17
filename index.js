var slides = document.querySelectorAll("section.slide.info");

for (var slide of slides) {
  var title = slide.querySelector("h3 a[href]");
  var code = slide.querySelector("canvas.code");
  if (title && code && title.href) {
    QRCode.toCanvas(code, title.href);
    console.log(title, code);
  }
}
