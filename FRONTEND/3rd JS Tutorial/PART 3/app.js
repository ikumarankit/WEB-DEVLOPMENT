// String Methods
// Methods - actions that can be performed on objects

// Format 
// stringName.methodName()

// Trim() Method
// Trims whitespaces from both end of string & returns a new one 
console.log("trim() Method")
let msg = "      hello     ";
console.log(msg.trim());
console.log(msg);

let password = prompt("Enter your password: ");
let newPass = password.trim();
console.log(newPass);
console.log(password);

// Strings are immutable in JS
// No changes can be made to strings.
// Whenever we do try to make a change, a new string is created and old one remains same 

// Uppercase and lowercase Methods 
let name = "Ankit Kumar";
console.log("toLowerCase() method");
console.log(name.toLowerCase());
console.log("toUpperCase() method");
console.log(name.toUpperCase());

// String Methods with Arguments 
// Argument is a some value that we pass to the method  

// Format 
// stringName.methodName(arguments)

// IndexOf Method 
console.log("indexOf() Method");
let str = "ILoveCoding";
console.log(str.indexOf("Love"));
console.log("z");


// Method Chaining 
// Using one method after another. Order of execution will be left to right 
// str.toUpperCase().trim() 
// Whenever we want to apply multiple methods on strings then we used methods chaining instead of writing multiple line at once

console.log("Methods Chaining");
let string = "     hello   " ;
let newString = string.trim();
console.log(newString);

newString = newString.toUpperCase();
console.log(newString);

newString = string.trim().toUpperCase();
console.log(newString);


// Slice Method 
// Returns a part of the original string as a new string 
console.log("slice() Method");
let message = "Hello Ankit! How are you?";
console.log(message.slice(6,12));

// we can also pass negative index as an argument 
// -2 will be treated as (stringName.length - 2)
// str.slice(-num) = str.slice(str.length - num)

// we have multiple javaScript string methods but we will learn one which is most used on daily basis 


// Replace Method 
// Searches a value in the string & returns a new string with the value replaced 
// Replace first occurence only
// Replace Method is usefull in Regular Expression
console.log("replace() Method")
let stringMessage = "ILoveCoding";
stringMessage = stringMessage.replace("Love", "Do");
console.log(stringMessage);

// Repeat Method 
// Returns a string with the number of copies of a string 
console.log("repeat() Method")
let word = "mango";
console.log(word.repeat(2));

word = word.repeat(5);
console.log(word);


// Practice Question /
// Qno. 1
let messageStr = "help!  ";
messageStr = messageStr.trim().toUpperCase();
console.log(messageStr);

// Qno. 3 
let collegeName = "Apna College";
collegeName = collegeName.slice(5).replace("l", "t");
console.log(collegeName);

// Once the string in created in the memory then we can not able to change it in any condition
// we can completly changed the string value to another value but cannot change the value



// Array (Data Structure)
// Linear collection of things
// if we want to store 3 students name then we can create 5 variable of type String 
// but if we have to store 50 students name then what??
// here we use array data structure 
console.log("Basic of Array");
// let student1 = "ankit";
// let student2 = "aman";
// let student3 = "aakash";

let students = ["ankit", "aman", "aakash"];
// Arrays in JS is object type 

// Creating Arrays
console.log("Different ways of creating array in JS");
let marks = [99, 85, 93, 76, 62];
let names = ["adam", "bob", "catlyn"];
let info = ["aman", 25, 6.1];   // mixed array
// we can store different types of items in JS array 
// but in some language there will be restriction like java, c++ etc 

// empty array 
let newArr = [];

console.log(marks.length);
console.log(info.length);

// Arrays are Mutable in JS
let fruits = ["mango", "apple", "litchi"];
fruits[0]  = "banana";
console.log(fruits);

fruits[10] = "pineapple";
console.log(fruits);

// Array Methods 
console.log("Array Methods");
// (i). Push: add to end 
// (ii). Pop: delete from end & returns it 
// (iii). Unshift: add to start 
// (iv). shift: delete from start & returns it 

let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);

cars.push("toyota");
console.log(cars);
cars.push("ferrari");
console.log(cars);

console.log(cars.pop());
console.log(cars.pop());

console.log("unshift and shift method");
cars.unshift("toyota");
console.log(cars);
console.log(cars.unshift("ferrari"));
console.log(cars);
console.log(cars.shift());
console.log(cars.shift());
console.log(cars);

// Practice Question 
let months = ["january", "july", "march", "august"];

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

// Arrays More Methods 
// indexOf: returns index of something 
console.log("indexOf() Method");
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
primary.indexOf("Yellow");
primary.indexOf("blue");

// inclues: search for a value and returns boolean value
console.log(primary.includes("red"));
console.log(primary.includes("orange"));

// concat: merge 2 arrays 
// changes does not happened in original array 
console.log("concat() method");
let secondary = ["orange", "green", "violet"];
// primary = primary.concat(secondary);
let allColors = primary.concat(secondary);
console.log(allColors);
console.log(primary.concat(secondary));
console.log(primary);
console.log(secondary);

// reverse: reverse an array 
// changes also happened in original array 
console.log("reverse() method");
console.log(primary);
primary.reverse();
console.log(primary);

// slice: copies a portion of an array 
// changes does not happened in original array
// original array ke andar koi changes nahi karta  
console.log("slice() method");
let colors = ["red", "yellow", "blue", "orange", "pink"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));
console.log(colors);

// splice: removes/replaces/add elements in place 
// very important method 
// splice(start, deleteCount, item0...itemN)
// changes also happened in original array 
// original array ke andar hi changes karta hai 
console.log("splice() method");
console.log(colors);
// if we paas only one argument in splice method then it will work as slice method 
colors.splice(4);
console.log(colors);
colors.splice(0, 1);
console.log(colors);
colors.splice(0, 3);
console.log(colors);
colors.splice(0, 0, "black", "grey");
console.log(colors);
colors.splice(1,1,"white");
console.log(colors);

// sort method 
// changes also happened in original array 
// original array ke andar hi changes karta hai 
// not works for array with number 
// sorts method first convert all the values of the array into string 
// sort: sorts an array 
console.log("sort() method");
let days = ["wednesday", "sunday", "monday", "tuesday"];
days.sort();
console.log(days);


// Practice Question 
console.log("Practice Question");
months = ["january", "july", "march", "august"];
months.splice(0,2,"july", "june");
console.log(months);

let language = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(language.reverse().indexOf("javascript"));


// Array References
// refrences means address in memory 
// refrece variable address store karta hai value nahi
console.log("Array Refrences");
let arr1 = [1];
let arr2 = [1];
console.log(arr1 == arr2);
console.log([] == []);

let array = ['a', 'b'];
let arrayCopy = array;
arrayCopy.push('c');
console.log(array);
console.log(array == arrayCopy);

// Constant Arrays
// when we create constant array then we can perform operations on the elements of the constant array which is not possible when we create constant variable 
// constant array ko ham completely naye array me convert nahi kar sakte 
// constant array makes the refrence variable constant not the value inside constant array 
console.log("constant array");
const arr = [1,2,3,4];

// Nested Arrays or multidimensional arrays
// array of arrays
// rows = no. of arrays 
// cols = individual elements of the array 
let nums = [ [1,2], [3,4], [5,6]];
console.log(nums);
console.log(nums.length);
console.log(nums[0].length);


// Practice Question
let tictac = [["X", " ", "O"], [" ", "X", " "], ["O", " ", "X"]];
console.log(tictac);
tictac[0][1] = "O";
console.log(tictac);


// Assignment Question 
// Qno. 1
array = [7,9.0,-2];
let n = 3;
console.log(array.slice(0, n));

// Qno. 2
array = [7,9,0,-2];
n = 3;
console.log(array.slice(array.length-n));

// Qno. 3
str = "";
if(str.length == 0){
    console.log("String is empty");
} else {
    console.log("String is not empty");
}

// Qno. 4
str = "AnkIT kUMar";
let idx = 6;
if(str[idx] === str[idx].toLowerCase()){
    console.log("Character is lower case");
} else {
    console.log("Character is not lowercase");
}

// Qno. 5
str = "  error    ";
console.log(str.trim());

// Qno. 6
array = [2,"ankit", 67, 44, "kumar"];
let element = 44;
if(array.indexOf(element) != -1){
    console.log("Element exist");
} else {
    console.log("Element is not exist");
}



