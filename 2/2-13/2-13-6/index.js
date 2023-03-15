// Повторять цикл, пока ввод неверен

while (true) {
  let question = prompt('Введите число больше 100');

  if (question || question > 100) break;
  if (question <= 100) continue;
}
