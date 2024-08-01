// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let str1 = "JavaScript is a programming language. JavaScript can be used for web development."
let regex1 = /JavaScript/g;
let matches1 = str1.match(regex1);
// console.log(matches1)

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

let str2 = "There are 3 apples, 7 oranges, and 2 bananas."
let regex2 = /\d+/g;
let matches2 = str2.match(regex2);
// console.log(matches2);

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

let str3 = "The Cat Sat On The Mat.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
// console.log(matches3);


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

let str4 = "My phone number is 123-456-7890."
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
// console.log(matches4);

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

let str5 = "Call me at (123) 456-7890.";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log(matches5); // ["(123) 456-7890", "123", "456", "7890"]
