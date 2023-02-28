// Операции с массивами

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
halfArray(styles, 'Классика')
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

function halfArray(arr, text) {
  return arr[Math.round(arr.length / 2) - 1] = text;
}