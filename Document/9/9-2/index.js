// Узнать ширину полосы прокрутки

function widthScroll(elem) {
  return elem.offsetWidth - elem.clientWidth - elem.clientLeft * 2
}