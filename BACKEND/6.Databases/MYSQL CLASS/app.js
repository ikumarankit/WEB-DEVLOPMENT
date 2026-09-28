const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// This middleware parses form data (application/x-www-form-urlencoded) and makes it accessible as a JavaScript object.
app.use(express.urlencoded({extended: true})); // to parse form-data


// for templating
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// for password 
const bcrypt = require("bcrypt");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "3969939"
});

// to check connection early 
connection.connect((err) => {
    if (err) {
        console.error("Connection failed:", err);
    } else {
        console.log("Connected to DB");
    }
});

let getRandomUser = () => {
    retrun [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password
    ];
};

// // INSERTING two more data and checking if the number of user increases or not? as task given : 
// let q = 'INSERT INTO user VALUES ?';
// let users = [
//   ["123d", "123_newUsed", "abc@gmail.comd", "abcd"],
//   ["123e", "123_newUsere", "abc@gmail.come", "abce"],
// ];

// try{
//     connection.query(q, [users], (err, result) => {
//     if(err) throw err;

//     // when inserting results is in objects
//     console.log(result);  
//     });
// } catch(err){
//     console.log(err);
// }


const port = 8080;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


// created by me just for knowledge purpose 
app.get("/index", (req, res) => {
    res.render("index");
});




// 1st route(HOME route): fetch & show total number of users on our app 
app.get("/", (req, res) => {
    try {
        const query = `SELECT count(*) FROM user`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            
            // results is in array of objects
            console.log(result); // print array of objects
            console.log(result[0]); // print object 1
            // console.log(result[0]."count(*)"); // print error because we cannot use dot operator to print key of this object 
            console.log(result[0]["count(*)"]); // print count property of object 1

            // storing total user in variable
            let userCount = result[0]["count(*)"];
            // res.send(result[0]["count(*)"]);  // gives error coz when we send a number as response then it is interpreted as status code 
            // res.send("success");
            res.render("home", {userCount});
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});




// 2nd route(SHOW route): Fetch & show (userId, username, email) for all users
app.use(express.static(path.join(__dirname,"public/css"))); // for serving static file: for this route i create a ejs file with style
app.get("/user", (req, res) => {
    try{
        const query = `SELECT * FROM user`;
        connection.query(query, (err, result) => {
            if(err) throw err;

            let data = result;
            // console.log(data);
            // res.send("success");
            res.render("users", { data });
        });
    } catch(err) {
        console.log("Error: ", err);
        res.send("some error in DB");
    }
});




// 3rd route(EDIT route): To get form to edit the username, based on id
app.use(express.static(path.join(__dirname,"public/js"))); // for serving static file:
app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
//   console.log(id);
//   console.log(typeof id);  // the id is string
//   res.send("success");


    const query = "SELECT * FROM user WHERE id = ?";
    // const query = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(query, [id], (err, result) => {
            if(err) throw err;
            if (result.length === 0) {
                return res.status(404).send("User not found");
            }

            console.log(result);
            let user = result[0];
            res.render("edit", { user });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Database error");
    }
});


// UPDATE(DB) route 
// in 3rd route for editing we send PATCH request 
// PATCH/user/:id    To edit username, if correct password was entered in form  
// because we cannot send PATCH request from form thats why we use method-override package 
app.patch("/user/:id", (req, res) => {
    // res.send("updated");
    let { id } = req.params;
    // req.body is an object that comes from your form submission
    // console.log(req.body);
    let {username: newUsername, password: formPass} = req.body;


    const query = "SELECT * FROM user WHERE id = ?";
    // const query = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(query, [id], (err, result) => {
            if(err) throw err;

            if(result.length === 0){
                return res.status(404).send("User not found");
            }
            
            // console.log(result);
            let user = result[0];
            // console.log(user);

            if(formPass != user.password){
                res.send("Wrong Password Entered!");
            } else {
                // let query = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                const updateQuery = `UPDATE user SET username = ? WHERE id = ?`;
                connection.query(updateQuery, [newUsername, id], (err, result) => {
                    if (err) throw err;
                    // res.send(result); // send result as like how many rows are changed not give any object because it is update query not display
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Database error");
    }
});





// Home work
// CREATE route  -> render add.ejs
// /user    POST request   -> post data to the database
app.use(express.static(path.join(__dirname,"public/js"))); // for serving static file:
app.get("/user/add", (req, res) => {
    res.render("add.ejs");
});


app.post("/user", (req, res) => {
    let {username, email, password} = req.body;
    let query = 'INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)';
    
    let newUser = [faker.string.uuid(), username, email, password];

    try {
        connection.query(query, newUser, (err, result) => {
            res.redirect("/user");
        });
    } catch(err){
        console.log(err);
    }
});




// Delete route 
// /user    DELETE request
app.get("/user/delete", (req, res) => {
    res.render("delete");
});


app.delete("/user", (req, res) => {
    let {email: formEmail, password: formPassword} = req.body;
    let query = "SELECT * FROM user WHERE email = ?";

    try {
        connection.query(query, [formEmail], async(err, result) => {
            if(err) throw err;

            if(result.length === 0){
                return res.status(404).send("User not found");
            }

            // console.log(result);
            // console.log(result[0]);
            let user = result[0];
            console.log(user);
            console.log(user.password);
            console.log(formPassword);


            if(formPassword != user.password){
                return res.status(404).send("Invalid password");
            } else {
                const query = "DELETE FROM user WHERE email = ?";
                connection.query(query, [user.email], (err, result) => {
                    // res.send("user deleted");
                    res.redirect("/user");
                });
            }
        });
    } catch(err){
        console.log(err);
        return res.status(500).send("Database error");
    }
});





// serach feature by me 
app.get("/search/:username", (req, res) => {
    let { username } = req.params;
    console.log(typeof username);
    // console.log(username);

    let query;
    if(username.includes("@")){
        query = "SELECT id, username, email FROM user WHERE email = ?";
    } else {
        query = "SELECT id, username, email FROM user WHERE username = ?";
    }

    connection.query(query, [username], (err, result) => {
            if(err) throw err;
            if(result.length === 0){
                return res.status(404).send("User not found");
            }

            let user = result[0];
            console.log(user);

            res.render("search", { user });
    });


    
    // if(username.includes("@")){
    //     let query = "SELECT id, username, email FROM user WHERE email = ?"
    //     connection.query(query, [username], (err, result) => {
    //         if(err) throw err;
    //         if(result.length === 0){
    //             return res.status(404).send("User not found");
    //         }

    //         let user = result[0];
    //         console.log(user);

    //         res.render("search", { user });
    //     });
    // } else {
    //     // console.log(username);
    //     let query = "SELECT id, username, email FROM user WHERE username = ?";

    //     connection.query(query, [username], (err, result) => {
    //         if (err) throw err;
    //         if (result.length === 0) {
    //             return res.status(404).send("User not found");
    //         }


    //         // console.log(result);
    //         // console.log(result);
    //         // bydefault result is array of object if we want to share object only then we use square brackets
    //         let user = result[0];
    //         console.log(user);

    //         res.render("search", { user });
    //     });
    // }
});