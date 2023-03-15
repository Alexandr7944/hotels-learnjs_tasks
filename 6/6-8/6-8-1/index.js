// Вывод каждую секунду

function printNumbersInterval(from, to) {
  let count = from;
  const intervalId = setInterval(() => {
    console.log(count);
    count++;
    if (count > to) clearInterval(intervalId);
  }, 1000)
}

function printNumbersTimeout(from, to) {
  let count = from;
  setTimeout(function run() {
    console.log(count);
    count++;
    if (count <= to) setTimeout(run, 1000);
  }, 1000);
}