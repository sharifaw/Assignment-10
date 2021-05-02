const input = prompt("Enter your number");
let result = 0;
for (let count=0; count < input.length; count++) {
    result += input[count] ** 3;
}

if (result == input) {
    alert("Narcissistic Number");
}
else{
    alert("Not Narcissistic Number");
}
a