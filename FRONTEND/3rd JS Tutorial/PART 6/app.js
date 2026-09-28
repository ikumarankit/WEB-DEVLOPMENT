// Functions in JS 
// Very important kyuki aage jake jitni bhi programming karenge wo sab functions par based hongi 
// infact har dusri tisri line me fuction likh rahe honge 

// Funtion Defination (telling JS the name of a function and what it does)
// function funcName(){
//     //do something
// }
console.log("Function in JS");
function hello() {
    console.log("Hello");
}

function printName1() {
    console.log("Ankit Kumar");
}

// Function Calling(Using the function)
// funcName(); 
hello();
hello();
hello();
printName1();

// Practice Qs 
// Creat a function that prints a poem 
function printPoem(){
    console.log("Twinkle Twinkle, litte star");
    console.log("how I wonder what you are");
}

printPoem();

// Practice Qs 
// Create a function to roll a dice & always display the value of the dice(1 to 6) 

function rollDice(){
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
}

rollDice();
rollDice();
rollDice();


// Function with Arguments 
// May be there is some function that depends on the value (parameter or we can say argument) then that function are called argument function 
// Values we pass to the function 

// Function Defination 
// function funcName(parameter1, parameter2....){
//     // do something 
// }

// Function Call 
// funcName(arguments1, arguments2...)

function printName2(name){
    console.log(name);
}
printName2("hello");


function printName3(name, age){
    console.log(`${name}'s age is ${age}`);
}
printName3("ankit", 21);

// In function order of arguments(value paased) is important 
// jo value app pahle paas karenge wo pahle wale parameter me jake store hogi aur jo value aap baad me paas karenge wo value baad wale parameter me jake store hogi
// we cannot think like we can paas only one argument and then that will we stored in second parameter no that's wrong thinkining
// jo bhi arguments(value paased) aap paas karenge wo order wise parameter me jake store hoti hai 

function sum(a, b) {
    console.log(a + b);
}
sum(12,12);
sum(12,13);
sum(12, 14);

// Practice Qs 
// Create a function that gives us the average of 3 numbers 
function calcAvg(a, b, c){
    avg = (a+b+c) / 3;
    console.log(avg);
}
calcAvg(5,5,5);  
// by printing the name of the function in console we can see the defination of the function 

// Practice Qs
// Create a function that prints the multiplication table of a number 
function printTable(a){
    for(let i=1; i<=10; i++){
        console.log(i*a);
    }
}
printTable(3);

// Return Keyword 
// return keyword is used to return some value from the function 
function calcSum(a, b){
    return a+b;
}
console.log(calcSum(1,2));
console.log(calcSum(calcSum(1,2),3));

function isAdult(age){
    if(age >= 18){
        return "adult";
    } else {
        return "not adult";
    }

    // whatever we write after return statement that will not be executed 
    console.log("Hello");

    // we can return only single value from the function 
    // if we want to return set of values then we can store them in object or array and then return that object or array
}

// Practice Qs 
// Create a function that returns the sum of numbers from 1 to n 
function calcNthSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(calcNthSum(2));


// Practice Qs 
// Create a function that returns the concatenation of all strings in an array 
let arr = ["ankit", "kumar", "!"];

function concatString(arr){
    let a = "";
    // for(let i=0; i<arr.length; i++){
    //     a = a + arr[i];
    // }

    for(let str of arr){
        a += str;
    }
    return a;
}

console.log(concatString(arr));
// This functions might not looks useful but when we call API's and do other things then the function is most useful 
// but before that we must have the basic of JS clear in functions


// SCOPE 
// Scope determine the accessibility of variables, objects, and functions from different parts of the code
// Function Scope: Variables defined inside a function are not accessible(visible) from outside the function
console.log("SCOPE");
console.log("FUNCTION SCOPE");
let add = 32; // Global Scope (kahi bhi use kia ja sakta even in function without pasing)
function calSum(a, b){
    let add = a+b;  // Function scope(more specific)
    console.log(add);
}
calSum(1,2);
console.log(add);

// .Block Scope ( {} )
// Variables declared inside a {} block cannot be accessed from outside the block
// variables defined by let or const are the ones where block scope work it will not work for var keyword defined variables 
console.log("BLOCK SCOPE");
{
    let a = 3;   
    const b = 5;
    var c = 6;
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(a);   gives error cannot accessed outside block 
// console.log(b);   gives error cannot accessed outside block 
console.log(c);

let age = 25;
if(age >= 18){
    let str = "adult";
    console.log(str);
}
// console.log(str);  gives error cannot be accessed outside block statement 

// .Lexical Scope (nested function concept is used)
// A variable defined inside a function can be accessible inside another function defined after the variable declaration 
// The opposite is not true 
console.log("LEXICAL SCOPE");
function outerFunc(){
    let x = 5;
    let y = 3;

    function innerFunc(){  //( innerFunct is function scope ) cannot be accessed outside of outerFunc
        console.log(x++);
        console.log(y++);

        console.log(z++); // hoisting

        let a = 8; // andar wale variable bahar accessible nahi honge 
    }

    let z = 8;  // hoisting

    innerFunc();
    console.log(x);
    console.log(y);
    // console.log(a);  andar wale variable bahar accessible nahi honge 
}

outerFunc();
// innerFunc();   gives error 


// Function Expressions 
// It is the different way of defining function 
// nameless function 
// const variable = function(parameter1, parameter2...){
//     // do or return something 
// } 
console.log("Function Expression");
let name = "ankit";
let addition = function(a,b){
    return a+b;
}
console.log(addition(1,2));

let hello1 = function(){
    console.log("Hello");
}
hello1();

hello1 = function(){
    console.log("Namaste");
}
hello1();
// if we want to use function like a variable then we can use function expression

// Higher Order Functions 
// A function that does one or both: 
// -> takes one or multiple functions as parameter
function multipleGreet(func, count){  // higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet, 3);
multipleGreet(function(){ console.log("Namaste"); }, 3);
// during API calls these functions are important 

// -> returns a function as an output
function oddOrEvenFactory(request){
    if(request == "odd"){

        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else {
        console.log("Wrong request");
    }
}

let function1 = oddOrEvenFactory("even");
function1(3); 
function1 = oddOrEvenFactory("odd");
function1(10);


// Define Methods for objects
// Actions that can be performed on an object 
// Functions that defined inside a object are called methods 
const calculator = {
    num: 21,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
console.log(calculator.num);
console.log(calculator.add(1,2));
console.log(calculator.sub(1,2));
console.log(calculator.mul(1,2));
// arrays and string are internally object in JS 

// Methods (Shorthand)
const calculatorr = {
    num: 21,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(calculatorr.num);
console.log(calculatorr.add(1,2));
console.log(calculatorr.sub(1,2));
console.log(calculatorr.mul(1,2));



// Practice Questions 
// Qno. 1
let elements = [8,9,10,1,2,3,4,5];
function getLarger(arr, n){
    // let brr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > n){
            // brr.push(arr[i]);
            console.log(arr[i] + " ");
        }
    }
    // return brr;
}
getLarger(elements, 5);
// Qno. 2 
function getUniqueChar(str){
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currCh = str[i];
        if(ans.indexOf(currCh) == -1){
            ans = ans + currCh;
        }
    }
    return ans;
}
console.log(getUniqueChar("abcdabcdefgggh"));

// Qno. 3
let list = [];
let size = prompt("How much country names you want to add");

let i = 1;
while(i <= size ){
    let countryName = prompt(`Enter ${i} country name: `);
    list.push(countryName);
    i++;
}

function longestName(list) {
    let ansIdx = 0;
    for(let i=0; i<list.length; i++){
        let ansLen = list[ansIdx].length;
        let currLen = list[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return list[ansIdx];
}
console.log(longestName(list));

// Qno. 4
let vowel = "aeiou";
let count = 0;
function countVowel(str){
    for(let i=0; i<str.length; i++){
        let currCh = str[0];
        if(vowel.indexOf(currCh) != -1){
            count++;
        }
    }
    return count;
}

// Qno. 5
let start = prompt("Enter the start range of the random number");
let end = prompt("Enter the end range of the random number");

function generateRandom(start, end){
    let diff = end - start;
    let randomNum = Math.ceil(Math.random() * diff) + start;
    return randomNum;
}
console.log(generateRandom(start, end));




