// Свойство функции после bind

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?

/**
 * выведет undefined, потому что sayHi.test был
 * указан в другом контексте
 */