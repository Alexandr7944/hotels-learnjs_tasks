const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');
thumbs.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  largeImg.src = link.href;
  largeImg.alt = link.firstChild.alt;
  event.preventDefault();
})