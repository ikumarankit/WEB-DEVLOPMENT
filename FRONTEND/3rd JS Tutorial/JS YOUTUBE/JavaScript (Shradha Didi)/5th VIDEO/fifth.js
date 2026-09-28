// FUNCTION in JS 
// functions helps in redundancy means repetation
// BUILT-IN FUNCTIONS and USER DEFINED FUNCTION 
// BUILT-IN FUNCTION 
// console.log()
// .push()
// .unshift()
// .shift()
// .toUpperCase()
// .toLowerCase()

// USER DEFINED FUNCTIONS 
// FUNCTION DEFINITION
// FUNCTION CALL


// FUNCTION DEFINITION WITHOUT PARAMETER
// function myFunction(){
//     console.log("Hi there! My name is Ankit Kumar");
//     console.log("I am learning JS");
// }

// // FUNCTION CALL WITHOUT ARGUMENT
// myFunction();
// myFunction();

// // FUNCTION DEFINITION WITH PARAMETER
// function myFunction2(msg){  // parameter -> input, we call also use multiple parameter 
//     console.log(msg);
// }

// // FUNCTION CALL WITH ARGUMENT
// myFunction2("My name is Monkey D. luffy");  // argument, we can also send multiple arguments

// FUNCTION TO CALCULATE SUM OF TWO NUMBER
// function calSum(num1, num2){
//     console.log(`The sum is ${num1 + num2}`);
// }
// calSum(3,1);

// FUNCTION KUCH INPUT LETE HAI TO WO KUCH VALUE BHI RETURN KAR SAKTE HAI
// function calSum(num1, num2){     //function parameter are like local variables
//     // local variables  -> block scope variable
//     return num1 + num2;
// }

// let sum = calSum(4434,23254);
// console.log(sum);



// ARROW FUNCTION   compact way of writing a function
// const arrowSum = (num1, num2) => {
//     console.log(num1 + num2);
// }
// arrowSum(6345,32435);
// ARROW FUNCTION IS A PART OF MODERN JS 


// multiplication function 
// function calMul(a, b){
//     return(a*b);
// }
// console.log(calMul(20,20));

// arrow multiplication function
// const calMul = (a, b) => {
//     console.log(a*b);
// }
// calMul(353,645);




// PRACTICE SET : 01
// Qno. 1
// function countVowels(str){
//     let count = 0;
//     for(let val of str){
//         if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
//             count++;
//         }
//     }
//     console.log(`The number of vowels in the string is ${count}`);
// }

// countVowels("Hello My name is ankit kumar");

// Qno. 2
// const countVowels = (str) => {
//     let count = 0;
//     for(let val of str){
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
//             count++
//         }
//     }
//     console.log(count);
// }



// FOR-EACH LOOP IN ARRAYS   for-each loop is actually a method in JS
// callback Function is a function passed as a parameter to another function
// let arr = [1,2,3,4,5];
// arr.forEach(function myFunc(val){
//     console.log(val);
// });
// geneally the callback function passed in the for each loop will be arrow function

// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val);
// })

// let cities = ["pune", "muzaffarpur", "patna", "delhi"];
// cities.forEach((val, idx, cities) => {
//     console.log(val.toUpperCase(), idx, cities);
// })

// for-each loop ham tab use karte hai jab hame array ke har ek element ke lia kuch kaam karana hota hai 
// for-each method can't be used for strings it will give error we use we it
// What is higher order function/method 
// forEach method is HOF/HOM
// higher order function is a function that either take another function as parameter or it will return another function as a value 



// PRACTICE SET : 02 
// Qno. 1
// let arr = [2, 5, 10];
// arr.forEach((val) => {
//     console.log(val*val); // val**2
// })
//     // or
// let calSquare = (val) => {
//     console.log(val**2);
// }
// arr.forEach(calSquare);


// SOME MORE ARRAY METHODS 
// 1. MAP Method  like for-each loop  lekin map ek naya array return karke deta hai
// let nums = [22, 66, 23, 76, 36, 88];

// nums.map((val) => {
//     console.log(val);
// })


// let nums = [22, 66, 23, 76, 36, 88];

// let newArr = nums.map((val) => {
//     return val*val;
// })
// console.log(newArr);
// console.log(nums);


// 2. FILTER METHOD 
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13, 14,15];
// let newArr = arr.filter((val) => {
//     return val%2 === 0;
// })
// console.log(newArr);


// 3. REDUCED METHOD 
// let arr = [1,2,3,4,5];
// let output = arr.reduce((res, curr) =>{
//     return res + curr;
// })
// console.log(output);


// let arr = [5, 35, 7, 23, 665, 232, 52342];
// let output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output);



// PRACTICE QUESTION 
// Qno. 1
// let marks = [22, 54, 91, 65, 87, 44, 97, 86, 55, 84, 88, 99, 90, 93, 96, 95];
// let newMarks = marks.filter((val) => {
//     return val > 90;
// })
// console.log(newMarks);

// Qno. 2
let n = prompt("Dear user, Please Enter a number : ");
let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
})
console.log(sum);

let mul = arr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(mul);