// Трансформировать в объекты

function arrName(arr) {
  return arr.map(item => {
    return {
      id: item.id,
      fullName: `${item.name} ${item.surname}`,
    }
  });
}