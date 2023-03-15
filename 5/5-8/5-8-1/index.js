// Хранение отметок "не прочитано"

const messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const weakSet = new WeakSet();

readMessage(messages[0]);
readMessage(messages[1]);

function readMessage(messag) {
  alert(`${messag.from}: ${messag.text}`);
  weakSet.add(messag);
}
