const express = require('expre');
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})

// Our 1st Middleware:
// app.use(middleware-function)
// we use app.use for middleware because we want it works with all request
// if we dont define the the path in app.use() then it(middleware) will execute for all paths
app.use((req, res, next) => {
    console.log("Hi, i am 1st middleware");
    // res.send("middleware finished")
    next();
});



app.use((req, res, next) => {
    console.log("Hi, i am 2nd middleware");
    // res.send("middleware finished")
    next();
});



app.get("/", (req, res) => {
    res.send("Root Working");
});


app.get("/random", (req, res) => {
    res.send("Random path working");
});


