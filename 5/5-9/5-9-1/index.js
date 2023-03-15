// Сумма свойств объекта

function sumSalaries(salaries) {
  return Object.values(salaries)
    .reduce((acc, item) => acc + item, 0);
}
