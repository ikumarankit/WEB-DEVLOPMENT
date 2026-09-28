// (i). CALL STACK 
function hello(){
    console.log("inside hello");
    console.log("hello");
}

function demo(){
    console.log("calling hello function");
    hello();
    console.log("hello function executed");
}

console.log("calling demo function");
demo();
console.log("done");

// Visualizing Call Stack 
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

// BreakPoints 
// We can track Java Script Call Stack through Browser also with the help of breakpoints
// breakpoints are used for debuging(if we want to see how a particular line is being executed then we can use breakpoints on it)
// Here we only use breakpoints to observe call stack later we discuss breakpoints in detail



// JS is Single Threaded 
// Js has single threaded nature
// Generally we can divide programming languages into two categories first is single threaded and second is multi threaded  
// single threaded means let imagine we have multiple lines of code then at a time only one piece of code will execute 
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);  
// here js executed every line one by one 

// like if there is a code where we intract with API for requesting some data and if the server where API is hosted is down then js will wait until the server gets free and till then js will not execute anything 
// or if there is a code where we send data to database and database takes their own time to store it then here js also wait till data is added into the database so that's a drawback 
// so to handle or deal with this single threaded nature of js in js there is multiple things  
// (i). callbacks(functions that goes as an argument in other function)
// when we want to excute some work that execute on complitation of other work then we use callbacks 
// we can also use setTimeout and setInterval 
setTimeout(function(){
    console.log("ankit");
}, 2000);
setTimeout(function(){
    console.log("pankit");
}, 2000);
// setInterval(function(){
//     console.log("Aman");
// },4000);
console.log("hello...");
// here js code will not wait for the complitation of the setTimeout or setInterval function so hello will print then after exactly 2sec ankit will print  
// here if js is single threaded then how it will wait for 2sec waiting itself a work for any programming languages 
// we may think ki if js is single threaded then how it will executed two setTimeout function together at 2sec so the answer is ki ye waiting wala kaam or execution of setTimeout function java script nahi karwati ye hamara browser karwata hai 
// browser is multithreaded because most of the browser is written in c++ language 
// so by this we see js will wait browser wait and then if the delay complete then it send the setTimeout function into the callstack and then js execute it 

// the above code code line 44 - 49 has synchronus nature because it it executed line by line
// but when we use things like setInterval, setTimeout, and callbacks then the nature of the code is asynchronus hence the js nature has asynchronus
// in this chapter we are learning about asynchronus nature of javaScript even thought javaScript is single threaded it behaves or acts asynchronus thats why we have some problem sometimes to solve it in js there is many concept and about the same problem and concept we talking about in this chapter 

// First Problem due to asynchronus nature of js is 
// (i). Callback Hell 
// next in CALLBACK HELL FOLDER
