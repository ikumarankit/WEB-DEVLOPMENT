const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// __dirname is current working directory of index.js

app.get("/", (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");
})

app.get("/hello", (req, res) => {
    res.send("hello");
})

app.get("/rollDice", (req, res) => {
    // res.render("rollDice.ejs");

    let diceVal = Math.ceil(Math.random() * 6);
    // res.render("rollDice.ejs", {num : diceVal});
    // res.render("rollDice.ejs", {diceVal : diceVal});
    res.render("rollDice.ejs", {diceVal});
})

// app.get("/ig/:username", (req, res) => {
//     let {username} = req.params;
//     // res.send(username);
//     let followers = ["ankit", "aman", "ravi", "raushan"];
//     res.render("instagram.ejs", {username, followers});
// })

app.get("/ig/:username", (req, res) => {
    let instaData = require('./data.json');
    // console.log(instaData);
    let {username} = req.params;
    let data = instaData[username];

    if(data){
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});


// Serving static files
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));

