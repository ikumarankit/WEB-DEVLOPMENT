const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid') ;
const methodOveride = require('method-override');



// app.set() is used to configure setting 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use for Static files middleware
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.urlencoded({ extended : true}));

// app.use for seding PATCH request from form 
app.use(methodOveride('_method'));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('server working well');
// })

let posts = [
    {
        id: uuidv4(),
        username: "ikumarankit",
        content: "Hello, How i can be a good software engineer?"
    }, 
    {
        id: uuidv4(),
        username: "ikumarankitt",
        content: "Hello, How can i create fake account?"
    },
    {
        id: uuidv4(),
        username: "helloBaba",
        content: "Hello, What skills should i learn in 2026?"
    },
];

// First API to see all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});


// Second API to create new post
// Second API first path
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


// Second API second path
app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});

    // res.send("post request working");
    res.redirect("/posts");
});


// Third API to get post based on id 
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);

    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});


// Forth API to edit specific post 
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(id);
    // console.log(newContent);

    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // res.send("patch request working");
    res.redirect('/posts');
});


app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
}); 


// Last CRUD operation that is DELETE using REST API 
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    // res.send("Delete Success");
    
    posts = posts.filter((p) => id !== p.id);
    res.redirect('/posts');
});