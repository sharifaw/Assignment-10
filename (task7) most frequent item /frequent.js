let arr = ["apple", "orange", "banana","banana","orange", "lemon","orange"];
function findMostFrequent(arr) {
let max = 1;
let min = 0;
let item;
 for (let num1 = 0; num1 < arr.length; num1++) {
  for (let num2 = num1; num2 < arr.length; num2++) {
    if (arr[num1] == arr[num2]) {
        min++;
        if (min > max) {
          max = min;
          item = arr[num1];
        }
      }
    }
    min = 0;
  }
  console.log(item);
  return item;
  
}

findMostFrequent(arr); // orange
