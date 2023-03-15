const view = document.querySelector('#view');
let edit = null;

view.addEventListener('click', (e) => {
  edit = document.createElement('textarea');
  edit.className = 'edit';
  edit.value = view.innerHTML;
  view.replaceWith(edit);
  edit.focus();

  edit.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') edit.blur()
  })

  edit.addEventListener('blur', () => {
    view.innerHTML = edit.value;
    edit.replaceWith(view);
  });
});

