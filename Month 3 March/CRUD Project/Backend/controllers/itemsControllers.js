const Items = require ('./../models/ItemsModels')


const addItem = async () => {
    try {
         

        // Get item data sent from frontend
        const { name, description, sellingPrice, purchasePrice, quantity, unit } = req.body

        // Create new item object using model
        const saveItem = new Items({
            name,
            description,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        })

        // Save item into MongoDB
        await saveItem.save()

        // Send response to frontend
        res.status(201).json({
            message: "Item Created",
            data: saveItem
        })

        
    } catch (error) {
        console.log(error)
    }
}

const getAllItem = async () => {
    try {
         const items = await items.find()

        // Send data to frontend
        res.status(200).json({
            message: "Get All Item List",
            data: items
        })
    } catch (error) {
        console.log(error)
    }

}

const deleteItem = async () => {
    try {
        // Get item ID from URL parameters
        const { id } = req.params

        // Find item by ID and delete it
        const deleteItem = await Item.findByIdAndDelete(id)

        // Send success response
        res.status(200).json({
            message: "Item Deleted",
            deleteItem: deleteItem
        })

    } catch (error) {
        console.log(error)
    }

}

const editItem = async () => {
    try {
         // Here we will receive item ID and updated data from frontend
        // Then we will update record in database using mongoose update query
    } catch (error) {
        console.log(error)
    }

}

module.exports = { addItem , getAllItem , deleteItem , editItem }