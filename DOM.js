const changeText = document.getElementById('demo').innerText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime necessitatibus hic nisi unde quibusdam nostrum maiores optio quae.`
const changeBG = document.getElementById('demo').style.backgroundColor = "red";

let div = document.createElement('div')
div.append("Some text....")
document.body.appendChild(div)

let li = document.createElement('li')
li.append("Apple")
document.querySelector('#unorderList').appendChild(li)

document.getElementById('unorderList').removeChild(li);

let parent = document.getElementById('hello')
let lastChild = parent.lastElementChild;
parent.removeChild(lastChild);


let newAlt = 'Hello'

document.querySelector('img').setAttribute('alt', newAlt)


const button = document.getElementById('clickMe').addEventListener("click", () => {
    document.getElementById('demo').innerText = `Rakesh wes clicked!!!`
}) 

const changeBorder = document.getElementById('changeBorder').addEventListener("mouseover", () => {
    document.getElementById('changeBorder').style.borderColor = 'blue'
}) 







