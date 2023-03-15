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
  list.next && printList(list.next);
  console.log(list.value);
}

printList(list);

function printListWhile(list) {
  const arr = [];
  let item = list;

  while (item) {
    arr.push(item.value);
    item = item.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printListWhile(list)
