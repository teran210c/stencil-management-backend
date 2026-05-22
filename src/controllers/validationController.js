const pool = require("../db")
const queries = require("../queries/validationQueries")

async function startValidation(req, res) {

    const { stencilId } = req.params

    try {
        
        const validation = await queries.createValidation(stencilId)

        res.status(201).json({
            validation: validation.id
        })

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error starting validation"
        })
        
    }
    
}

async function getValidationById (req, res) {
    const { stencilId } = req.params

    try {
        
        const validation = await queries.getValidationById(stencilId)

        res.json(validation)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Server Error"
        })
        
    }
}

async function getValidationDetails(req, res) {

    const { validationId } = req.params

    try {

        const details = await queries.getValidationDetails(validationId)

        res.json(details)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error fetching validation details"
        })

    }

}

async function updateChecklistItem(req, res) {

    const { itemId } = req.params

    const { result } = req.body

    try {
        
        const updatedItem = await queries.updateChecklistItem(
            itemId,
            result
        )

        res.json(updatedItem)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error updating checklist item"
        })
        
    }
    
}

async function completeValidation(req, res) {
    const { validationId } = req.params
    const { result } = req.body

    try {
        
        const updatedData = await queries.completeValidation(
            validationId,
            result
        )

        res.json(updatedData)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Error at completing validation"
        })
        
    }
    
}

module.exports = {
    startValidation,
    getValidationById,
    getValidationDetails,
    updateChecklistItem,
    completeValidation
}