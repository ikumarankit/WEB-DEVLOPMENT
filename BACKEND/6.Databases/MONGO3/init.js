const mongoose = require('mongoose');
const Chat = require('./models/chat.js');


// establishing connection with mongoose
main()
    .then((res) => {
        console.log("connection success");
    })
    .catch((err) => {
        console.log(err);
    })

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// we can also create the array of object separetly and then pass it to the insertMany function 
// let allChats = [
//     {
//         from: "Ankit",
//         to: "Aman",
//         message: "Hello",
//         createdAt: new Date()
//     },
//     {
//         from: "Aman",
//         to: "Ankit",
//         message: "Hi",
//         createdAt: new Date()
//     },
//     {
//         from: "Ankit",
//         to: "Aman",
//         message: "How are you?",
//         createdAt: new Date()
//     },
//     {
//         from: "Aman",
//         to: "Ankit",
//         message: "Good, How are you?",
//         createdAt: new Date()
//     },
//     {
//         from: "Ankit",
//         to: "Aman",
//         message: "Fine",
//         createdAt: new Date()
//     }
// ];


Chat.insertMany([
    {
        from: "Ankit",
        to: "Aman",
        message: "Hello",
        createdAt: new Date()
    },
    {
        from: "Aman",
        to: "Ankit",
        message: "Hi",
        createdAt: new Date()
    },
    {
        from: "Ankit",
        to: "Aman",
        message: "How are you?",
        createdAt: new Date()
    },
    {
        from: "Aman",
        to: "Ankit",
        message: "Good, How are you?",
        createdAt: new Date()
    },
    {
        from: "Ankit",
        to: "Aman",
        message: "Fine",
        createdAt: new Date()
    }
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})