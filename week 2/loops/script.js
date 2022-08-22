// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (i = 1; i <= 99; i+=2){
    console.log(i)
}

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.



let result = "";

for (i = 2; i <= 100; i+=2){
    result += i + " " + (100-i) + " "; 
} 
    
console.log(`${result}`);
    
     

// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)



while (true){

    let distance = prompt("Give distance (km)");

    if (distance == 0) {
        break;
    }
    let time = prompt("Give time (h)");
    let averageSpeed;

    averageSpeed = distance / time;
    console.log(`Average speed is ${averageSpeed} km per hour.`);
}



// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
let evenNumbersCount = 0;

for (let i = 0; i < 20; i++) {
    let number = prompt("Pls give number");
    if (number % 2 == 0) {
        evenNumbersCount++;
    } 
} 
console.log(`${evenNumbersCount} numbers were even`);

// Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

let numCounter = 0;
let sumNums = 0;
let numsAverage

while (true) {
    let number = prompt("Pls give number");
    if (number == 0) {
        break;
    }
sumNums = sumNums + parseFloat(number);
numCounter++;
}
numsAverage = sumNums / parseFloat(numCounter);
console.log(`Average of the numbers is ${numsAverage}`);

// Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let numsCounter = 0;
let numsSum = 0;
let numsAvg = 0;

while (true) {
    let number = prompt("Pls give 25 numbers");
    if (numsCounter >= 25) {
        break;
    }
    numsSum = numsSum + parseFloat(number);
    numsCounter++;
}
numsAvg = numsSum / parseFloat(numsCounter);
console.log(`Average of numbers is ${numsAvg}`);

let numsCounter = 0;
let numsSum = 0;
let numsAvg = 0;

for (let i = 0; i < 25; i++) {
    let number = prompt("Pls give 25 numbers");
    numsSum = numsSum + parseFloat(number);
    numsCounter++;
}
numsAvg = numsSum / parseFloat(numsCounter);
console.log(`Average of numbers is ${numsAvg}`);




// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

let avgOfNums = 0;
let numsCount = 0;
let sumOfNums = 0;

while (true) {

    let userInputNum = prompt("Give me a number?");
    let userAnswer = prompt("Do you want to continue giving numbers?(y/n)");
    sumOfNums = sumOfNums + parseFloat(userInputNum);
    numsCount++;    

    if (userAnswer === "n") {
        break; }
   } 

avgOfNums = sumOfNums / parseFloat(numsCount);
console.log(`Average of numbers is ${avgOfNums} `);

// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.
let smallestNum = Number.MAX_VALUE;
let userInput = prompt("How many numbers?");

for (let i = 0; i < userInput; i++) {
    let number = prompt("Give me number");
    if (number < smallestNum){
        smallestNum = number;
    }
}
console.log(`Smallest number is ${smallestNum}.`);

// Make a program that asks ten numbers and in the end prints out two biggest numbers.

let biggestNum = Number.MIN_VALUE; 
let biggestNum2 = Number.MIN_VALUE; 

for (let i = 0; i < 10; i++) {
    let num = prompt("Pls give number"); 
    if (num > biggestNum){
        biggestNum2 = biggestNum;
        biggestNum = num;
        }
        else if (num > biggestNum2){
            biggestNum2 = num;
            }
}
console.log(`Two of the biggest numbers are ${biggestNum} and ${biggestNum2}.`);

// Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

 let numsAverage = 0;
 let numsSum = 0;
 let smallestNum = Number.MAX_VALUE;
 let biggestNum = Number.MIN_VALUE;

 for (let i = 0; i < 10; i++) {
    let number = prompt("Pls give number!");
    numsSum = numsSum + parseFloat(number);
    if (number < smallestNum) {
        smallestNum = number;
    }
    if (number > biggestNum) {
        biggestNum = number;
    }
 }
numsAverage = numsSum / 10;
console.log(`Sum and average are ${numsSum} and ${numsAverage}.`);
console.log(`Smallest number is ${smallestNum}, biggest is ${biggestNum}.`)