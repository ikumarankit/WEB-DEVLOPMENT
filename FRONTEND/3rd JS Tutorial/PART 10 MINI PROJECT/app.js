// Event Bubbling
// when we addEventListener for different different nested elements in HTML then event bubbling is happend
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("Div was clicked");
})

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    })
}
// when we triggred nested element event then it triggred there parent element also this phenomenon is known as bubbling
// there is one method of event object to stop this phenomenon that is event.stopPropagation()
