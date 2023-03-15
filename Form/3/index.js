let form = document.forms.calculator;
let moneyBefore = document.querySelector('#money-before');
let moneyAfter = document.querySelector('#money-after');
let heightAfter = document.querySelector('#height-after');
let initial = +form.money.value;
let interest = +form.interest.value / 100;
let years = +form.months.value / 12;
let result = Math.round(initial * (1 + interest) ** years);

moneyBefore.textContent = form.money.value;
moneyAfter.textContent =  result;
heightAfter.style.height = result / initial * 100 + 'px';

form.addEventListener('change', () => {
  initial = +form.money.value;
  interest = +form.interest.value / 100;
  years = +form.months.value / 12;
  result = Math.round(initial * (1 + interest) ** years);

  moneyBefore.textContent = form.money.value;
  result = Math.round(initial * (1 + interest) ** years);
  moneyAfter.textContent =  result;
  heightAfter.style.height = result / initial * 100 + 'px';
})
