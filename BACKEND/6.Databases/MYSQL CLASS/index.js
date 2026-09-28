const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '3969939'
});

// to check connection early 
connection.connect((err) => {
    if (err) {
        console.error("Connection failed:", err);
    } else {
        console.log("Connected to DB");
    }
});


// we can also write query in variable and then pass it to connection.query
// // let query = 'SHOW TABLES';

// try{
//     connection.query('SHOW TABLES', (err, result) => {
//     if(err) throw err;

//     // results is in array of objects
//     console.log(result);   // [ { Tables_in_delta_app: 'temp' }, { Tables_in_delta_app: 'user' } ]
//     console.log(result.length);  // 2
//     console.log(result[0]);  // { Tables_in_delta_app: 'temp' }
//     console.log(result[1]);  // { Tables_in_delta_app: 'user' }
//     });
// } catch(err){
//     console.log(err);
// }




// // INSERTING new data 
// let q = 'INSERT INTO user VALUES (?, ?, ?, ?)';
// let user = ["123", "123_newUser", "abc@gmail.com", "abc"];

// try{
//     connection.query(q, user, (err, result) => {
//     if(err) throw err;

//     // when inserting results is in objects
//     console.log(result);  
//     console.log(result.length);  // this will print undefined because the query is for inserting not selecting 
//     });
// } catch(err){
//     console.log(err);
// }



// // INSERTING multiple users data: 
// let q = 'INSERT INTO user VALUES ?';
// let users = [
//   ["123b", "123_newUserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newUserc", "abc@gmail.comc", "abcc"],
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


// arrow function cannot be hoisted
// generates random data using faker 
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// INSERTING data in Bulk using faker 
let q = 'INSERT INTO user VALUES ?';
let data = [];
for(let i=0; i<100; i++){
  data.push(getRandomUser());  // 100 fake users data
}

try{
    connection.query(q, [data], (err, result) => {
    if(err) throw err;

    // when inserting results is in objects
    console.log(result);  
    });
} catch(err){
    console.log(err);
}
// used to terminate connection after getting result from db
connection.end();



// now in app.js we created multiple routes