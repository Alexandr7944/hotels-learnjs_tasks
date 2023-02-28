// Отсортировать пользователей по возрасту

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}