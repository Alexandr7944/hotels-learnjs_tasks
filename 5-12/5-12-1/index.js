// Преобразуйте объект в JSON, а затем обратно в обычный объект

const user = {
  name: "Василий Иванович",
  age: 35
};

const userJSON = JSON.stringify(user);

const userObj = JSON.parse(userJSON);