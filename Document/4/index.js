// Поиск элементов

/**
 * Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
 */

const table = document.querySelector('#age-table');
const label = table.querySelectorAll('label');
const firstTD = table.querySelector('td');
const form = document.forms.search;
const firstInput = form.querySelector('input');

const inputs = form.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];
