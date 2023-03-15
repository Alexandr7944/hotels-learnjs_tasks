let table = document.getElementById('bagua-table');
let area = null;

table.addEventListener('click', event => {
  item = event.target.closest('td');
  if (!item) return;
  if (area) return;
  addArea(item);

  const btnContainer = document.createElement('div');
  btnContainer.className = "btn-container";
  btnContainer.innerHTML = `
    <button class="ok">OK</button>
    <button class="cancel">CANCEL</button>
  `;
  area.insertAdjacentElement('afterend', btnContainer)

  const btnOk = btnContainer.querySelector('.ok');
  const btnCancel = btnContainer.querySelector('.cancel');
  
  btnOk.addEventListener('click', () => {
    console.log(area.value);
    item.innerHTML = area.value;
    stopEdit(btnContainer, item)
  })

  btnCancel.addEventListener('click', () => stopEdit(btnContainer, item))
})

function addArea(elem) {
  area = document.createElement('textarea');
  area.value = elem.innerHTML;
  area.style.width = elem.clientWidth + 'px';
  area.style.height = elem.clientHeight + 'px';

  elem.replaceWith(area);
  area.focus();
}

function stopEdit(btnContainer, item) {
  area.replaceWith(item);
  btnContainer.remove();
  area = null;
}