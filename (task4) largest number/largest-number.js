const numbers = [30,50,10,20,1,5,0,-4,-5,-40,-20,12,34,12,45,90,-30,20,-60,11];
 
let larger = numbers[0];
for (let count = 0; count < numbers.length; count++) {
    if (numbers[count] >= larger){
    larger=numbers[count];
    
}
}
alert(larger);
//let max = Math.max(...numbers); this works too 
//alert(max);

