function createCalendar(elem, year, month) {
  const table = document.createElement('table');
  table.innerHTML = `
  <tr>
    <th>пн</th>
    <th>вт</th>
    <th>ср</th>
    <th>чт</th>
    <th>пт</th>
    <th>сб</th>
    <th>вс</th>
  </tr>`
  const firstDay = new Date(year, month - 1).getDay() - 1;
  const days = new Date(year, month, 0).getDate();
  let counter = firstDay === 7 ? 1 : 1 - firstDay;

  for (let i = 0; i < 5; i++) {
    if (counter > days) break;
    const tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');
      td.textContent = (counter <= days && counter > 0)
        ? counter
        : '';
      tr.append(td);
      counter += 1;
    }
  }
  elem.append(table)
}

createCalendar(document.body, 2021, 2)