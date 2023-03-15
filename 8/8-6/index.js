// Странный instanceof

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

// т.к. у этих конструкторов общий prototype ответ будет true