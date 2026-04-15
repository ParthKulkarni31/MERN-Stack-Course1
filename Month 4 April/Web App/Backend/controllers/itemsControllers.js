const Iteams = require ('./../models/ItemsModels')


const addIteam = async () => {
    try {
         

        // Get item data sent from frontend
        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body

        // Create new item object using model
        const saveIteam = new Iteams({
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        })

        // Save item into MongoDB
        await saveIteam.save()

        // Send response to frontend
        res.status(201).json({
            message: "Iteam Created",
            data: saveIteam
        })

        
    } catch (error) {
        console.log(error)
    }
}

const getAllIteam = async () => {
    try {
         const iteams = await iteams.find()

        // Send data to frontend
        res.status(200).json({
            message: "Get All Iteam List",
            data: iteams
        })
    } catch (error) {
        console.log(error)
    }

}

const deleteIteam = async () => {
    try {
        // Get item ID from URL parameters
        const { id } = req.params

        // Find item by ID and delete it
        const deleteIteam = await Iteam.findByIdAndDelete(id)

        // Send success response
        res.status(200).json({
            message: "Iteam Deleted",
            deleteIteam: deleteIteam
        })

    } catch (error) {
        console.log(error)
    }

}

const editIteam = async () => {
    try {
         // Here we will receive item ID and updated data from frontend
        // Then we will update record in database using mongoose update query
    } catch (error) {
        console.log(error)
    }

}

module.exports = { addIteam , getAllIteam , deleteIteam , editIteam }