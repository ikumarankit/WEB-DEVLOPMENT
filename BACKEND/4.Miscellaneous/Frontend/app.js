// // Factory Function
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };

//     return person;
// }

// let p1 = personMaker("ankit", 22);
// let p2 = personMaker("aman", 24);
// let p3 = personMaker("raushan", 26);



// // Constructors - doesn't return anything & same name as class start with capital letter 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi, my name is ${this.name}`);
//  } 

// let p1 = new Person("ankit", 22);
// let p2 = new Person("aman", 24);



// // Classes
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("ankit", 22);
// let p2 = new Person("aman", 24);
// // so here every objects refers to the same talk() and doesn't create their own copy of talk()



// Inheritance
class Person {
    constructor(name, age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks){
        console.log("student class constructor");
        super(name, age);  // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        console.log("teacher class constructor");
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
}

let stu1 = new Student("Ankit", 22, 99);
let stu2 = new Student("Aman", 24, 98);

console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.marks);
console.log(stu1.talk());

console.log(stu2.name);
console.log(stu2.age);
console.log(stu1.marks);
console.log(stu2.talk());


let teacher1 = new Teacher("Amar", 55, "English");
console.log(teacher1.name);
console.log(teacher1.age);
console.log(teacher1.subject);
console.log(teacher1.talk());


