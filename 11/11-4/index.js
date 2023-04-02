// Ошибка в setTimeout

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Promise не сможет обработать ошибку, потому что она осинхронная