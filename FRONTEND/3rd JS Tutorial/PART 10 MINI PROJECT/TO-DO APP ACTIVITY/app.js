let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");
    li.appendChild(deletebtn);

    inp.value = "";
})

// let deleteButtons = document.querySelectorAll(".delete");

// for(deleteButton of deleteButtons){
//     deleteButton.addEventListener("click", function(){
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }
// here addEventListener is only used for existing element not for the element we created using createElement



// Event Delegation 
// if we want to apply existing eventListener for new element that we created then we use event delegation 
// used event bubbling property: applying addEventListener to parent rather than element itself coz it will not triggered for new element by triggering parent element even the new created elements gets triggered 
ul.addEventListener("click", function(event){
    // event.target tells us by which element the event gets triggered
    // console.log(event.target.nodeName);

    if(event.target.nodeName == "BUTTON"){
        let parent = event.target.parentElement;
        parent.remove();
    }
})
