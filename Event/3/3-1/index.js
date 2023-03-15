const container = document.querySelector('#container');

container.addEventListener('click', event => {
  const btn = event.target.closest('.remove-button');
  if (!btn) return;
  btn.closest('.pane').remove();
})