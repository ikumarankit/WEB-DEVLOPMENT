// First Problem due to asynchronus nature of js is 
// (i). Callback Hell 

// code to change the color of heading (Apna College)
let h1 = document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);
// setTimeout(()=>{
//     h1.style.color = "green";
// }, 2000);
// setTimeout(()=>{
//     h1.style.color = "blue";
// }, 3000);

// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// very very important because this type of situation is very frequent in programming 
// important when we start calling API and start storing data in database then this type of code is very frequent 
// callbacks nesting
// because this is not redable and by seeing this we cannot get what happening here thats why we call callback nesting as callback hell
// actually this type of testing is done in production level code  
changeColor("red", 1000, function(){
    changeColor("green", 1000, ()=>{
        changeColor("blue", 1000, ()=>{
            changeColor("orange", 1000, function(){
                changeColor("yellow", 1000, ()=>{
                    changeColor("purple", 1000);
                })
            })
        });
    });
});

// So to overcome from this problem many things is invented in js till now 
// to get rid of this problem we use things like promises, async & await keywords 
// now we will learn about what and how promises and async and await keyword help us to get rid of this callback hell problem in detail
// basically we learn about promises because so we dont need to write this callback nesting or we can say callback hell which gets confusing to the coder itself after some days so to overcome callback hell or make it more easy and understanable we will now learn about promises 
// promises in next folder 