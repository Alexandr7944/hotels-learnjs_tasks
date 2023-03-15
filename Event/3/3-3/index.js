import Table from "./Table.js";

const grid = document.getElementById('grid');
const table = new Table(grid);

grid.addEventListener('click', event => {
  const type = event.target.dataset.type;
  if (!type) return;
  const index = event.target.cellIndex;
  grid.querySelector('tbody').append(...table[type](index));
})
