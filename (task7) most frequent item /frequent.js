let arr = ["apple", "orange", "banana","banana","orange", "lemon","orange"];
function findMostFrequent(arr) {
let max = 1;
let current = 0;
let item;
 for (let num1 = 0; num1 < arr.length; num1++) {
  for (let num2 = num1; num2 < arr.length; num2++) {
    if (arr[num1] == arr[num2]) {
        current++;
        if (current > max) {
          max = current;
          item = arr[num1];
        }
      }
    }
    current = 0;
  }
  console.log(item);
  return item;
  
}

findMostFrequent(arr); // orange

