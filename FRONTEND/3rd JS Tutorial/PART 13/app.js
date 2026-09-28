// Axios 
// Library to make HTTP requests 
// We already have fetch then why we use axios because fetch return response but not in readable format or json format but axios return data in json format 

// let url = "https://catfact.ninja/fact";
// async function getFact(){
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch(err){
//         console.log(err);
//     }
// }
// getFact();



let url = "https://catfact.ninja/fact";
let button = document.querySelector("button");

// button.addEventListener("click", ()=>{
//     getFacts()
//     .then((res)=>{
//         let p = document.querySelector("p");
//         p.innerText = res;
//     })
// });

button.addEventListener("click", async ()=>{
    let fact = await getFacts();
    let p = document.querySelector("p");
    p.innerText = fact;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(err){
        return "No fact found";
    }
}

// NEXT IS DOG API 
// After DOG API come here 


// Next we will learn how to pass headers in request using Axios 
// Axios 
// Sending Headers 
let config = {
    headers: {  
        Accept: "application/json",     
    }
}

let url2 = "https://icanhazdadjoke.com";
async function getJoke(){
    try{
        let res = await axios.get(url2,config);
        console.log(res.data.joke);
    } catch(err){
        console.log(err);
    }
}


// Next we will discuss how to update any query string in an api endpoints or URL 
let url3 = "http://universities.hipolabs.com/search?name=";

let button2 = document.querySelector("#country");
button2.addEventListener("click", async ()=> {
    let input = document.querySelector("input");
    let country = input.value;
    let collegesArr = await getColleges(country);
    show(collegesArr);
})

let ul = document.querySelector("ul");
function show(collegesArr){
    ul.innerText = "";
    for(college of collegesArr){
        
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let result = await axios.get(url3+country);
        return result.data;
    } catch(err){
        console.log(err);
        return [];
    }
}




let url4 = "http://universities.hipolabs.com/search?name=India";
let button3 = document.querySelector("#state");
button3.addEventListener("click", async ()=> {
    let collegesArr = await getColleges();
    show(collegesArr);
})

let ul2 = document.querySelector("#state-list");
function show(collegesArr){
    ul2.innerText = "";
    let input = document.querySelector("#state-input");
    let state = input.value;
    for(let college of collegesArr){
        if(college["state-province"] === state){
            let li = document.createElement("li");
            li.innerText = college.name;
            ul2.appendChild(li);
        }
    }
}

async function getColleges(){
    try{
        let result = await axios.get(url4);
        return result.data;
    } catch(err){
        console.log(err);
        return [];
    }
}