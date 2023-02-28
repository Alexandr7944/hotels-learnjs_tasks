// Проверка на спам

function checkSpam(str) {
  const lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra')
    || lowerStr.includes('xxx');
}