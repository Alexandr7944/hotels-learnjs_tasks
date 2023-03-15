// Сколько сегодня прошло секунд?

function getSecondsToday() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return Math.round((date - new Date(year, month, day)) / 1000);
}