// Тормозящий (throttling) декоратор

function throttle(func, ms) {
  
  let isThrottled = false;
  let args, savedThis;

  return function wrapper() {

    if (isThrottled) {
      args = arguments;
      savedThis = this;
      return;
    }

    func.call(this, ...arguments);
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
      if (args) {
        wrapper.call(savedThis, ...args);
        args = null;
      }
    }, ms);
  }
}