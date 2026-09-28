const express = require("express");
const app = express();
// server side web application is created through this app object
// console.log(app); // print an object with different properties and methods


// famous methods
// 1. app.listen()  // used for listening incoming requests 1st uses of express
// Ports are the logical endpoints of a network connection that is used for to exchange information between a web server and a web client 
// app.listen
let port = 8080;  // 3000 used to make custom servers
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


// 2. app.use()
// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is the basic response");
//     // res.send({
//     //     name: "Apple",
//     //     color: "Red"
//     // });
//     let code = "<h1> Hello World </h1>";
//     res.send(code);
// })


// 3. app.get()
// app.get("/", (req, res) => {
//     res.send("you contacted the root path");
// });
// app.get("/apple", (req, res) => {
//     res.send("you contacted the apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("you contacted the orange path");
// });
// // app.get("*", (req, res) => {
// //     res.send("this path does not exists");
// // });
// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// });



// Path Parameters
// app.get("/", (req, res) => {
//     res.send("hello, i am root path");
// });
// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`Welcome to the page of @${username}.`);
// })




// Query Strings: 
// req.query
// app.get("/", (req, res) => {
//     res.send("hello, i am root path");
// });
app.get("/search", (req, res) => {
    // console.log(req.query);
    // res.send("No result");
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>");
    }
    res.send(`serach results for query: ${q}.`);
    // console.log(q);
});

