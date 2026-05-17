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

module.exports = {
    startValidation,
    getValidationById
}