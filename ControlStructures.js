//Activity-01 : If-Else Statements

// const num = 12;

// if (num < 0) {
//   console.log("Negative Number");
// } else if (num === 0) {
//   console.log("Zero number");
// } else {
//   console.log("Positive Number");
// }

// const age = 18;
// if (age >= 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not Eligible for vote");
// }

//Activity-02 : Nested If-Else Statements

// const num1 = 120;
// const num2 = 220;
// const num3 = 280;

// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(`Num:1 is bigger ${num1}`);
//   } else {
//     console.log(`Num:3 is bigger ${num3}`);
//   }
// } else if (num2 > num1) {
//   if (num2 > num3) {
//     console.log(`Num:2 is bigger ${num2}`);
//   } else {
//     console.log(`Num:3 is bigger ${num3}`);
//   }
// }

//Activity-03: switch case

// const day = 5;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Twesday");
//     break;
//   case 3:
//     console.log("Webnessday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Not Match");
//     break;
// }

// const Grade = 70;
// switch (Grade) {
//   case 80:
//     console.log("A");
//     break;
//   case 60:
//     console.log("B");
//     break;
//   case 40:
//     console.log("C");
//     break;
//   case 30:
//     console.log("D");
//     break;
//   case 25:
//     console.log("E");
//     break;
//   default:
//     console.log("No Match");
//     break;
// }

//Acetivity-04: Ternary Operator

// const num = 2;
// let Ternary = num % 2 == 0 ? "Even Num" : "Odd Num";
// console.log(Ternary)

//Acetivity-05: Combinding Conditions

// const year = 1908;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not an Leap year");
// }

//?OR

// const year = 1904;
// if (year % 400 === 0) {
//   console.log("Leap Year");
// } else if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     console.log("Not a leap Year");
//   } else {
//     console.log("leap Year");
//   }
// } else {
//   console.log("Not a leap Year");
// }
