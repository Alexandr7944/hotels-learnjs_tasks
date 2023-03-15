// Сумма введённых чисел

function sumInput() {
  const arr = [];
  return readNumber()
  
  function readNumber() {
    const number = prompt('Введите числовое значение');
    if (number === null
      || number === ''
      || isNaN(number)) return showNumber();
    arr.push(+number);
    return readNumber();
  }

  function showNumber() {
    return alert(arr.reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0))
  }
}
