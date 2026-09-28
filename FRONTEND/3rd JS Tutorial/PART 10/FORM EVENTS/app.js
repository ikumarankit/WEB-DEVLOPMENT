// Form events 
// (i). submit 
let form = document.querySelector("form");
form.addEventListener("submit", function(){
    console.log("Form Submitted");
    alert("Form submitted");
})

// There is one important method of event object which is used to prevent default actions that is event.preventDefault()
form.addEventListener("submit", function(event){
    event.preventDefault();
})


// Extracting Form Data 
// We know how to create form and fill data now we will discuss how we can extract form data that is submitted by user using addEventListener and inside it submit event 
form.addEventListener("submit", function(event){
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.dir(user);
    // console.dir(pass);

    // console.log(user.innerText);  // this will print empty string
    // console.log(user.value);
    // console.log(pass.value);
    // we can store this value to database by linking it to the database 


    // there is one more way to access form internal elements if we have multiple elements 
    // inside form object there is a property named elements that store the collections of form internal elements
    // we can access it using index 
    let user = form.elements[0];  // this.elements[0]
    let pass = form.elements[1];  // this.elements[1]
    console.dir(user);
    console.dir(pass);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
})


// next we discuss two more important event which are similar but there is one important difference in it.
// next folder MORE EVENTS