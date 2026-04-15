require('dotenv').config()
console.log(process.env.PORT , "===>")
// Backed Project // Node js  // Express Js // DB - MongoDb 

// Import Express framework (used to create server and APIs)
const express = require('express') 

// Create express application instance
const app = express() 

// Import CORS library (allows frontend apps to call backend APIs)
const cors = require('cors') 
const { connectDB } = require('./config/db')  
const { addIteam, editIteam, deleteIteam, getAllIteam } = require('./controllers/itemsControllers')                                                                                                                                                                                                                                                                                                                                                                                      

// Middleware: convert incoming request data into JSON format
app.use(express.json()) 

// Middleware: enable Cross-Origin Resource Sharing
app.use(cors()) 

// MongoDB

connectDB()

// POST API to create new item
app.post("/api/create-item", addIteam )

// PUT API used to update existing item
app.put("/api/update-item", editIteam )

// DELETE API to remove item from database
app.delete("/api/delete-item/:id", deleteIteam )

// API 4 - Get All Items
// ----------------------

// GET API to fetch all items from database
app.get("/api/get-all-item", getAllIteam )

// Simple API to check server is running or not
app.get("/helth", (req, res) => {

    res.status(200).json({
        message: "Server is Runing"
    })

})



// ----------------------
// Server Start
// ----------------------

// Define port number where server will run
const PORT = process.env.PORT || 1010

// Start express server
app.listen(PORT, () => {

    // Show message when server starts
    console.log(`Server is running ${PORT}`)

})