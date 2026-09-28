// How to select Elements? 
// (i). getElementById
// returns the element as an object or null(if not found)
console.log("getElementById");
let imgObj = document.getElementById("mainImg");
console.log(imgObj.src);
console.log(imgObj.tagName); 
imgObj.src = "assests/creation_1.png";
imgObj.src = "assests/spiderman_img.png";

// (ii). getElementByClassName
// returns the elements as an HTML collection of objects or empty collection(if not found)
console.log("getElementByClassName");
let oldImg = document.getElementsByClassName("oldImg");
console.log(oldImg);
for(let i=0; i<oldImg.length; i++){
    console.dir(oldImg[i]);
}
for(let i=0; i<oldImg.length; i++){
    console.log(oldImg[i].src);
}
for(let i=0; i<oldImg.length; i++){
    oldImg[i].src = "assests/spiderman_img.png";
}

// (iii). getElementByTagName
// returns the elements as an HTML Collection of objects or empty collection(if not found)
console.log("getElementByTagName");
let allPara = document.getElementsByTagName("p");
console.dir(allPara);
for(let i=0; i<allPara.length; i++){
    console.log(allPara[i]);
    console.log(allPara[i].innerText);
}


// Query Selectors 
// Allows us to use any CSS selector 
// most frequently used because its syntax in intutive and easy 
// by using this we don't need to remember different different methods 
// it is used to select single element or we can say object only 
console.log("Query Selector");
console.log(document.querySelector("h1"));
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));    // when we use querySelector collection of objects will not print a single object will be printed 

// if we want to select all object of a particular class or tag then we can use querySelectorAll
console.log("querySelectorAll");
console.dir(document.querySelectorAll("p"));

// selecting the element is done 
// Now manipulating the elements 
// text and content related properties
// (i).innerText
// Shows the visible text contained in a node (only visible content here content is what we see in screen)
console.log("innerText");
let para = document.querySelector("p");
para.innerText = "Hi, I am <b>Iron Man</b>";
console.log(para.innerText);

// (ii).textContent 
// Shows all the full text (hidden here content is from html file directly in this we can see even hidden text)

// (iii).innerHTML 
// Shows the full markup of HTML(all tags used)
console.log("innerHTML");
para.innerHTML = "Hi, I am <b>Iron Man</b>";
console.log(para.innerText);

let heading = document.querySelector("h1");
heading.innerHTML = "<u>Spider Man</u>";
heading.innerHTML = `Yo Yo <i><u>${heading.innerText}</u></i>`;


// Manipulating Attributes 
// We can manipulate elements attributes also by using below methods 
// .getAttribute("attributeName")
console.log("Attribute manipulation");
console.log("getAttribute");
let img = document.querySelector("img");
console.dir(img);
console.log(img.getAttribute("id"));

// Think twice before changing the id or class of any element 
console.log("setAttribute");
img.setAttribute('id', 'spidermanImg');
console.log(img.getAttribute("id"));

console.log(img.getAttribute('class'));
img.setAttribute('class', 'images');
console.log(img.getAttribute('class'));


// Manipulating Style 
// style property 
// Obj.style 
console.log("Style Manipulation");
heading = document.querySelector('h1');
console.dir(heading.style);
heading.style.color = "purple";
heading.style.backgroundColor = "pink";

let links = document.querySelectorAll(".box a");
for(let i=0; i<links.length; i++){
    links[i].style.color = "purple"; // inline style 
}
// we can also use for of loop 
for(let link of links){
    link.style.color = "black";   // inline style 
}
// it is not possible to set or access inside css file styling by using this style property it access the inline styling not css file styling 
// that's why it is not frequently used that much 


// change style using classList 
// Obj.classList 
// classList.add() to add new classes 
img = document.querySelector("img");
console.log("classList");
console.log(img.classList);

heading = document.querySelector("h1");
console.log(heading.classList);
heading.classList.add("green");  // color not showing green coz we set color to purple using inline styling using style property above 
console.log(heading.classList);

// classList.remove() to remove classes 
heading.classList.remove("green");
heading.classList.add("underline");

heading.setAttribute("class", "green");
// we don't use setAttribute for styling because at a time we can set only one class value 
// if we use setAttribute then it will reset all the class value to a single class 

// classList.contains() to check if class exists
console.log(heading.classList);
console.log(heading.classList.contains("underline"));
console.log(heading.classList.contains("green"));

// classList.toggle() to toggle(switch) between add & remove 
// toggling between two states 
console.log(heading.classList.toggle("green"));
console.log(heading.classList.toggle("green"));
console.log(heading.classList.toggle("green"));
console.log(heading.classList.toggle("green"));
console.log(heading.classList);


// Navigation 
// (i). parentElement
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.dir(h4.parentElement);
// (ii). children
console.log(h4.children);
let box = document.querySelector(".box");
console.log(box.children);
console.dir(box.children);
console.log(box.childElementCount);

let ul = document.querySelector("ul");
console.log(ul.childElementCount);
console.log(ul.children);
for(li of ul.children){
    console.log(li);
}
// (iii). previousElementSibling / nextElementSibling
img = document.querySelector("img");
console.log(img.previousElementSibling);
img.previousElementSibling.style.color = "green";
// we can change styling also by accessing navigation 


// Adding Elements in document
// document.createElement('elementName');
let newP = document.createElement('p');
newP.innerText = "Hi Iam Invincible ";
// after creating new element we also have to insert it on to the document 
// so we use the below methods 
// (i).appendChild(element)
let body = document.querySelector("body");
body.appendChild(newP);

box = document.querySelector(".box");
box.appendChild(newP); // move from the body tag and append to the div of class box

let btn = document.createElement("button");
console.dir(btn);
btn.innerText = "Click Me!";

body.appendChild(btn);
box.appendChild(btn); // move from the body tag and append to the div of class box

// (ii).append(element / string or text) 
// it add to the last whereas prepend add to the start
// most frequently used
// adding more text to newP 
newP.append("Yo Yo..");
// if we want to add button in the newP then we can do that also
newP.append(btn);
newP.append("do not click this i tell you do not");

// prepend(element)
// it add to the start whereas append add to the end
box = document.querySelector(".box");
box.prepend(newP);

// insertAdjacentElement(position, element)
// we can exactly define where we want to add element or string / text
let btn2 = document.createElement("button");
btn2.innerText = "Dont Click!!";
let p = document.querySelector("p");

p.insertAdjacentElement("beforebegin", btn2);
p.insertAdjacentElement("afterbegin", btn2);
p.insertAdjacentElement("beforeend", btn2);
p.insertAdjacentElement("afterend", btn2);


// Removing Elements 
// we can also remove elements from the document 
// (i).removeChild(element)
body = document.querySelector("body");
body.removeChild(btn2);

// (ii).remove(element)
// frequently used
btn.remove(); 
let boxPara = document.querySelector(".box p");
boxPara.remove();

para = document.querySelector("p");
para.remove();



