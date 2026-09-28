// Async Function 
// we already know about the asynchronus function 
// here Async Function are used to do asynchronus work more compact and clean and make code more understandable

// Two keywords in Async Function 
// (i). async
// (ii). await 

// (i). async keyword
// Creates an Async Function
// all async function bydefault returns a promise even if we dont write return statement 

async function greet(){
    throw ("some random error");
    return "Hello!";
}

greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("resutl was:",result);
})
.catch((err)=>{
    console.log("Promise was rejected with err:", err);
});


// we can also make arrow function async 
let hello = async ()=>{};

// (ii). await keyword
// pauses the execution of its surrounding async function until the promise is settled (resolve or rejected)
// await keyword is used in async function only 
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.ceil(Math.random() * 10);
            console.log(num);
            resolve("Promise resolved"); 
        },1000)
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
}


// Handling Rejections with Await 
// we handle promise rejection in the form of try and catch block 
let h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.ceil(Math.random() * 10);
            if(num < 5){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        changeColor("purple", 5000);
    } catch(err){
        console.log(`error occurred ${err}`);
    }


    let a = 5;
    console.log(a);
    console.log(a+3);
}  