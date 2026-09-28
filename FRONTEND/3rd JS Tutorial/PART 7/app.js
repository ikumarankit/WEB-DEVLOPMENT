// this keyword 
// "This" keyword refers to an object that is executing the current piece of code 
// this refers calling object 
const student = {
    name: "ankit",
    age: 21,
    eng: 99,
    math: 93,
    phy: 97,
    avg(){  // if we want to access the object properties then we use this keyword
        console.log(this);  // this refers calling object  
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
};
console.log(student.name);
console.log(student.avg());
console.log(this); // window object will print 

// try and catch statement 
// The try statement allows you to define a block of code to be tested for errors while it is being executed.The
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. 
console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch(err){
    console.log("Error detected");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");


// Miscellaneous Topics 
// chote chote bahot sare concepts ke bare me padenge 
// Arrow Functions (nameless function)
// const func = (parameter1, parameter2,, ) => {function definition}
// arrow function can be used as value for any variable or callback (function that will be passed on higher order function)
const sum = (a, b) => {
    console.log(a + b);
};
sum(2,1);

const cube = (n) => { // if single parameter we can remove parenthesis()
    console.log(n*n*n);
};
cube(2);

// Arrow Functions
// Implicit return statement (automatic return)
// if arrow function is executing or returning only return statement then we can remove return keyword 
// const func = (parameter1, parameter2,...) => (
//     parameter1 + parameter2
// )
const mul = (a,b) => (
    a*b
);

// Set Timeout 
// setTimeout is inbuilt fuction of window object which takes two parameter as input first one is useCallback(fuction which is passed on another function as a parameter) and timeout (in mili second )
// setTimeout is used to execute a piece of code after some delay or we can say timeout 
// because of set timeout function execution flow will not stop execution will be going 
// we use set timeout for request response and api calls 
console.log("Hello");

setTimeout(() => {
    console.log("Universe");
}, 4000);

console.log("Welcome to");

// Set Interval 
// Same as set timeout function but it will continuosly executing the particular function after a given timeout or interval 
// setInterval(function, timeoutorinterval)
let id = setInterval( () => {
    console.log("Hi Ankit");
}, 2000);
console.log(id);
// each set interval function has its unique id 
// if we want to stop the execution of particular function the we can type clearInterval(id) 

clearInterval(id);


// this with Arrow Functions 
// this keyword behaves differently with arrow function and normal function 
// in arrow function this have lexical scope means scope depends on parent function (parents ko call lagane wali object is this in arrow function)
// in normal function scope of this is depends on the calling object 
// in some cases arrow function lexical scope is helpful and is some cases it is consider as bad
const student1 = {
    name: "ankit",
    marks: 95,
    prop: this,  // global scope
    getName: function(){
        console.log(this); // calling object
        return this.name;
    },
    getMarks: () => {
        console.log(this);  // parents scope -> window object
        return this.marks;  // output: undefined coz window object ke lia marks defined hi nahi hai student object ke lia marks defined hai 
    },
    // arrow function apne calling object ke this ko apna this banate hai aur normal function apne calling object ko hi apna this bna lete hai 

    // arrow function is helpful when we use window object inbuilt function like setTimeout()
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // output: student 
        }, 2000);
    },

    getInfo2: function(){
        setTimeout( function() {
            console.log(this); // window
        }, 2000);
    },
};
student1.getName();
student1.getMarks();
student1.getInfo1();
student1.getInfo2();


// Practice Qs 
// Qno. 1
let square = (n) => {
    (n*n);
}
console.log(square(3));


// Qno. 2 
let id3 = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id3); 
    console.log("Clear interval run");
}, 12000)


// Practice Questions (Assignment)
// Qno. 1 
let n = [1,2,3,4,5];
let arrayAverage = (n) => {
    let sum = 0;
    for(num of n){
        sum += num;
    }
    return sum/n.length;
}
console.log(arrayAverage(n));

// Qno. 2 
let isEven = (n) => {
    if(n % 2 == 0){
        return "Even";
    }
    return "Not Even";
}
console.log(isEven(21));

// Qno. 3












