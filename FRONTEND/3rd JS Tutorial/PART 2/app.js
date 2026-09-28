console.log("Hello World!");

let a = 1;
let b = 3;
console.log("Sum of", a, "and", b, "is", a+b);



// Template Literals
// They are used to add (embedded) expression in a string 
let pencilPrice = 10;
let erasorPrice = 5;

console.log("The total price is :", pencilPrice + erasorPrice, "Ruppes.");

// let output = "The total price is :" + (pencilPrice + erasorPrice) + "Rupees.";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);
console.log(`The total price is : ${pencilPrice + erasorPrice} Rupees.`)



// Operators in JS 
// .Arithmetic
let c = 15;
let d = 5;

console.log("Arithmetic Operator");
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**d);

// .Unary
let e = 1;
let f = 1;

console.log("Unary Operator");
console.log(e++);
console.log(e++);
console.log(e--);
console.log(e--);
console.log(e);

console.log(++f);
console.log(++f);
console.log(--f);
console.log(--f);
console.log(f);

// .Assignment
let g = 1;
let h = 11;

g = h;
console.log("Assignment Operators")
console.log(g);
g += h;
console.log(g);
g -= h;
console.log(g);
g *= h;
console.log(g);
g /= h;
console.log(g);
g %= h;
console.log(g);
g **= h;
console.log(g);

// .Comparison
// compare two values 
// return true or false values (boolean)

let age = 12;

console.log("Comparison Operators")
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);
console.log(age != 18);

// there is catch 
// equal to(==) and not equal(!=) to comparison operator doesn't check type of the value
// by === or !== operator we can check type and value both 
console.log(5 == '5');
console.log(5 === '5');

console.log(5 != '5');
console.log(5 !== '5');

console.log(0 == '    ');
console.log(0 === '    ');

console.log(0 == false);
console.log(1 == true);
// har ek number ke sath associated true or false value hoti hai 

// Comparison for non-numbers 
console.log("Comparison for non-numbers");
console.log('a' > 'A');
console.log('a' > 'b');
// whenever we use comparison operator for characters then there unicode is being compared 
// actual jo unicode values hai unko yaad karne ki koi jarurat nahi hai 
// unicode of a = 61 which is 97 in decimal
console.log('@' > '#');
console.log('@' < '#');
// Here also unicode is being compared 

// .Logical





// Conditional Statements
// .if-else  
// condition always returns either true or false
// .if statement 
console.log("if Statement");
let anAge = 18;
if(anAge >= 18){
    console.log("Yes you can vote");
}

// Practice Question 
console.log("Traffic light system Practice Question");
let color = "black";
if(color === "red"){
    console.log("Stop! Wait Wait and Wait");
}

if(color === "yellow"){
    console.log("Get Ready to go");
}

if(color === "green"){
    console.log("Goooooooo");
}

// when we convert real life situtation into code systematically then we call it logic building or actual programming 
// logic programmer ki nisani hoti hai sirf code ya syntax likhna nahi hota
// .else if statement 
// it check the conditions that 'if' conditions give false
console.log("else-if Statement");
let marks = 80;
if(marks >= 80){
    console.log("Very Badd! You got A+");
} else if(marks >= 60){
    console.log("Bad! You got A");
} else if(marks >= 33){
    console.log("Normal! You got B");
} else if(marks < 33){
    console.log("Very Good!! You got F");
}

// Improve Practice Question with the help of else if statement 
// Practice Question 
console.log("Traffic light system Practice Question");
// let color = "green";
if(color === "red"){
    console.log("Stop! Wait Wait and Wait");
} else if(color === "yellow"){
    console.log("Get Ready to go");
} else if(color === "green"){
    console.log("Goooooooo");
}

// else statement 
console.log("else statement");
let myAge = 18;
if(myAge >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// Improve Practice Question with the help of else statement 
// Practice Question 
console.log("Traffic light system Practice Question");
// let color = "green";
if(color === "red"){
    console.log("Stop! Wait Wait and Wait");
} else if(color === "yellow"){
    console.log("Get Ready to go");
} else if(color === "green"){
    console.log("Goooooooo");
} else {
    console.log("Traffic Light is Not working!!");
}

// Practice Question 
let size = "XL";

if(size == "XL"){
    console.log("Price is Rs. 250");
} else if(size == "L"){
    console.log("Price is Rs. 200");
} else if(size == "M"){
    console.log("Price is Rs. 100");
} else if(size == "S"){
    console.log("Price is Rs. 50");
} else {
    console.log("Sorry!! This size is not available");
}


// .nested if-else 
// we can create if else statement inside if else statement and can have many levels

let myMarks = 22;
if(myMarks >= 33){
    console.log("Congrast!! you pass");

    if(myMarks >= 80){
        console.log("Grade: O");
    } else {
        console.log("Grade A");
    }
} else {
    console.log("Better luck next time");
}
// Nesting is writing if-else inside if-else statements. it can have many levels. 

// .Logical Operators
// It is used to combine expressions except logical not which work on single expression
// Logical AND(&&)
let studentMarks = 75;
if(studentMarks >= 33 && studentMarks <= 80){
    console.log("Grade: A+");
}

// Logical OR(||)
if(studentMarks >= 33 || studentMarks <= 80){
    console.log("Pass");
}

// Logical NOT(!)
console.log(!true);
console.log(!false);

// Practice Question 
let str = "ankit";

if(str.length > 3 && str[0] == 'a'){
    console.log("Good String");
} else {
    console.log("Not Good String");
}

// truthy & falsy 
// Everything in JS is true or false (in boolean context)
// This doesn't mean value itself is false or true, but they are treated as false or true if taken in boolean context(like writen in if else statement)

// Falsy values
// -> false, 0, -0, 0n(BigInt Value), ""(empty string), null undefined, NaN 

// Truthy values 
// Everything else
console.log("Truthy and falsy");
if(0){
    console.log("True Value");
} else {
    console.log("False Value");
}

if(""){
    console.log("True Value");
} else {
    console.log("False Value");
}

if(" "){
    console.log("True Value");
} else {
    console.log("False Value");
}


// .switch 
// Used when we have some fixed values that we need to compare to 
// convert traffic light system from if else to switch statement 

console.log("Switch Statement");

let lightColor = "black";

switch(lightColor){
    case "red":
        console.log("Stop!!");
        break;
    
    case "yellow":
        console.log("Slow down");
        break;
    
    case "green":
        console.log("Go");
        break;

    default: 
        console.log("Traffic light is not working!!");
}


// Practice Question 
console.log("Practice Question");
let day = 7;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// Alert & Prompt 
// Alert displays an alert message on the page 
alert("This is Alert message");

// console different methods 
console.log("Different console message");
console.log("This is simple log message");
console.error("This is error message");
console.warn("This is warn message");

// Prompt displays a dialog box that asks user for some input 
let rollNo = prompt("Enter your roll no.");
console.log(rollNo);

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

console.log(`Your name is ${firstName + " " + lastName}`);
let msg = `Welcome ${firstName + " " + lastName}`;
alert(msg)
// koi bhi value leni hogi js to ham prompt ki form me enter karwa sakte hai 



// Assignment Question 
// Qno. 1
let num = 100;

if(num % 10 == 0){
    console.log("good")
} else {
    console.log("bad");
}

// Qno. 2
let userName = prompt("Enter your name: ");
let userAge = prompt(`Enter your age ${userName}:`);

alert(`${userName} is ${age} years old.`);

// Qno. 3
let quarter = 1;

switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    
    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;

    case 4:
        console.log("October, November, December");
        break;
    
    default:
        console.log("Not a valid quarter");
}

// Qno. 4
let givenString = "Ankit";

if((givenString[0] == "A" || givenString[0] == "a") && givenString.length > 5){
    console.log("Golden string");
} else {
    console.log("Not a golden string");
}


// Qno. 5

let num1 = 2;
let num2 = 5;
let num3 = 1;

if(num1 > num2 && num1 > num3){
    console.log("Largest is", num1);
} else if(num2 > num1 && num2 > num3) {
    console.log("Largest is", num2);
} else {
    console.log("Largest is", num3);
}

// Qno. 6
let number1 = 32;
let number2 = 47852;

if((number1 % 10) == (number2 % 10)){
    console.log("Same last digit");
} else {
    console.log("Not same last digit");
}