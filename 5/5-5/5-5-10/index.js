// Перемешайте массив

function shuffle(array) {
  return array.sort(() => {
    return Math.round(Math.random() * 2) - 1;
  });
}