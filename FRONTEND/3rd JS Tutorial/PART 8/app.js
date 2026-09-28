// Arrays Methods
// This are the higher order methods that takes callback as input 

// .forEach 
// arr.forEach(some function defination or name) 
// to execute function for every element in the array then we use forEach method

let arr = [1,2,3,4,5];

function print(el) {
    console.log(el);
}

arr.forEach(print);
// OR 
arr.forEach(function(el){
    console.log(el);
});


// we can use for each method for objects also
let arrr = [{
    name: "ankit",
    marks: 99
},
{
    name: "anchit",
    marks: 92
},
{
    name: "aman",
    marks: 98
}]
console.log(arrr);
function printMarks(student){
    console.log(student.marks);
}
arrr.forEach(printMarks);


// .map 
// let newArr = arr.map(some function defination or name);

let num = [1,2,3,4];
let double1 = num.map(function(el) {
    return el*2;
});
// OR 
let double2 = num.map((el) => {
    return el*2;
});

let double3 = num.map((el) => {});
console.log(double1);
console.log(double2);
console.log(double3);

let students = [{
    name: "ankit",
    marks: 99
},
{
    name: "anchit",
    marks: 92
},
{
    name: "aman",
    marks: 98
}]

let gpa = students.map(function(el) {
    return el.marks / 10;
})
console.log(gpa); 


// .filter 
// let newArr = arr.filter(some function defination or name);
// if callback(basically function inside function) gives true for any element then it will add to the new array and it will not add to the new array if it give false

let nums = [2,4,1,5,6,2,7,8,9];
function even(num){
    return (num % 2) == 0;
}
let evenNum = nums.filter(even);
console.log(evenNum);


// .every 
// returns true or false 
// Returns true if every element of array gives true for some function. Else returns false 
// arr.every(some function defination or name);

let array = [1,2,3,4];
function isAllEven(n){
    return n%2 == 0;
}
console.log(array.every(isAllEven));

let array2 = [2,4];
console.log(array2.every(isAllEven));

// .some 
// returns true or false 
// Returns true if some element of array gives true for some function. Else returns false 
// arr.every(some function defination or name);


// .reduce 
// Reduces the array to a single value 
// arr.reduce(reducer function with 2 variables for(accumulator, element));

let numbers = [1,2,3,4];
function addAllEle(res,el){
    return res + el;
}

console.log(numbers.reduce(addAllEle));

// Finding Maximum in an array 
let nums2 = [2,3,4,5,3,4,7,8,1,2];

let result = nums2.reduce((max, el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});
console.log(result);


// Practice Qs 
// Qno. 1  
let arrrr = [10,20,30,40];

// function isMulOf10(el){
//     return (el % 10) == 0;
// }

let ans = arrrr.every((el) => (
    (el % 10) == 0
))
console.log(ans);

// Qno. 2 
let arrrrr = [5,6,2,3,4,1];

let res = arrrrr.reduce((min, el) => {
    if(el < min){
        return el;
    } else {
        return min;
    }
})
console.log(res);

function getMin(nums){
    let res = arrrrr.reduce((min, el) => {
    if(el < min){
        return el;
    } else {
        return min;
    }
    });
    return res;
}
console.log(getMin(arrrrr));
// combination of function and array method is very powerfull 


// Default Parameters 
// Giving a default value to the function parameter 

// function func(a, b=2){
//     // do something 
// }
// function func(a=1){
//     // do something 
// }
// The above syntax is correct in JS 

// function func(a=1, b){
//     // do something 
// }
// The above syntax is incorrect in JS coz
// parameters value is assigned by order 

function sum(a, b=2){
    return a + b;
}
console.log(sum(1));
console.log(sum(1,10));


// Spread 
// Expands an iterable(things that can be iterate like array, string) into multiple values 
// function func(...arr){
//     // do something 
// }

let numArray = [1,2,3,1,2,3,0,1,2,3];
console.log(Math.min(...numArray));
numArray.push(-1);
console.log(Math.min(...numArray));
console.log(Math.max(...numArray));
console.log(numArray);
console.log(...numArray);
// can apply on string also 
console.log(..."ankitkumar");


// We can also use Spread with Array Literals 
let arr4 = [1,2,3,4,5];
let newArr = [...arr4];
let newww = arr4; 
console.log(newArr);
console.log(newww);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7,9];
let evenn = [2,4,6,8,10];

let numss = [...odd, ...evenn];
console.log(numss);


// we can use spread with object literals also 
let data = {
    email: "ankitkumar@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123};

// we can convert array to object also using spread 
// means we can spread array or string in terms of object literals also 
let arr5 = [1,2,3,4,5];  // val
let obj1 = {...arr}; // obj -> key: val
let obj2 = {..."ANKIT"};
console.log(obj1);
console.log(obj2);

// Rest (opposite of spread concept)
// Allows a function to take an indefinite number of arguments and bundle them in an array 
// Collect or combine multiple values into an iterable(things that can be iterate like array, string)

function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}
// here sum function store all the arguments in one parameter which is args 
// and then we can perform many operation on args array 
sum(1);
sum(1,2,3,4,5,6);

function min(){
    console.log(arguments);
    console.log(arguments.length);
    // arguments are inbuit collection for every function arguments are not exactly array it is a collection we can say coz we cannot push data into it 
}
min(1,2,3,4,5);

// because arguments are not exactly array and we cannot apply array methods on them then in that case we can use rest concept to access each parameter stored in an array
// rest se sare value ko collect karte hai to wo array me collect hota hai  
function sum(...args){
    return args.reduce((sum, el) => sum + el);
}
console.log(sum(1,2,3,4));

function min(...args){
    return args.reduce((min, el) => {
        if(min < el){
            return min;
        } else {
            return el;
        }
    })
}
console.log(min(1,5,8,-10));

// we can pass our own parameter along with rest parameters 
function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min < el){
            return min;
        } else {
            return el;
        }
    })
}
console.log(min(1,5,8,-10));
console.log(min("hello",1,5,8,-10));


// Destructuring 
// Storing values of array or object into multiple variables 
// when we want to store starting array values to a variable then we can use destructuring concept 
let names = ["tony", "bruce", "steve", "peter", "ankit", "rahul", "abc"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// to short the above three lines we use 
// we can combine destructuring and rest concept together 
let [winner, runnerup, secondRunnerup, ...others] = names;
console.log(winner, runnerup, secondRunnerup);
console.log(others);


// Destructuring for objects
const student2 = {
    name: "ankit",
    age: 14, 
    class: 9,
    subjects: ["hindi", "english", "math"],
    username: "karan@123",
    password: "abcd",
    city: "Pune"
};

// let username = student2.username;
// let password = student2.password;
// we can use destructuring for more compact syntax 
let {username, password} = student2;
console.log(username, password);
// if we want to store key value into other variable then we can use below syntax 
let {username: user, password: pass} = student2;
console.log(user, pass);
// if student2 does not have some key then we can give default key value to them if key exist then value of key printed   
let {city = "Mumbai"} = student2;
console.log(city);



// Practice Question (Assignment)
// Qno. 1 
let arrOne = [2,3,1,4,0];

let square = arrOne.map((el) => el*el);
console.log(square);

let squareSum = square.reduce((add, el) => add+el);
console.log(squareSum);
let avg = squareSum / arrOne.length;
console.log(avg);

// Qno. 2 
let arrTwo = [1,2,3,4];

let newArray = arrTwo.map((el) => el+5);
console.log(newArray);

// Qno. 3 
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
let newStrings = strings.map((el) => el.toUpperCase());
console.log(newStrings);

// Qno. 4
// function doubleAndReturnArgs(arr, ...args){
//     let newArr = arr;
//     console.log(newArr);
//     let newArgs = args.map((el) => el + el);
//     console.log(newArgs);
// }
// doubleAndReturnArgs([1,2,3], 4,4);

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2], 10, 4);

// Qno. 5
const objj1 = {
    name: "ankit",
    roll: 33
};

const objj2 = {
    naam: "aman",
    kramank: 34
};

function mergeObjects(objj1, objj2){
    let newObj = {...objj1, ...objj2};
    return newObj;
}

console.log(mergeObjects(objj1, objj2));


