// Добавьте функциям декорирующий метод "defer()"

function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms) {
  return (...arg) => setTimeout(() => this(...arg), ms)
}

f.defer(1000)(1, 2);