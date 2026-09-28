// fullName = "Tony stark";
// console.log(fullName);
// age = 24;
// console.log(age);
// price = 99.99;
// console.log(price);
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
// isFollow = false;
// console.log(isFollow);
// isBlocked = true;
// console.log(isBlocked);
// fullName = 25;
// console.log(fullName);
// This is the wrong way to define variables in Java script 
// ES 6 modern Java Script

// let, var, const
// let fullName = "Tony Stark";
// console.log(fullName);

// const PI = 3.1415;
// console.log(PI);

// // Global scope variable
// {
//     var a = 6;
// }
//     console.log(a);

// // Block scope variable
// {
//     let b = 3;
//     console.log(b);
// }

// {
//     let b = 5;
//     console.log(b);
// }


// PRIMITIVE DATATYPES IN JS
// NUMBER,STRING,BOOLEAN,UNDEFINED,NULL,BIGINT,SYMBOL

// let a = 34;
// let b = "Ankit"
// let c;    //undefined
// let d = null;
// let e = BigInt(123);
// let f = Symbol("Ankit");
// let isFollow = true;

// NON PRIMITIVE DATATYPES
// OBJECTS

// const student = {
//     fullName : "Ankit Kumar",
//     age : 20,
//     cgpa : 8.00,
//     isPass : true,
// };

// student.name = "Rahul Sharma";
// student["age"] = student["age"] + 1;

// console.log(student.name);
// console.log(student["age"]);

// PRACTICE SET

const product = {
    productName : "Ball Pen",
    color : "Black",
    rating : 4,
    price : 270,
    offer : 5,
};
console.log(product);

const profile = {
    userName : "aaaaankit.t",
    posts : 195,
    followers : 569 + "K",
    following : 5,
    fullName : "Ankit Kumar",
    isFollow : true,
};
console.log(profile);
console.log(typeof profile["userName"]);
console.log(typeof profile["posts"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["following"]);
console.log(typeof profile["fullName"]);
console.log(typeof profile["isFollow"]);






