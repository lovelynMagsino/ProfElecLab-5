let name = "Lovelyn";
let age = prompt("Enter your age:");
let isAdult;

age = parseInt(age);

let num1 = parseInt(prompt("Enter the first number:")); 
let num2 = parseInt(prompt("Enter the second number:")); 

let additionResult = num1 + num2;
let subtractionResult = num1 - num2;
let multiplicationResult = num1 * num2;
let divisionResult = num1 / num2;

if (age >= 18 && age <= 100) {
    console.log(name + ", you are now an adult. you are empowered to shape your destiny with passion and purpose.");
    isAdult = true;
} else {
    console.log(name + ", you are still young. Enjoy life!");
    isAdult = false;
}

console.log("Addition: " + additionResult);
console.log("Subtraction: " + subtractionResult);
console.log("Multiplication: " + multiplicationResult);
console.log("Division: " + divisionResult);
