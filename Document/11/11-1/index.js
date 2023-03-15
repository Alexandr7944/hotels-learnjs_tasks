// Найдите координаты точек относительно окна браузера

const field = document.querySelector('#field');
const pos = field.getBoundingClientRect();

const pos1 = [pos.left, pos.top];
const pos2 = [pos.right, pos.bottom];
const pos3 = [pos.left + field.clientLeft, pos.top + field.clientTop];
const pos4 = [
  pos.left + field.clientLeft + field.clientWidth,
  pos.top + field.clientTop + field.clientHeight
  ];