// Функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // John

// 'user' внутри функции нет, значит  функция будет искать выше
