const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const li = document.querySelectorAll('li');
let countMin = 3;

for (let i = 3; i < li.length; i++) {
  li[i].style.display = 'none';
}

btnNext.addEventListener('click', () => {
  li.forEach(item => item.style.display = 'none');
  countMin = countMin + 6 > li.length
    ? li.length - 3
    : countMin + 3;
  for (let i = countMin; i < countMin + 3; i++) {
    li[i].style.display = 'inline-block';
  }
})

btnPrev.addEventListener('click', () => {
  li.forEach(item => item.style.display = 'none');
  countMin = countMin - 3 < 0 ? 0 : countMin - 3;
  for (let i = countMin; i < countMin + 3; i++) {
    li[i].style.display = 'inline-block';
  }
});