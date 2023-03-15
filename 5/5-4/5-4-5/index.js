// Подмассив наибольшей суммы

function getMaxSubSum(arr) {
  let sumSubArr = 0;
  let sumItemArr = 0;
  
  arr.forEach(item => {
    sumItemArr += item;
    sumSubArr = Math.max(sumSubArr, sumItemArr);
    sumItemArr = sumItemArr < 0 ? 0 : sumItemArr;
  })

  return sumSubArr;
}