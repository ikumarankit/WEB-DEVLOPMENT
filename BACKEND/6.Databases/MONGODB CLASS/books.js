const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// we can use the below way of writing schema when we have only datatype as constraints 
// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number
// });


// we will use the below line when we have multiple constraints 
// schemavalidation only work when we are inserting documents not when we are updating it if we want like during updation of document also the validation should check then we can use the special option called runValidators and set it to true if we want during updation the the schemaValidation Validates
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});



// Creating Model
const Book = mongoose.model("books", bookSchema); 


// Creating and inserting document in database
// const book1 = new Book({
//     title: "DC Comics",
//     price: 500,
//     category: "fiction",
//     genre: ["comics", "fiction", "superheros"]
// });

// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// so schema validation is basically rules or constraints that we defined in schema and every document must follow



// SchemaType Options 


// Schema Validation with UPDATE 
// Schema Validation rules does not  work with UPDATE 
Book.findByIdAndUpdate('6a0865ac00ecbfda3386189a', {price: -300}, {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        // we can create custom messages for validation error 
        console.log(err.errors.price.properties.message);
    })