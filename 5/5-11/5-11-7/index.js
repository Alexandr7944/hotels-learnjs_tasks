// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return Math.round((new Date(year, month, day + 1) - date) / 1000);
}