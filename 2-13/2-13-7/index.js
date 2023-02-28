// Вывести простые числа

function num(n) {
  let sqrtN = Math.floor(Math.sqrt(n));
  let prime = true;
  for(let i = 2; i <= sqrtN; i++){
    if(n % i === 0) {
      prime = false;
      break;
    }
  }
  return prime
}

function primeNumbers(number) {
  const cache = [];
  if (number === 1) return number;
  for (i = 2; i < number; i++) {
    if (num(i)) cache.push(i)
  }
  return cache.join(', ');
}

console.log(primeNumbers(100));
