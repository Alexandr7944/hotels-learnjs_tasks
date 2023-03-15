// Сортировать по полю

const byField = method => {
  return (a, b) => a[method] > b[method] ? 1 : -1;
}