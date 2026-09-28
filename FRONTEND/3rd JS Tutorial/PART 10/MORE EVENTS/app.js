// More Events 
// (i). change event 
// The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements)
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
})
let user = document.querySelector("#user");
user.addEventListener("change", function(event){    
    console.log("change event triggered");
    console.log("final value =", user.value);
})
// when we press any key then the change event will not triggered the change event will triggered when we submit it 
// triggered when initial state is not equal to final state 
// does not track small changes (like clicking key)


// (ii). input event 
// The input event fires when the value of an <input>, <select> or <textarea> element has been changed.
// if we want to track small changes (like clicking key) then we use input event 
let pass = document.querySelector("#pass");
pass.addEventListener("input", function(){
    console.log("input event triggered");
    console.log("final value =", pass.value);
})
// arrow keys or shift enter or ctrl key so non-character key doesn't triggered input event 


// Creating text editor: create a paragraph based on what is entered or typed in input
let para = document.querySelector("p");
let inp = document.querySelector("#text");

inp.addEventListener("input", function(){
    para.innerText = this.value;
});