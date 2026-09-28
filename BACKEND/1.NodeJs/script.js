// let n = 5;
// for(let i=1; i<=5; i++){
//   console.log(`Hello! ${i}`);
// }
// console.log("Exit");


// console.log(process.argv);
// let args = process.argv;
// for(let i=0; i<args.length; i++){
//   console.log(`Hello! ${args[i]}`);
// }



// module.exports and require()
// const someValue = require("./math"); // ./ means we are accessing files that are in the same directory as script.js is 
// console.log(someValue);

// const math = require("./math");
// console.log(math.sum(2,2));
// console.log(math.PI);
// console.log(math.g);
// this might look simple but when we build big projects then we use this very very frequently because we dont write everything in one JavaSript file we divides codes in different different files 
// we can divide our code in small small modules that gives modularity to our code 



// const info = require("./Fruits");
// console.log(info);
// console.log(info[0]);
// console.log(info[0].name);
// console.log(info[0].color);



// import and export 
import {sum, PI} from "./math.js";

console.log(sum(1,2));
console.log(PI);