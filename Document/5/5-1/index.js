// Считаем потомков

const listLi = document.querySelectorAll('li');
for (let li of listLi) {
  let title = li.firstChild.data.trim();
  let count = li.querySelectorAll('li').length;

  alert(`${title}: ${count}`);
}