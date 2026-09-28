// COMMENTS IN JAVA SCRIPT
// This is a single line comment
/* This is a
multi line comment */

// OPERATORS AND CONDITIONAL STATEMENTS
// OPERATORS
// ARITHMETIC OPERATORS

// let a = 3;
// let b = 5;
// console.log("a = ", a , "& b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);

// // Modulus
// console.log("a % b =", a%b);
// // Exponentiation
// console.log("a ** b =", a**b);

// console.log("a = ", a , "& b = ", b);
// // UNARY OPERATOR 1st INCREMENT 2nd DECREMENT
// // Increment need only one operand
// // postincrement
// console.log("a++ =", a++);
// console.log("a = ", a);
// // preincrement
// console.log("++a =", ++a);

// // Decrement need only one operand
// // preincrement
// console.log("a-- =", a--);
// console.log("a = ", a);
// // postincrement
// console.log("--a =", --a);


// ASSIGNMENT OPERATORS
// =, +=, -=, *=, %=, **=, /=

// let a = 5;
// let b = 3;

// console.log("a = ", a, "& b = ", b);
// console.log("a+=b =", a+=b);
// console.log("a-=b =", a-=b);
// console.log("a*=b =", a*=b);
// console.log("a**=b =", a**=b);
// console.log("a/=b =", a/=b);
// console.log("a%=b =", a%=b);


//COMPARISON OPERATORS
// ==, !=, === Equal to & type, !== Not equal to and type
// >, >=, <, <=

// let a = 5;
// let b = 5;

// console.log("a =", a, "& b = ", b);
// console.log("a == b =", a==b);
// console.log("a != b =", a!=b);

// let a = 5;
// let b = "3";

// console.log("a === b =", a===b);
// console.log("a !== b =", a!==b);

// let a = 6;
// let b = 4;

// console.log("a = ", a, "& b =", b);
// console.log("a > b =", a>b);
// console.log("a < b =", a<b);
// console.log("a >= b =", a>=b);
// console.log("a <= b =", a<=b);

// LOGICAL OPERATORS
// && return true if all conditions are true and return false if anyone of the condition is false
// || return true if any one of the condition is true and return false iff both condition is false
// ! return false make condition is true and return true when condition is false

// let a = 5;
// let b = 4;

// console.log("a =", a, "& b =", b);
// console.log("a > b && b < a =", a>b && b<a);
// console.log("a > b && b > a =", a>b && b>a);

// console.log("a > b && b < a =", a>b || b<a);
// console.log("a > b && b < a =", a>b || b<a);

// console.log("!(a > b)", !(a>b));
// console.log("!(a < b)", !(a<b));



// CONDITIONAL STATEMENTS
// IF
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white"
// }
// console.log(color);


// IF-ELSE 
// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log(color);

// ODD EVEN QUESTION
// let num = 10;

// if(num % 2 === 0){
//     console.log(num, "is even number");
// } else{
//     console.log(num, "is odd number");
// }


// ELSE-IF
// let mode = "pink";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if(mode === "blue"){
//     color = "blue";
// } else if(mode === "pink"){
//     color = "pink";
// } else{
//     color = "white";
// }
// console.log(color);



// TERNARY OPERATOR 
// needs three operand
// condition? true output : false output;

// let age = 10;
// age > 18 ? console.log("adult") : console.log("not adult");

// SWITCH CASE
// let fruit = "mangoes"

// switch(fruit){
//     case "papayas" : 
//         console.log("papayas are 100rs per kg");
//         break;
//     case "oranges" :
//         console.log("oranges are 150rs per kg");
//         break;
//     case "mangoes" :
//         console.log("mangoes are 600rs per kg");
//         break;
//     default : 
//         console.log("Sorry, we are out of ${fruit} .");
// }


// PRACTICE SET
// Qno. 1

// alert("Hello this is scam");
// let num = prompt("Enter a number : ");

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else{
//     console.log(num, "is not multiple of 5");
// }

//Qno. 2
let num = prompt("Enter a number");
let grade;

if(num>=90 && num<=100){
    grade = "A";
} else if(num>=70 && num<=89){
    grade = "B";
} else if(num>=60 && num<=69){
    grade = "C";
} else if(num>=50 && num<=59){
    grade = "D";
} else if(num>= 0 && num<=49){
    grade = "F"
} else{
    console.log("Wrong number input");
}

console.log("Your Grade is : ", grade);









