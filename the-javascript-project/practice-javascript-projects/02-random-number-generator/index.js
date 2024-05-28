const myButton = document.getElementById("mybtn");
const myLabel1 = document.getElementById("mylabel1");
const myLabel2 = document.getElementById("mylabel2");
const myLabel3 = document.getElementById("mylabel3");

const min = 1;
const max = 6;

let random1, random2, random3;

myButton.onclick = function() {
    
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;

    myLabel1.textContent = random1;
    myLabel2.textContent = random2;
    myLabel3.textContent = random3;
}