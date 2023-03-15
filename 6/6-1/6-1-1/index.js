// Вычислить сумму чисел до данного

function sumTo1(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function sumTo2(num) {
  return num === 1 ? num : num + sumTo2(num - 1)
}

function sumTo3(num) {
  return num * (num + 1) / 2;
}

//Какой вариант решения самый быстрый? Самый медленный? Почему?
/**
 * Самый быстрый расчет по формуле O(1)
 * Цикл и рекурсия это O(n), но так как в цикле нет проверок,
 * то он будет быстрее рекурсии.
 */

// Можно ли при помощи рекурсии посчитать sumTo(100000)
// Будет превышен размер стека


console.log(sumTo1(100)); //5050
console.log(sumTo2(100)); //5050
console.log(sumTo3(100)); //5050