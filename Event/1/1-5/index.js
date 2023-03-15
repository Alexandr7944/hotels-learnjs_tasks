const close = document.querySelector('.close');
const open = document.querySelector('.open');
const list = document.querySelector('.list');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  close.classList.toggle('none');
  open.classList.toggle('none');
  list.classList.toggle('none');
})