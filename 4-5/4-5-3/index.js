// Создайте new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt('Введите число', 0);
  }
}