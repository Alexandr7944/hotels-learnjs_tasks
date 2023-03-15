// Декоратор-шпион

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.call(this, ...args)
  }
  wrapper.calls = [];
  return wrapper;
}