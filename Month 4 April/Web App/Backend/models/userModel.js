// user list table in DB

const mongoose = require('mongoose') 


// ----------------------
// Schema - Model (Database Structure)
// ----------------------

// Define structure of user document in MongoDB
const userSchema = new mongoose.Schema({

    // user name
    name: String,

    // user email
    email: String,

    // user password
    password: string,

    
})

const Iteams = mongoose.model("Users", userSchema)

module.exports = Users