// Фильтрация с помощью функции

function inBetween(a, b) {
  return (item) => item >= a && item <= b;
}

function inArray(arr) {
  return (item) => arr.includes(item)
}