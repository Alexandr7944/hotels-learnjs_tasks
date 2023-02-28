// День недели в европейской нумерации

function getLocalDay(date) {
  const day = date.getDay()
  if (day === 0) return 7;
  return day;
}