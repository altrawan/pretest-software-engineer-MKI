// Find missing number from the list
const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const findMissing = (arr) => {
  let missArr = [];
  let l = Math.max(...arr);
  let startsWithZero = arr.indexOf(0) > -1 ? 0 : 1;
  for (i = startsWithZero; i < l; i++) {
    if (arr.indexOf(i) < 0) {
      missArr.push(i);
    }
  }
  return missArr;
};

console.log(findMissing(arr));
