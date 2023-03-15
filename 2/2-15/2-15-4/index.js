// Функция pow(x,n)

const num = +prompt('Введите число');
const degree = +prompt('Сообщите степень');
pow(num, degree);

function pow(x, n) {
  return n > 0
    ? alert(x ** n)
    : alert('Степень должна быть больше нуля')
}
