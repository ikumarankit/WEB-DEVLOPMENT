// if we have to do some repetative task in programming then we use loops
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// Loops: Used to iterate a piece of code 
console.log("for LOOP");
for(let i=1; i<=5; i++){
    console.log(i);
}
// dry run means writting in paper and pen 
// do everthing on pen and paper then use computer for coding

// we can also excute loops in backward
for(let i=5; i>=1; i--){
    console.log(i);
}

// Print all odd numbers (1 to 15)
console.log("print all odd numbers between 1 to 15");
for(let i=1; i<=15; i=i+2){
    console.log(i);
}
console.log("print all odd numbers between 1 to 15 in reverse");
for(let i=15; i>=1; i=i-2){
    console.log(i);
}

// Print all even numbers (1 to 15)
console.log("print all even numbers between 1 to 15");
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log("print all even numbers between 1 to 15 in reverse");
for(let i=10; i>=2; i=i-2){
    console.log(i);
}

// Infinite loops
// very dangerous for code so be aware 

// Print the multiplication table of 5
console.log("print the multiplication table of 5")
for(let i=5; i<=50; i=i+5){
    console.log(i);
}

console.log("print the multiplication table of the number given by user")
// prompt response is string 
let n = prompt("enter your number: ");
// to convert string to integer we use parseInt() method
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

// Nested for-loop
console.log("Nested LOOP")
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

// While-loop
// programming wise alag alag uses hai 
// if numbers is not envolved that much then we use while-loop

console.log("While LOOP");
let i=1;
while(i <= 5){
    console.log(i);
    i++;
}

i=5;
while(i >= 5){
    console.log(i);
    i--;
}

// Favourite Movie
console.log("Favourite Movie");
const favMovie = "Avtar";
let userInput = prompt("Guess my favourite movie");


while(favMovie != userInput && userInput != "quit"){
    userInput = prompt("Wrong try again!");
}

if(userInput == "quit"){
    console.log("You Give UPPPP whyyyyy");
} else {
    console.log("Right you are awesome!");  
}

// Break keyword
console.log("Break Keyword");
i = 1;
while(i <= 5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}

// Loops with Arrays 
console.log("Loops with Arrays");
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for(let i=0; i<fruits.length; i++){
    console.log(i, ": " ,fruits[i]);
}

console.log("In reverse");
for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}

// we use nested loop to traverse nested array or multidimensional array 
console.log("Loops with nested array");
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

// for-of loop 
// we used this loop when we have to access the collection items like array, String, etc
console.log("for-of loop");
fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let fruit of fruits){
    console.log(fruit);
}

for(c of "ankit"){
    console.log(c);
}

// for-of loop for nested array 
heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}


// TO-DO APP 
let todo = [];
let req = prompt("Enter What you want to do?");

while(req != "quit"){
    if(req == "list"){
        if(todo.length == 0){
            console.log("Nothing in the list! Please add some task");
        } else {
            console.log("---------------------------");
            for(task of todo){
                console.log(task);
            }
            console.log("---------------------------");
        }
    } else if(req == "add"){
        let task = prompt("Enter what task you want to add?");
        todo.push(task); 
        console.log("Task Added Successfully");
    } else if(req == "delete"){
        let deleteTask  = prompt("Enter the task name that you want to delete: ");
        for(task of todo){
            if(task == deleteTask){
                todo.splice(todo.indexOf(deleteTask), 1);
                console.log("Task Deleted");
                break;
            }
        }
    } else {
        console.log("Invalid request please choose from give request!");
    }

    req = prompt("Enter what you want to do? e.g. list, add, delete or quit");
}

console.log("Quiting app");


// Practice Question 
console.log("Practice Question");
// Qno. 1
arr = [1,2,3,4,5,6,2,3];
num = 2;

for(ele of arr){
    if(ele == num){
        arr.splice(arr.indexOf(ele), 1);
    }
}
console.log(arr);

// Qno. 2
let number = 287152;
let count = 0;
 
while(number > 0){
    number = Math.floor(number/10);
    count++;
}
console.log(count);

// Qno. 3
let sum = 0;
number = 287152;

while(number > 0){
    let lastDigit = number % 10;
    sum += lastDigit;
    number = Math.floor(number/10);
}
console.log(sum);

// Qno. 4
number = 7;
let fact = 1;
for(let i=1; i<=number; i++){
    fact = fact * i;
}
console.log(fact);

// Qno. 5
let maxNumber = -1;
let nums = [30, 10, 20, 12, 13,50]
for(let i=0; i<nums.length; i++){
    if(nums[i] > maxNumber){
        maxNumber = nums[i];
    }
}
console.log(maxNumber);
