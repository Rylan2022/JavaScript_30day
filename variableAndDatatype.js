//Acitivity-1
// var x = 5;
// console.log(x)
// let y = 20;
// console.log(y)

//Acitivity-2: constant Declaration

// const go = true
// console.log(go)

//Acitivity-3: Data Types
let x1 = 121;
    n1 = 12.52;
y1 = "JS challenge";
z1 = true;
console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z1);
console.log(typeof n1);

const myObj = {
  name: "Rakesh",
  age: 21,
  workingOn: "MERN stack",
  year: 2024,
};

console.log(typeof myObj);

const myArr = [1, 2, 2, 2];
const cars = ["Saab", "Volvo", "BMW"];
console.log(myArr);
console.log(typeof myArr);
console.log(typeof cars);

let xyz = Array.isArray(myArr);
console.log(xyz);

//Acitivity-4: Reassigning Variables

let render = 12
console.log(render)
render = 15
console.log(render)

//Acitivity-5: Reassigning Contant Variables

const reRander = 55;
console.log(reRander)
// reRander = 28; (TypeError: Assignment to constant variable.)
console.log(reRander)