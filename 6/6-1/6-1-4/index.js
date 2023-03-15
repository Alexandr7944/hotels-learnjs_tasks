// Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  console.log(list.value);
  list.next && printList(list.next)
}

printList(list);

function printListWhile(list) {
  let item = list;
  while (item) {
    console.log(item.value);
    item = item.next;
  }
}

printListWhile(list)

// Как лучше: с рекурсией или без?
// Рекурсивный метод нагляднее