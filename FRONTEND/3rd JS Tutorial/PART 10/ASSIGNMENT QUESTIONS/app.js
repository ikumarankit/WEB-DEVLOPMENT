// Qno. 1 
// -mouseout
let list = document.getElementById("test");

list.addEventListener("mouseout", function(event){
    console.dir(event);
    event.target.style.color = "purple";  // event.target.style.color = "purple"

    setTimeout(()=>{
        event.target.style.color = "";
    }, 1000);
});

// -keypress
let test = document.getElementById("keypress");
test.addEventListener("keypress", function(event){
    console.log(event);
    event.target.style.color = "red";
});

// -scroll
// -load 

// Qno. 2
let btn = document.createElement("button");
btn.innerText = "Click Me";
let body = document.querySelector("body");

body.appendChild(btn);

btn.addEventListener("click", function(){
    btn.style.color = "green";
})


// Qno. 3
let inp = document.querySelector("#name");
let h2 = document.querySelector("h2");
inp.addEventListener("input", function(){
    h2.innerText = this. value.replace(/[^a-zA-Z" "]/g, '');
})