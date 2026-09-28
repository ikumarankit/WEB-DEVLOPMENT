const express = require('express');
const app = express();
// requiring mongoose
const mongoose = require('mongoose');

const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // default engine and extension as parameter 

// requiring models we created in chat.js file of models folder
const Chat = require('./models/chat.js');

// to link or connect static files with express app -> css
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));


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

// after importing Chat model we create a basic chat from it 
// let chat = new Chat({
//     from: "Ankit",
//     to: "Aman",
//     message: "send me your examsheet",
//     createdAt: new Date()  // this generate a random date and time
// });

// chat.save()
//     .then((res) => {
//         console.log(res);
//     });

const port = 8080;
app.listen(port, () => {
    console.log("server is listening!");
});

// root route 
app.get("/", (req, res) => {
    console.log("root is working!");
    res.send("root route working");
})


// Index Route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("working");

    res.render("index", { chats });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching chats");
  }
});



// New Route -> render form
app.get("/chats/new", (req, res) => {
    // res.send("Working");
    res.render("newForm");
});

// Create Route
// Post Route -> post new chat to the database
app.use(express.urlencoded({ extended: true }));
// app.post("/chats", (req, res) => {
//   let { from, to, message } = req.body;
//   let newChat = new Chat({
//     from: from,
//     to: to,
//     message: message,
//     createdAt: new Date()
//   });
//   console.log(newChat);

//   newChat.save()
//     .then(() => {
//       console.log("chat was saved");
//       res.redirect("/chats"); // redirect inside .then
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send("Error saving chat");
//     });
// });


// second way of handling error for the above code: 
app.post("/chats", async (req, res) => {
  try {
    let { from, to, message } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: message,
      createdAt: new Date()
    });

    await newChat.save(); // wait until saved
    console.log("chat was saved");

    res.redirect("/chats"); // only redirect after save
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving chat");
  }
});



// Edit & Update Route 
// GET   /chats/:id/edit 
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let {id} = req.params;
        // console.log(id);

        let chat = await Chat.findById(id);
        // console.log(chat);
        // res.send("working");
        res.render("updateForm", {chat});
    } catch(err){
        console.log(err);
        res.status(500).send("Error getting chat");
    }
});


// Update Route 
// app.use for seding PUT request from form 
const methodOveride = require('method-override');
const { deepEqual } = require('assert');
app.use(methodOveride('_method'));
app.put("/chats/:id", async (req, res) => {
    try {
        let {id} = req.params;
        let {message: newMessage} = req.body;
        // console.log(newMessage);
        let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMessage}, {runValidators: true, returnDocument: true});
        // console.log(updatedChat);

        // res.send("working");
        res.redirect("/chats");
    } catch(err) {
        console.log(err);
        res.status(500).send("error updating!");
    }
});



// Destroy Route:
app.delete("/chats/:id", async (req, res) => {
    // res.send("working");

    let {id} = req.params;
    // console.log(id);
    // res.send("working");

    let deleteChat = await Chat.findByIdAndDelete(id);
    // console.log(deleteChat);
    res.redirect("/chats");
});