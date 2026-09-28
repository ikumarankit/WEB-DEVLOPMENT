// Qno. 1 
let newP = document.createElement("p");
let div = document.querySelector("div");

// newP.style.color = "red";
newP.innerText = "Hey I'm red!";
newP.classList.add("red");
div.appendChild(newP);

// Qno. 2 
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";
div.append(h3);

// Qno. 3 
let newDiv = document.createElement("div");
newDiv.classList.add("divCSS");
div.append(newDiv);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
newDiv.append(h1);
 
let newDivP = document.createElement("p");
newDivP.innerText = "ME TOO!";
newDiv.append(newDivP);
