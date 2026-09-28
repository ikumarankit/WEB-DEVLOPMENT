// JS Object literals 
// It is data structure or collections like array in JS 
// Used to store keyed collections & complex entities 

// property => (key, value) pair 
// Objects are a collection of properties 

console.log("Object Literals");
let student = {
    name: "ankit",
    age: 21,
    marks: 94.4,
    city: "Muzaffarpur"
};
console.log(student);

// array can also store keyed collections & complex entities but in object literals there is a clarity of what data is? 
// generally we make object literals constant 
// constant object literals is same as constant array 

// we can store multiple values in key using array 
let item = {
    price: 999,
    discount: 50,
    colors: ["black", "white"]
}

// Create an object literal for the properties of thread/ twitter post which includes-
// .username, .content, .likes, .reposts, .tags
const post = {
    username: "@ikumarankit",
    content: "Hello This is my first post..",
    likes: 22,
    reposts: 45,
    tags: ["@hello", "@elonMusk"]
};
console.log(post);

// Get Values: How to get Object values?
// There are two ways to get or access value of a particular key 
console.log("HOW TO GET A VALUE OF PARTICULAR KEY: ") 
console.log(post["content"]);
console.log(post.content);
console.log(post.tags);
console.log(post.tags[1]);
let prop = "reposts";
console.log(post[prop]);
console.log(post["likes"]);
// when there is a case where we want to use variable then we use square brackets 

// JS automatically converts objects keys to strings 
// Even if we made the number as a key or keywords name as a key, the number and the keywords will be converted to string
// dot operator cannot convert it into string directly 
let obj = {
    1: "a",
    2: "b", 
    3: "c",
    null: "d",
    true: "e",
    undefined: "f",
    hello: "hello"
};

console.log(obj["null"]);
console.log(obj["hello"]);

// Add/Update Value 
// .Change the city to "Mumbai"
// .Add a new property, gender:"Female"
// .Change the marks to "A"
console.log("ADD OR UPDATE VALUE OF KEY: ");
student = {
    name: "ankit",
    age: 21,
    marks: 99,
    city: "Delhi"
};

// .Change the city to "Mumbai"
student.city = "Mumbai";
console.log(student.city);
console.log(student);

// .Add a new property, gender:"Female"
student.gender = "Male";
console.log(student.gender);
console.log(student);

// .Change the marks to "A"
// .automatic conversion of types is also possible
student.marks = "A";
console.log(student.marks);
console.log(student);

student.marks = [33, 99, 98];
console.log(student.marks);
console.log(student);

delete student.marks;
console.log(student);

// Object of Objects (nesting in object literals)
// Storing information of multiple students 
console.log("OBJECT OF OBJECTS: ");
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    }, 
    ankit: {
        grade: "A",
        city: "Pune"
    }
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.ankit.city);
classInfo.ankit.city = "Vadodara";
console.log(classInfo.ankit.city);
console.log(classInfo.ankit);

// Array of Objects: means there is an array in which there are multiple objects
const classInformation = [
    {
        name: "Aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Ankit",
        grade: "A",
        city: "Vadodara"
    },
    {
        name: "Ankush",
        grade: "F",
        city: "Itanagar"
    }
];

console.log(classInformation);
console.log(classInformation[0]);
console.log(classInformation[1]);
console.log(classInformation[2]);
console.log(classInformation[1]["name"]);
console.log(classInformation[1].name);

// Math Object: Existing object in Js which is a collection of mathematical properties and methods 
// if we want to perform math opertation then we can use math object 
// Properties
// .Math.PI
console.log(Math.PI);
// .Math.E 
console.log(Math.E);

// Methods 
// .Math.abs(n)
console.log(Math.abs(1-12));

// .Math.pow(a,b)
console.log(2,4);

// .Math.floor(n)
// floor is used to round off the value to smallest or minimum integer value 
console.log(Math.floor(5));
console.log(Math.floor(5.55));
console.log(Math.floor(5.999999));
console.log(Math.floor(-5))
console.log(Math.floor(-5.9999));


// .Math.ceil(n)
// floor is used to round off the value to largest integer value 
console.log(Math.ceil(5));
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.0000001));
console.log(Math.floor(-5))
console.log(Math.floor(-5.9999));

// Most used 
// .Math.random()
// It generates number randomly everytime we call from 0 to 1 where 1 is exclusive 
// if we want to write program where we want to generate random number frequently then we can use Math.random Method 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Now we will how to create random integers using random method of Math Object 
// From 1 to 10 Fixed range and integer number
let num = Math.random();
num = num * 10; // because range is 1 to 10 if range is 100 then multiply it with 100
num = Math.floor(num);
num = num + 1;
console.log(num);

let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Practice Question 
// Qno.1 Generates a random number between 1 and 100.
let number = Math.ceil(Math.random() * 100);
console.log(number);

// Qno.1 Generates a random number between 1 and 100.
number = Math.ceil(Math.random() * 5);
console.log(number);

// Now generates number from 21 to 25 only 
number = Math.ceil(Math.random() * 5) + 20; 
console.log(number);


// Guessing Game 
// User enters a max number & then tries to guess a random generated number between 1 to max 

let maxNum = prompt("Enter the max range for you want to guess: ");
let count = 0;
let randomNum = Math.ceil(Math.random() * maxNum);
let guessed = prompt("Enter the the number that you guess: ");

while(guessed != "quit"){
    if(guessed == randomNum){
        console.log("Excellent!! You got it");
        console.log("Do you want to play again? if yes then refresh");
        break;
    } else if(guessed > randomNum){
        guessed = prompt("You guessed little large number");
    } else if(guessed < randomNum){
        guessed = prompt("You guessed little small number");
    } 
    
    // else {
    //     if(count > 3){
    //     guessed = prompt("NOPE! if you want to quit just type quit");
    //     } else {
    //     guessed = prompt("NOPE! it's wrong! Please try again: ");
    //     count++;
    //     }
    // }   
}

if(guessed == "quit"){
    console.log("You Quit");
}


// Practice Question 
// Qno. 1 
let roll = Math.ceil(Math.random() * 6);
console.log(roll);

// Qno. 2
const car = {
    name: "Ferrari",
    model: "X55",
    color: "Purple"
};
console.log(car.name);

// Qno. 3
const person = {
    name: "Ankit Kumar",
    age: 21,
    city: "Tokyo",
};
person.city = "New York";
person.country = "United States"
console.log(person);

