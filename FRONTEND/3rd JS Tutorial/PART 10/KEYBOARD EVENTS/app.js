// After 'this' in addEventListener i change the folder coz its getting confusing 

// Keyboard Events 
// before we learn about keyboard events first we will talk about out default parameter(event parameter or event object)
// whenever there is an event triggred there is one default argument(parameter) in our callback which is called event argument(parameter) automatically
let btn = document.querySelector("button");
btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button clicked");
})
btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked");
})
// when we click then a object will print that gives us information about the triggered event 
// so we will use this object frequently for our KeyboardEvent 
// event objects gives information about the triggered events 


// Now we will talk about KeyboardEvent 
let input = document.querySelector("input");

input.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);

    console.log("Key was pressed");
}) 
// input.addEventListener("keyup", function(){
//     console.log("Key was released");
// })

// when KeyboardEvent triggred and we will print default event then then KeyboardEvent Object will be created and in that object there is two important properties one is code and second is key 
// key will tell us what is printed in the screen or what is visible on the screen 
// whereas code returns the code of the particular key('Semicolon' for ; or 'Space' for " ")
let game = document.querySelector(".game");

game.addEventListener("keydown", function(event){
    switch(event.code){
        case "ArrowUp":
            console.log("Move Up");
            break;
        case "ArrowDown":
            console.log("Move Down");
            break;
        case "ArrowLeft":
            console.log("Move Left");
            break;
        case "ArrowRight":
            console.log("Move Right");
            break;
        default : 
            console.log("Invalid button");
    }
})

// we can also change the condition here 
// like we want by typing U go up and by typing D down like this
// so we will check like if(event.code == 'keyU'){
//     console.log("Moves Up");
// }
// like this we can write

// After this we will learn about form events in next folder 