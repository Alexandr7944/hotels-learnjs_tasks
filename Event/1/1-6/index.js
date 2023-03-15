const pane = document.querySelectorAll('.pane');

for (let item of pane) {
  const btn = document.createElement('button');
  btn.className = 'remove-button';
  btn.innerText = '[x]';
  btn.onclick = () => item.remove();
  item.append(btn);
}
