// Activity 01: Function Declaration

// function checkEvenOdd(num) {
//   return (num % 2 === 0)
// }

// let result = checkEvenOdd(5)
// if(result == true) {
//     console.log("Even")
// } else if (result == false) {
//     console.log("Odd")
// }

// function squerNumber (num) {
//     return Math.sqrt(num)
// }

// let result = squerNumber(8)
// console.log(result)

// Activity 02: Function Expression

// function maxNumber(num1, num2) {
//     let result = (num1> num2);
//     if(result == true) {
//         console.log(`${num1} is bigger`)
//     } else {
//         console.log(`${num2} is bigger`)
//     }

//     return result;

// }

// let result = maxNumber(124, 18);

// function addSting(sting1, sting2) {
//     return sting1.concat(sting2);
// }

// let result = addSting("Rakesh", "Molla")
// console.log(result)

// Activity 03: Arrow function

// const sum = (n1, n2) => n1 + n2;
// let result = sum(12, 12)
// console.log(result)

// const checkString = (string, char) => {
//   for (let i = 0; i <= string.length; i++) {
//     if (string[i] === char) return true;
//   }
// };

// let result = checkString("RakeshMolla", "M");
// console.log(result);

// Activity 04: Function Parameters and Default values
// const multiply = (num1, num2=12) => num1 * num2;
// let result = multiply(8)
// console.log(result)

// const gretting = (Pname, age=18) =>  {
//     return `Hello ${Pname} Good Moring
//     you are now your ${age}`
// }

// let result = gretting("Rakesh")
// console.log(result)

// Activity 05: Higher-Order Functions

// const repeatFunction = (func, times) => {
//     for(let i = 0; i <= times; i++) {
//         func();
//     }
// };

// const sayNameste = () => {
//     console.log("Nameste!!");
// };

// repeatFunction(sayNameste, 5);

// const applyFunctions = (func1, func2, value) => {
//     const firstResult = func1(value);
//     const finalResult = func2(firstResult);
//     return finalResult;
// };

// const double = (x) => x * 2;
// const square = (x) => x * x;

// const result = applyFunctions(double, square, 5);
// console.log(result);

/* A higher-order function is a function that does at least one of the following:

Takes one or more functions as arguments.

Returns a function as its result.

Higher-order functions are a powerful concept in functional programming and are used extensively in JavaScript. They allow you to abstract and manipulate functions in a more flexible and reusable way.*/
