const Button = document
  .querySelector("#changeText")
  .addEventListener("click", () => {
    document.querySelector(
      "#demo"
    ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste magnam maiores illo deleniti! Dolore ipsa molestias repellat maiores veniam omnis illo.`;
  });

const img = document.querySelector("#myImg");

function toggleImage() {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

img.addEventListener("dblclick", toggleImage);

const changeBg = document.querySelector(".changeBg");
function changeMyBg() {
  if (changeBg.style.backgroundColor === "red") {
    changeBg.style.backgroundColor = "blue";
  } else {
    changeBg.style.backgroundColor = "red";
  }
}

changeBg.addEventListener("mouseover", changeMyBg);
changeBg.addEventListener("mouseout", () => {
  changeBg.style.backgroundColor = "yellow";
});

// const input = document.getElementById('myInput');
// input.addEventListener("keydown", (e) => {
//     console.log(e)
// })

// input.addEventListener('keyup', (e) => {
//     document.querySelector('#demo').innerHTML = e.code;
// })

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const mySelect = document.querySelector("#mySelect");
const displayParagraph = document.querySelector("#displayParagraph");

mySelect.addEventListener("change", () => {
  const SelectValue = mySelect.value;
  displayParagraph.innerHTML = `Selected Option :  ${SelectValue}`;
});

//Event Deligation

const EventDeligation = document.querySelector("#myList");

EventDeligation.addEventListener("click", (event) => {
  if (event.target && event.target.nodeName === "LI") {
    console.log(event.target.textContent);
  }
});

const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
  if (e.target.textContent === "Add Child") {
    const newButton = document.createElement("button");
    newButton.textContent = `Child ${parent.querySelectorAll("button").length}`;
    parent.appendChild(newButton);
  }
});
