// Случайное число от min до max

function random(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Math.floor(randomNumber);
}