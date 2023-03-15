// Хранение времени прочтения

const messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const weakMap = new WeakMap();

readMessage(messages[0]);
readMessage(messages[1]);

function readMessage(messag) {
  alert(`${messag.from}: ${messag.text}`);
  weakMap.set(messag, new Date().toLocaleString());
}
