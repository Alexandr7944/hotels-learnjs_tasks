const elem = document.querySelector('img');
center(elem);

function center(elem) {
  let parentWid = (elem.offsetParent.clientWidth - elem.clientWidth) / 2;
  let parentHei = (elem.offsetParent.clientHeight - elem.clientHeight) / 2;
  elem.style.left = parentWid + "px";
  elem.style.top = parentHei + "px";
}