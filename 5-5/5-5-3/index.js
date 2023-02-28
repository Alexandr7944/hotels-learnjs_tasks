// Фильтрация по диапазону "на месте"

function filterRangeInPlace(arr, a, b) {
  const arrIndex = [];

  arr.forEach((item, index) => {
    if (item < a || item > b) 
    arrIndex.push(index);
  });

  arrIndex.reverse().forEach(item => {
    arr.splice(item, 1)
  })
}