// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {
  this.read = () => {
    this.a = +prompt('Введите первое число', 0);
    this.b = +prompt('Введите второе число', 0);
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );