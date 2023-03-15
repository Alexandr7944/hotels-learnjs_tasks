// Декоратор debounce

function debounce(f, ms) {
  let timerId = null;
  return (...args) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      timerId = null;
      f.call(this, ...args)
    }, ms)
  }
}