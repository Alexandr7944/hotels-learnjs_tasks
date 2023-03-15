// Выведите список потомков в дереве

const list = document.querySelectorAll('li');
for (let li of list) {
  const count = li.querySelectorAll('li').length;
  if (!count) continue;
  li.firstChild.data += ` [${count}]`;
}