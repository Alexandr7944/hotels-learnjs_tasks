const assert = require('assert');
const { pow } = require('../index.js');

describe('pow()', function () {
  
  it("Возводит x в степень 1", function() {
    assert.equal( pow(5, 1), 5 );
  });

  it("Возводит x в степень 2", function() {
    assert.equal( pow(5, 2), 25 );
  });

  it("Возводит x в степень 3", function() {
    assert.equal( pow(5, 3), 125 );
  });
});

/**
 * Ошибка в том, что невозможно узнать при каких 
 * значениях ломается функция, в любом случае сообщение 
 * будет: "Возводит x в степень n".
 */

// it("Возводит x в степень n", function() {
//   let x = 5;

//   let result = x;
//   assert.equal(pow(x, 1), result);

//   result *= x;
//   assert.equal(pow(x, 2), result);

//   result *= x;
//   assert.equal(pow(x, 3), result);
// });