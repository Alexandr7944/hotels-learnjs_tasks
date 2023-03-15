const login = '2';
const message = login == 'Сотрудник' ? 'Привет' :
  login == 'Директор' ? 'Здравствуйте' :
  login == '' ? 'Нет логина' : '';

console.log(message);