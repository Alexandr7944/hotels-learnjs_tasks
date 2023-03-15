// Какой день месяца был много дней назад?

function getDateAgo(date, days) {
  const time = days * 24 * 60 * 60 * 1000;
  return new Date(date - time).getDate();
}