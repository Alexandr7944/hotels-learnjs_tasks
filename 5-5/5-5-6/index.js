// Создать расширяемый калькулятор

function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function(str) {
    let arr = str.split(' ');
    return this.method[arr[1]](+arr[0], +arr[2])
  }
  this.addMethod = function(name, func) {
    this.method[name] = func;
  }
}