// Ввод числового значения

function readNumber() {
  const number = prompt('Введите числовое значение');
  if (number === null || number === '') return null;
  if (isNaN(number)) return readNumber();
  return +number;
}