// Now we will gonna learn about API's 
// In starting of the web development we learn about the request response cycle in which if we serach url of any website then a request will be send to that website server let's say we serach for amazon.com and then amazon server send response in the form of html css and js which will we converted into a proper webpage by the browser 
// Like this in this chapter we will send request to API and API gave some responses let see 
// here in response we will get html css and js here we will get some raw data in response 
// example of response in API is like in instagram or facebook if we like some post then the instagram or facebook not reload again just the like count increase and and the button color change to red so here not the entire instagram or facebook refresh or reload just the small part changes 
// so we change some thing without reloading the page with the help of request response cycle using API 

// API 
// Application Programming Interface 
// API is like waiter that takes request gave some response 
// So API is waiter that takes order(request) from customers(client) and go to the kitchen(server) takes the food(response) from kitchen(server) and give it to the customers(client)
// each servers has its own APIs 
// users or customers cannot access servers directly it can access APIs 
// in our projects also when we create server in node js we will also create APIs so that users can connect with our server 

// so now we will learn how to use API of others people server and when we talk about server side coding then we will create our own APIs 
// Two software are intract through API 
// APIs that use HTTP Protocol(intract softwares on the basis of internet) are the Web APIs
// in programming or web devlopment we are dealing with web APIs(uses HTTP protocol) itself

// normally in request respone cycle we got response in the form of html, css and js but 
// here in the case of web API we got some data in response which is in JSON format 
// API enpoints means URL 


// APIs Example 
// There are multiple APIs exists 
// https://catfact.ninja/fact (sends random cat facts)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)
// JSON is not exactly java script object 
// JSON format data is not readable for user it is readable for computers 
// Generally we send API request using Js code not by searching api endpoints on browser 


// JSON (data format) 
// JavaScript Object Notation 
// JSON format is used in any programming languages 
// before JSON format there is a format called XML(Extensiveble Markup language) format
// so generally jo pahle APIs banti thi wo XML format(similar to HTML Format) me data return karta tha 
// in XML we can create our own custom tags on the basis of data 
// JSON is similar to javaScript object because it contains key value pair just like js object 
// JSON is not exactly java script object 
// in js object key is not is strings but in JSON key is in strings and undefined value is valid in js objects but not in JSON
// to learn more about json 
// www.json.org
// there is also a many online json validator which tells which json format is correct or incorrect 


// when we got data(JSON data format) response from web API it is in the form of string
// Accessing Data from JSON 
// to access data we have two methods 
// (i). JSON.parse(data) Method 
// To parse a string data into a JS object 
// to remove the string format of the data we use JSON.parse(data) method 

let jsonRes = '{"fact":"The average lifespan of an outdoor-only (feral and non-feral) is about 3 years; an indoor-only cat can live 16 years and longer. Some cats have been documented to have a longevity of 34 years.","length":192}';
let valRes = JSON.parse(jsonRes);
console.log(valRes);
console.log(valRes.fact);

// (ii). JSON.stringify(js object) Method 
// To parse a JS object data into JSON 
// used when we make our own APIs 
let student = {
    name: "ankit",
    marks: 33,
};
console.log(JSON.stringify(student));


// Testing API requests 
// Tools (for developers)
// (i). Hoppscotch (online available)
// (ii). Postman  (we have to download it)


// Ajax / Ajaj
// Asynchronus javaScript and XML 
// This is basically a whole process where we send API some request and we get some data in response all this happens asynchronusly 
// we know the process of API request and respond is asynchronus no reloading of page happens 


// HTTP Verbs 
// Examples: 
// .GET
// .POST
// .DELETE 


// HTTP RESPONSE STATUS CODES
// Examples:
// . 200 - OK
// . 404 - Not Found
// . 400 - Bad Request 
// . 500 - Internal Server Error 


// Add Information in URLs 
// Query Strings (key = value pair): provide additional information to the URL
// https://www.google.com/search?q=harry+porter
// here key = q   (key is constant)
// Value = harry + porter (value can be variable)


// HTTP Headers: Supply additional information (in both req, res)
// Header, value 


// Now we actually use js code to send api request and then receive the response 
// Our First Request 
// using Fetch 
// Befor fetch the api request is send by XMLHttpRequest object but using this we have problems like we are not able to use async and promises concepts here  
// fetch(url (api endpoint))
// fetch method return promise and by using promise methods like then and catch we use it for api response

let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         // by using res.json our data becomes redable 
//         return res.json()
//     })
//     .then((data1) => {
//         console.log("Data1: ",data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         // by using res.json our data becomes redable 
//         return res.json()
//     })
//     .then((data2) => {
//         console.log("Data2: ",data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR: ", err);
//     })

// console.log("I am invincible");



async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(err) {
        console.log("ERROR: ",err)
    }
}
getFacts();