// Последнее значение цикла

let i = 3;

while (i) {
  alert( i-- );
}

/**
 * 1, когда в условии будет 1 произойдет последний вызов alert,
 * после чего i станет 0, а это уже false.
 */