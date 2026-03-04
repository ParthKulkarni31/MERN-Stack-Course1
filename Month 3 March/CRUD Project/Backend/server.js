// // Backend Project

// //Node js
// //Express js
// //DB MongoDB

// // API list

// //  1. Create iteam - Get data value from frontend {iteam details} and store into DB

// // 2. Update iteam - get iteam details from frontend which iteam we need to update

// // 3. Delete iteam - get iteam details from frontend and on delete this record from database

// // 4. get ALL Records - get ALL records from DB and show to UI frontend

// const getData = () => {

// }

// function getData(){
    
// }

console.log("Hello Node Js project is started")

const express = require('express')          //expres js is framework of node js
const app = express()                      //app=variable => stores express js


const mongoose = require('mongoose')

app.use(express.json())                   //converts all data in json format

mongoose.connect("mongodb://localhost:27017/item-database").then( () => console.log("MongoDB connected")).catch( (error) => console.log(error) )          //if it get connected then it goes in then and if not it goes in catch


const itemsSchema = new mongoose.Schema({            // Schema= database table structure model
    name: String,                                    // structure of values stored database
    description : String,
    sellingPrice : Number,
})

const Items = new mongoose.model("Items", itemsSchema)