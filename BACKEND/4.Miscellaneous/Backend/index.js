const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

app.use(express.urlencoded({extended : true}));  // middleware
app.use(express.json());  // middleware

app.get("/register", (req, res) => {
    let {user, pass} = req.query;
    res.send(`Standard GET response! Welcome ${user}`);
})

app.post("/register", (req, res) => {
    let {user, pass} = req.body;
    res.send(`Standard GET response! Welcome ${user}`);
})