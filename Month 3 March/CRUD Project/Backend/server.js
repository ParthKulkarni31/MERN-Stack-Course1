// // Backend Project

// //Node js
// //Express js                                                                    
// //DB MongoDB

// // API list
// //  1. Create iteam - Get data value from frontend {iteam details} and store into DB
// // 2. Update iteam - get iteam details from frontend which iteam we need to update
// // 3. Delete iteam - get iteam details from frontend and on delete this record from database
// // 4. get ALL Records - get ALL records from DB and show to UI frontend

console.log("Hello Node Js project is started")

const express = require('express')          //expres js is framework of node js
const app = express()                      //app=variable => stores express js


const mongoose = require('mongoose')

app.use(express.json())                   //converts all data in json format

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("MongoDB connected")).catch((error) => console.log(error))          //if it get connected then it goes in then and if not it goes in catch


const itemsSchema = new mongoose.Schema({            // Schema= database table structure model
    name: String,                                    // structure of values stored database
    description: String,
    sellingPrice: Number,
})

const Items = new mongoose.model("Items", itemsSchema)


//API 1- Create Item
app.post( "/api/create-item" , async (req , res) =>{
       try{

        const { name , description , sellingPrice } = req.body

        const saveItem = new Items(
           { name,
            description,
            sellingPrice
            }
        )
          await saveItem.save()

          res.status(201).json( {message : "Item Created" , data : saveItem})
       } catch (error){
        console.log(error)
       }
} )



//API 2- Update/Edit
app.put( "/api/update-item", (req , res) =>{
  try{
          
       } catch (error){
        console.log(error)
       }
} )


//API 1- Delete Item
app.delete("/api/delete-item " , (req , res) =>{
    try{
          
       } catch (error){
        console.log(error)
       }
})


//API 1- GetAll Item
app.get("/api/get-all-item" , async (req , res) => {
    try{
        const items = await Items.find()

        res.status(200).json({ message : "Get All Item List" , data : items})
          
       } catch (error){
        console.log(error)
       }
})

//Health API
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server Is Running" })
})
//server Start
const PORT = 9090
app.listen(PORT, () => {
    console.log('Server Started')
})