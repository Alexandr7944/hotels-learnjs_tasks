// Форматирование относительной даты

function formatDate(date) {
  const time = (new Date() - date) / 1000;
  
  const format = num => {
    return num > 10 ? num : '0' + num;
  }

  if (time < 1) {
    return 'прямо сейчас';
  } else if (time < 60) {
    return `${time} сек. назад`
  } else if (time < (60 * 60)) {
    return `${Math.round(time / 60)} мин. назад`
  } else {
    let year = date.getFullYear() + '';
    let month = format(date.getMonth() + 1);
    let day = format(date.getDate());
    let hours = format(date.getHours());
    let min = format(date.getMinutes());
    return `${day}.${month}.${year.slice(2)} ${hours}:${min}`
  }
}