const numbers = [5,3,1,0,-3,-6,-12,-13,-30,-5,-6,7,8,9,10,11,12,13,14,15];
// let total = 0;
// let avg = 0;
// for (let sum= 0; sum<numbers.length; sum++) {
//     total += numbers[sum];
    
// }
// avg = total/numbers.length; 
alert(average(numbers));

function average() {
    let total = 0;
    let avg = 0;
    for (let sum= 0; sum<numbers.length; sum++) {
        total += numbers[sum];
        
    }
   return avg = total/numbers.length; 

}