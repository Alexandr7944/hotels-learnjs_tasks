// Сумма с произвольным количеством скобок

function sum(a) {
  let result = a;

  const sumArg = (b) => {
    result += b;
    return sumArg;
  }

  sumArg.toString = () => result;

  return sumArg;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(1)(2)(3)));
console.log(JSON.parse(sum(5)(-1)(2)));
console.log(JSON.parse(sum(6)(-1)(-2)(-3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));