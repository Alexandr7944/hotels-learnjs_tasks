// Отфильтруйте анаграммы

function aclean(arr) {
  const map = new Map();
  arr.forEach(item => {
    const sorted = item
      .toLocaleLowerCase()
      .split('')
      .sort()
      .join('');
    map.set(sorted, item);
  })
  return [...map.values()];
}