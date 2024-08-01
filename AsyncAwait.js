//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// const task1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Task 1: Promise resolve after 2 sceonds");
//     }, 2000)
// });

// task1.then(message => {
//     console.log(message)
// })

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// task2 = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         reject("Task 2: Proomise reject")
//     },2000);
// });

// task2.catch(error => {
//     console.error(error);
// });

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// const fetchData1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Data 1 fetched");
//   }, 1000);
// });

// const fetchData2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Data 2 fetched");
//   }, 2000);
// });

// const fetchData3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Data 3 fetched");
//   }, 3000);
// });

// fetchData1.then(data => {
//     console.log(data);
//     return fetchData2
// }).then(data => {
//     console.log(data);
//     return fetchData3
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error(error);
// });

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// async function task4() {
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task 4: Promise resolved")
//         }, 2000)
//     });

//     const result = await promise;
//     console.log(result)
// }

// task4();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// async function task5() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Task 5: Promise rejected");
//     }, 2000);
//   });

//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// task5()
