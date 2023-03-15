//Дочерние элементы в DOM

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

document.body.firstElementChild // <div>
document.body.lastElementChild // ul
document.body.lastElementChild.lastElementChild // второй <li> (с именем Пит)?