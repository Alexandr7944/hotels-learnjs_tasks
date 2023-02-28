// Перебираемые ключи

let map = new Map();
map.set("name", "John");
let keys = [...map.keys()];

keys.push("more");

/**
 * map.values() – возвращает итерируемый объект по значениям,
 * но это не массив, поэтому его нужно преобразовать 
 */