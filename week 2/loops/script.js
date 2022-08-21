// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

for (i = 1; i <= 99; i+=2){
    console.log(i)
}

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

for (i = 2; i <= 100; i+=2){
    console.log(i)
    console.log(100-i)
} 

//for loopin alkuun muutuja johon tallennetaan merkkijono

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

// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

// Make a program that asks ten numbers and in the end prints out two biggest numbers.

// Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.