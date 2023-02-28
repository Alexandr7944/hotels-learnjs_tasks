// Получить средний возраст

function getAverageAge(users) {
  const sumAge = users.reduce((acc, user) => {
    acc += user.age;
    return acc;
  }, 0);
  return sumAge / users.length;
}