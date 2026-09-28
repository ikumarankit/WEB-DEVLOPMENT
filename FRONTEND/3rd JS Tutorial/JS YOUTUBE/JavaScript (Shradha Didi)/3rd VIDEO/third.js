// LOOPS AND STRING
// LOOPS

// FOR LOOP
// for(let i=0; i<10; i++){
//     console.log("My name is Ankit");
// }

// calculate sum of 1 to n numbers
// let sum = 0;
// let n = 5;
// for(let i=1; i<=n; i++){
//     sum +=i;
// }
// console.log(sum);

// INFINITE LOOP  :   a loop that never ends
// for(let i=4; i>0; i++){
//     console.log(i);
// }



// WHILE LOOP
// let i=0;
// while(i<10){
//     console.log("Never Give Up");
//     i++;
// }



// DO WHILE LOOP
// let i=1;
// do{
//     console.log("Never ever give up");
//     i++;
// } while(i<=10);



// FOR OF LOOP : helps in itration of special datatypes like string, arrays
// let str = "Ankit";
// for(let val of str){
//     console.log(val);
// }

// SIZE OF STRING
// let str = "JavaScript";
// let size = 0;
// for(let i of str){
//     size++;
// }
// console.log(size);



// FOR IN LOOP : helps in iteration of objects
// for(let key in objVar){
//     //do some work
// }
// let student = {
//     name: "Ankit Kumar",
//     age: 20,
//     cgpa: 6.0,
//     isPass: true,
// };
// for(let key in student){
//     console.log("key = ",key, "& value = ", student[key]);
// }



// PRACTICE QUESTIONS ON LOOPS
// Qno. 1
// for(let i=0; i<=100; i++){
//     if(i%2 === 0) console.log(i);
// }

// Qno. 2
// let gameNum = 18;
// let num = prompt("Guess a number : ");

// while(num != gameNum){
//     num = prompt("Wrong! Try again...");
// }

// console.log("Right");



// STRINGS
// //create string
// let str = "Ankit Kumar";
// // string legth 
// str.length
// // string indices
// str[0],str[1],str[n];

// strings have inbuilt properties and functions or we can say methods

// TEMPLATE LITERALS in JS 
// let specialString = `This is a template literals`;
// console.log(specialString);

// let obj = {
//     item: "pen",
//     price: 10
// };
// console.log("The cost of", obj.item, "is", obj.price, "rupees");
// string interpolation
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// escape character  
// \n  next line
// \t  tab space



// STRINGS METHODS/FUNCTIONS IN JAVA SCRIPT
// let str = "AnkitKumar";
// let newStr = str.toUpperCase();
// newStr = str.toLocaleLowerCase();
// console.log(newStr);
// strings are immutable in js
// let str = "    Ankit    Kumar js      ";
// str = str.trim();
// console.log(str);

// str.slice(starting index, ending index?) ending index is non inclusive // returns part of string
// str1.concat(str2) // joins str2 with str1
// str.replace(searchVal, newVal)
// str.charAt(index)

// let str = "ankit";
// console.log(str.slice(2,10));

// let str1 = "ankit";
// let str2 = " kumar";
// let res = str1 + str2;
// console.log(str1.concat(str2));

// let str = "abcdefghijklmnopqrstuvwxyz";
// console.log(str.replace("cdef", "2345"))
// let str = "hellololo";
// console.log(str.replace("lo", "p"));
// console.log(str.replaceAll("lo", "p"));

// let str = "AnkitKumar";
// console.log(str.charAt(5));



// PRACTICE SET
// Qno.1
let str = prompt("Enter your full name: ");
str = str.toLowerCase();
str = "@" + str + str.length;

console.log(str);

