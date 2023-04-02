// Создайте новый объект с помощью уже существующего

function Obj() {
  this.name = 'Obj';
}

const obj = new Obj();

let obj2 = new obj.constructor();