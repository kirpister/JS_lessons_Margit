
const numbers = () => {

let num1 = prompt("Give me a number");
let num2 = prompt("Give me a number");
let num3 = prompt("Give me a number");

let sum, multiply;

if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    multiply = num1 * num2 * num3;
    sum = num1 + num2 + num3;
    console.log("Sum is:", sum, "And multiplication is:", multiply);
} else if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    if (num1 <= 0 && num2 <=  0 &&  num3 <= 0) {
        console.log("All numbers are negative"); 
    } else {
        sum = num1 + num2 + num3;
        console.log("Sum is:", sum);
    }
}
};




