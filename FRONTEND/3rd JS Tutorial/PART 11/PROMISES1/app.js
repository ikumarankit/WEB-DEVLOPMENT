// Promises 
// The Promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value

// before learning promises we take a suitation where callback hell exist and later on we discuss how we can improve it using promises 
// for learning promises here in code we use a small database concept: we create a function that takes data as a parameter and store it into the database

function savetoDb(data, success, failure){
    let internetSpeed = Math.ceil(Math.random() * 10);
    if(internetSpeed >  4){
        // console.log("your data was saved", data);
        success(data);
    } else {
        // console.log("weak connection! data not saved");
        failure();
    }
}

// callback hell 
// savetoDb("ankit", function(data){ 
//     console.log("success: your data was saved", data);
//     savetoDb("aman", (data)=>{
//         console.log("success2: data2 was saved", data);
//         savetoDb("riya", (data)=>{
//             console.log("success3: data3 was saved", data);
//         }, ()=>{
//             console.log("failure3: weak connection data 3 not saved");
//         })
//     }, ()=>{
//         console.log("failure2: weak connection data2 not saved");
//     })
// },  
// function(){
//     console.log("failure: weak connection! data not saved");
// });



// so this code start giving trauma, if we add one more level of data adding then may be we got paralyzed 
// in this code function calls are confusing but task is simple if data1 is stored then add data2 if data 2 is stored then add data3 if data1 is not stored then dont add data2 and data3
// this type of situation exists in real life code or production level code 
// sometimes in databases operations are performed like this only 



// so  we have promises to save us from this callback hell problem
// Promises (Promise is an object)
// The Promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value
// now we will execute success and failure using promises 

// In promise object there is two things 
// (i). resolve    // success
// (ii). reject    // failure

// Asynchronus function are the functions whose results or final output are dependent on the multiple things 
// so rather than taking callbacks as parameter in asynchronus function we return promise object from the asynchronus function 
// so asynchronus function now return promise object rather than doing work 

function savetoDatabase(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.ceil(Math.random() * 10);
        if(internetSpeed > 4){
            resolve("success: data was saved");
        } else{
            reject("failure: weak connection");
        }
    })
}

// promise has multiple state 
// (i). pending 
// (ii). rejected (error) failure 
// (iii). fulfilled (resolved) success

// so the function return promise object and now we can do future work on the basis of this promise object 

// Promises two most frequent methods 
// (i). then()  takes callback(success) as argument
// (ii). catch()  takes callback(failure) as argument

// we know promises has two state first one is fulfilled and second one is reject 
// so if we want to execute something after promise state fulfilled then we use then()
// and if we want to execute something after promise reject state then we use catch() to catch error throw by reject state of promise



// let request = savetoDatabase("ankit");   // request = promise object
// request
// .then(()=>{
//     console.log("Promise was solved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// })



// compact version of writing above code 
// savetoDatabase("ankit")
//     .then(() => {
//         console.log("Promise was solved");
//     })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });



// Promise Chaining 
// ek ke baad ek promise ko chain karna 
// when we use .then() multiple times then promise chaining is happened 

function uploadtoDatabase(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.ceil(Math.random() * 10);
        if(internetSpeed > 4){
            resolve(`Success: data ${data} was uploaded`);   // result
        } else{
            reject("Failure: weak connection");  // error
        }
    });
}

// Promise Chaining 
// more readable than callback hell
// this code do the same as line no. 18 - 34 code do 
uploadtoDatabase("ankit")
// here result argument tell why promise success 
.then((result)=>{
    console.log("Success1: Data1 was uploaded");
    console.log("result of promise: ",result);
    // here the promise object return to then()
    return uploadtoDatabase("aman");
})
.then((result)=>{
    console.log("Success2: Data2 was uploaded");
    console.log("result of promise: ",result);
    return uploadtoDatabase("riya");
})
.then((result)=>{
    console.log("Success3: Data3 was uploaded");
    console.log("result of promise: ",result);
})
// here error argument tell why promise failed
.catch((error)=>{
    console.log("Failure! Data not uploaded");
    console.log("error of promise: ",error);
});

// Promises
// promises are rejected and resolved with some data (valid results or errors)

// Promises are used to intract with API's 
// one call(request) executed then other call(request) execute 
