//? LocalStorage

// Task 1: Save a string value to localStorage and retrieve it

localStorage.setItem("myString", "Hello, world!");

let retriveString = localStorage.getItem("myString");

const h1 = document.getElementById("demo");
// h1.innerText = retriveString;

let myObj = {
  name: "Rakesh",
  age: 21,
  city: "kalkata",
};

localStorage.setItem("myObj", JSON.stringify(myObj));

let data = JSON.parse(localStorage.getItem("myObj"));
// h1.innerText = data;
// console.log(data)
// document.getElementById("userForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   localStorage.setItem("userData", JSON.stringify({ name, email }));

//   const userdata = JSON.parse(localStorage.getItem("userData"));
//   console.log(userdata);
// });

// console.log(localStorage.getItem("userdata"));

//? ScesionalStorage

// sessionStorage.setItem("mySessionString", "Session Hello!");

// let mySessionData = sessionStorage.getItem("mySessionString");
// console.log(mySessionData);

let SessionObj = {
  city: "New York",
  country: "USA",
};

sessionStorage.setItem("sessionData", JSON.stringify(SessionObj));

let mySessionData = JSON.parse(sessionStorage.getItem("sessionData"));
// console.log(mySessionData)

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  sessionStorage.setItem("sessionUser", JSON.stringify({ name, email }));

  const mydata2 = JSON.parse(sessionStorage.getItem("sessionUser"));

  console.log(mydata2)
});

function Storage1 (key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

Storage1('commonKey', 'common Value');

console.log(localStorage.getItem('commonKey'));
console.log(sessionStorage.getItem('commonKey'));


function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
}

clearStorage();

console.log(localStorage.length);
console.log(sessionStorage.length);