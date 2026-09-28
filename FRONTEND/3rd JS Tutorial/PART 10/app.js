// DOM events 
// makes webpage functional and useful 

// there are three way to handle events in Js DOM 
// (i). inline 
// (ii). using properties 
// (iii). event listner  

// (i) inline

// (ii). using properties 
// (i). onclick
// (ii). onmouseenter
let btn = document.querySelector("button");
// we can directly assign fuction to a event property 
// btn.onclick = function(){
//     console.log("Button Clicked");
// }

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Ankit Kumar");
}
btn.onclick = sayHello;

// if we have multiple buttons on the webpage 
let btns = document.querySelectorAll("button");
for(btn of btns){
    console.dir(btn);
    btn.onclick = sayHello;
    btn.onclick = sayName;
    btn.onmouseenter = function(){
        console.log("You hover a button");
    }
}

// (iii). Event Listener
// if we want to execute multiple function or operation on any events occured then we use events listener
// so when we have to handle events we handle or tackle them using eventListener 
for(btn of btns){
    btn.onclick = sayHello;
    btn.onclick = sayName;
}
// here only sayName will execute 

// addEventListener
// elementName.addEventListener(event(click, drag, keyboard-key-press), callback(callbacks are the functions that are passed as a parameter to another function))
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("Double Clicked");
    });
}

// Small Activity: Generates random color with there rgb values

// we can add events listeners for many elements like for paragraph, etc
let p = document.querySelector("p");
console.log(p);
p.addEventListener("click", function(){
    console.log("Para was clicked");
})
// click event is not only for button we can use click event for multiple elements 
let div = document.querySelector(".box");
div.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
})

// this in Event Listeners 
// When 'this' is used in a callback of event handler of something(like object or element), it referes to that something(like object or element) 
let btnn = document.querySelector("#this");
btnn.addEventListener("click", function(){
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow";
})

// this is useful in addEventListener when we want to use a single addEventListener to multiple types of object
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// btn.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// p.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h1.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })
// h3.addEventListener("click", function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// this is not a good way of programming because we write a same line of code repeatdly as a programmer we should remove redundancy from the code 
function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
// so we remove redundancy from the code 

// After this we will learn about keyboard events in next folder 