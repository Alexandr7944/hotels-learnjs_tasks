const tree = document.querySelector('.tree');

for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}


tree.addEventListener('click', event => {
  const span = event.target.closest('span');
  if (!span) return;
  const childList = event.target.parentNode.querySelector('ul');
  if (!childList) return;
  childList.hidden = !childList.hidden
})