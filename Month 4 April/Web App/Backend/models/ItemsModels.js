const mongoose = require('mongoose') 


// ----------------------
// Schema - Model (Database Structure)
// ----------------------

// Define structure of item document in MongoDB
const iteamsSchema = new mongoose.Schema({

    // Item name
    name: String,

    // Item description
    decription: String,

    // Selling price of item
    sellingPrice: Number,

    // Purchase price of item
    purchasePrice: Number,

    // Available quantity
    quantity: Number,

    // Unit type (kg, pcs, box etc)
    unit: String
})

const Iteams = mongoose.model("Iteams", iteamsSchema)

module.exports = Iteams