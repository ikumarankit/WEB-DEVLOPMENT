// getting-started.js
// creating mongodb connection
const mongoose = require('mongoose');
// const url = https://localhost:8080/users;
// mongoose.connect("mongodb://127.0.0.1:27017/test");  // this command await for the promise from the database itself 

// after we form the mongodb connection the mongodb wait for a promise 
// after connection with mongodb mongodb returns a promise 

// the mongoose function or methods are asynchronous and so we handle these functions asynchronously 
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    // await promise from the database itself 
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// once the connection between mongodb and javascript is established we are ready to perform CRUD operations on databases  



// we use test database and in database we use user collection 
// by this line we defines schema that a collection/s can follow using model 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// this line defines that documents created in User collection must follow the schema that is defined in the userSchema through mongoose.Schema class 
// here User is model class
// we pass collection name, collection schema as parameters and collection name and model name are same 
// by the below line we created a User collection in our test database because we  made a connection with test database
const User = mongoose.model("User", userSchema);
// we can create multiple collections
const Employee = mongoose.model("employee", userSchema);


// we have User Model which is a class and we create the object for that class so we create the User object which is our document

// so in Mongoose:
// Model class represents collection 
// and objects of this Model class represents documents



// before inserting document first we have to create it 
// creating document: 
// there will be the _id key with new ObjectId('someID') value created by mongoose default this field is automatically created by mongoose 
// const user1 = new User({
//     name: "Adam", 
//     email: "adam@yahoo.in", 
//     age: 48
// });

// // after creating we save document
// user1.save();  // asynchronous method and return promise 


// // creating second document 
// const user2 = new User({
//     name: "Eve", 
//     email: "eve@yahoo.in", 
//     age: 32
// });

// // after creating we save document
// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// we can use insertMany to insert multiple document into the collection
// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 30},
//     {name: "Rony", email: "rony@gmail.com", age: 50},
//     {name: "Bony", email: "bony@gmail.com", age: 20},
// ]).then((res) => {
//     console.log(res);
// })





// Find in mongoose 
// Model.find()
// User.find({})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.find({age: {$gt: 47}})
//     .then((data) => {
//         console.log(data);
//         console.log(data[0]);
//         console.log(data[0].name);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Model.findOne()  // returns a single document or result 
// User.findOne({age: {$gt: 47}})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// User.findOne({_id: "6a05c1f3fa02ad4a7d20a447"})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// // Model.findById()
// User.findById('6a05c1f3fa02ad4a7d20a447')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })





// Update in mongoose 
// here we dont use $set operator 
// Model.updateOne({condition}, {update}, {option})
// User.updateOne({name: "Bony"}, {age: 30})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Model.updateMany({filter}, {update}, {condition})
// User.updateMany({age: {$gte: 48}}, {age: 30})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// The above two methods for updating document gives metadata in result after updation 
// so we use the below methods if we want to immediately print the data that is being updated not the updated data it prints in prints the before updated data  but if we want to print the updated data like how data looks after update then we use the option parameter of the method 
// {new: false} return unchange data but {new: true} return the modified document rather than the original 


// Model.findOneAndUpdate({condition}, {update}, {option})
// User.findOneAndUpdate({name: "Bony"}, {age: 19}, {new: true})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// Model.findByIdAndUpdate({condition}, {update}, {option})
// User.findByIdAndUpdate('6a05c1f3fa02ad4a7d20a447', {age: 100}, {new: true})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })





// Delete in mongoose 
// Model.deleteOne({condition}, {option})
// User.deleteOne({name: "Bony"})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// Model.deleteMany({filter}, {option})
User.deleteMany({age: {$gte: 30}})
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


// The above two methods also has the same problem that has with updateOne and UpdateMany it also returns the metadata not the document that is got deleted so for to solve this problem again we use the below two methods

// i. Model.findOneAndDelete({filter}, {option})
// User.findOneAndDelete({name: "Bony"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// ii. Model.findByIdAndDelete({filter-condition}, {option}) 
// User.findByIdAndDelete('6a0714015805c9fb4e84b279')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     }) 