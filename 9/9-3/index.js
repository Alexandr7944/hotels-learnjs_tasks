// Класс расширяет объект?


class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true


class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit2 = new Rabbit("Кроль");

alert( rabbit2.hasOwnProperty('name') ); // true

// класс Rabbit2 не наследует методы родителя без super()
