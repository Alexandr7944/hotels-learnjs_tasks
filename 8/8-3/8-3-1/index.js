// Добавить функциям метод "f.defer(ms)"

function f() {
  alert("Hello!");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
}

f.defer(1000);
