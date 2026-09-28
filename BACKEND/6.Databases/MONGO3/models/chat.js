const mongoose = require('mongoose');  

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const Chat = mongoose.model("chats", chatSchema);

// by the below line we are exporting the model we created in this file
module.exports = Chat;