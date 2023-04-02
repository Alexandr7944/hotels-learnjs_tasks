// Вызовите async–функцию из "обычной"

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

async function f() {
  const res = await wait();
  alert(res)
}

f();