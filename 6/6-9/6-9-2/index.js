// Задерживающий декоратор

function delay(f, ms) {
  function wrapper(...args) {
    return setTimeout(() => {
      f.call(this, ...args)
    }, ms)
  }
  return wrapper;
}