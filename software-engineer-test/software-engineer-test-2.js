// Remove duplicated data from array
const arr = [1, 4, 2, 3, 5, 3, 2, 4];

function removeDuplicates(data) {
  let unique = [];
  data.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  unique.sort((a, b) => a - b);
  return unique;
}

console.log(removeDuplicates(arr));
