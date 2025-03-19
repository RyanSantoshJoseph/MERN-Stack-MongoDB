let age = 25;
let isAdult = age >= 18;

let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

let n = 7;
let isEven = (n % 2 === 0) ? "Even" : "Odd";

let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

function square(num) {
    return num * num;
}

console.log(isAdult);
console.log(addition, multiplication, modulus);
console.log(isEven);
console.log(numbers);
console.log(square(4));