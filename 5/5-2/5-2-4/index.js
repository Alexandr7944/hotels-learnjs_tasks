// Бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
  i += 0.2;
}
// Цикл бесконечный потому что 0.2 ('0.20000000000000001110')
// следовательно i всегда будет != 10