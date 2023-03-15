// Установка и уменьшение значения счётчика

function makeCounter() {

  counter.count = 0;

  function counter() {
    return counter.count++;
  };

  counter.set = (value) => {
    counter.count = value;
  }

  counter.decrease = () => counter.count--;

  return counter;
}

function makeCounter2() {
  
  let count = 0;

  function counter() {
    return count++;
  };

  counter.set = (value) => {
    count = value;
  }

  counter.decrease = () => count--;

  return counter;
}