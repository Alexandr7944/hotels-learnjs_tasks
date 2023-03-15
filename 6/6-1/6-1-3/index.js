// Числа Фибоначчи

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function fibArr(n) {
  let num1 = 1;
  let num2 = 1;
  for (let i = 3; i <= n; i++) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}

console.log(fibArr(77));