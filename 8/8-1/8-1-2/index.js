// Алгоритм поиска

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

// 1)
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

/**
 * 2) через head.glasses будет быстрее,
 * потому как она доступна по прямой ссылке
 */