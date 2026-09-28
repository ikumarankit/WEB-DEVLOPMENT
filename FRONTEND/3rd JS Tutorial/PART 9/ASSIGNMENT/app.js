// Qno. 1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me";

let body = document.querySelector("body");
body.prepend(button);
body.prepend(input);

// Qno. 2
// console.dir(input);
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qno. 3
let btn = document.querySelector('#btn');
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";
btn.classList.add("btnStyle");

// Qno. 4 
let h1 = document.createElement("h1");
body.prepend(h1);
h1.innerText = "DOM Practice";
// h1.style.textDecoration = "underline";
// h1.style.color = "purple";
h1.classList.add("h1Style");

// Qno. 5
let p = document.createElement("p");
h1.insertAdjacentElement("afterend", p);
p.innerHTML = "Apna College <b>Delta</b> Practice";

