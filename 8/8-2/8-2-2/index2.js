// Создайте новый объект с помощью уже существующего

function Obj() {
  this.name = 'Obj';
}

Obj.prototype = {};

const obj = new Obj(); // { name: 'Obj' }

let obj2 = new obj.constructor(); // {}