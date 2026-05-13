const queries = require("../queries/stencilQueries")

async function getStencils(req, res) {
    try {

        const stencils = await queries.getAllStencils()

        res.json(stencils)

    } catch(error) {

        console.error(error)

        res.status(500).json({

            error: "Error fetching stencils"

        })

    }   

}

module.exports = {
    getStencils
}

async function  getStencilsTotal(req, res) {

    try {
        
        const total = await queries.getStencilsTotal()

        res.json(total)


    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Server error"
        })
        
    }
    
}

module.exports = {
    getStencilsTotal
}