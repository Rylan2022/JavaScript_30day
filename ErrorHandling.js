// function errorHandling(val) {
//     let x = val;
//   try {
//     if (val == "") throw "empty";
//     if (isNaN(val)) throw "not a number";
//     x = Number(val);
//     if (x < 10) throw "too low";
//     if (x > 100) throw "too high";
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log(`The input value : ${x}`);
//   }
// }

// errorHandling();

// function myDivision (num1, num2) {
//     let result = num1 / num2;
//     try {
//         if(num2 === 0) throw "denominator cantot be zero"
//     } catch(error) {
//         console.log(error)
//     } finally {
//         console.log(result)
//     }
// }

// myDivision(0, 10)

// function myScript(val) {
//   try {
//     if (isNaN(val)) throw "not number"
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("This block always execute");
//   }
// }

// myScript("k")

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("The promise is now rejected")
//     },2000)
// })

// promise.catch((error) => {
//     console.error(error)
// })

// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

// function theowError() {
//     throw new Error("This is intention error")
// }

// try{
//     theowError();
// } catch (error) {
//     console.log("Caugh an error: ", error.message)
// }

// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Denominator canot be zero.");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 2));
//   console.log(divide(10, 0));
// } catch (error) {
//   console.log("Caught an error:", error.message);
// }

// try {
//   console.log("Inside try block");
//   throw new Error("Error in try block");
// } catch (error) {
//   console.log("Caugh an error in catch block", error.message);
// } finally {
//   console.log("Finally block executed.");
// }

// Activity 3: Custom Error Objects

// class CustomeError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }

// function myCuctomError() {
//   throw new CustomeError("This is custom error message");
// }

// try {
//   myCuctomError();
// } catch (error) {
//   console.log(`${error.name} : ${error.message}`);
// }

//Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateInput(input) {
//   if (!input) {
//     throw new ValidationError("Input cannot be empty");
//   }
//   console.log("Input is valid.");
// }

// try {
//   validateInput("");
// } catch (error) {
//   console.log(`${error.name} : ${error.message}`);
// }

// Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.

// const randomPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   if (randomNumber > 0.5) {
//     resolve("Promise resolved!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// randomPromise
//   .then((message) => console.log(message))
//   .catch((error) => console.error("Caught an error:", error));


// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// async function handleRendomPromise() {
//     try {
//         const message = await randomPromise;
//         console.log(message);
//     } catch (error) {
//         console.log("Caught an error:", error)
//     }
// }

// handleRendomPromise()


// Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// fetch('https://invalid-url.com')
// .then(response => response)
// .catch(error => console.log("Fetch error 101:", error))

// async function fetchData() {
//     try {
//         const response = await fetch('https://invalid-url.com');
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("Fetch error 101:", error)
//     }
// }

// fetchData();