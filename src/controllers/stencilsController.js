const queries = require("../queries/stencilQueries")

async function getStencils(req, res) {
    try {

        const stencils = await queries.getAllStencils()

        res.json(stencils)

    } catch (error) {

        console.error(error)

        res.status(500).json({

            error: "Error fetching stencils"

        })

    }

}

async function getStencilById(req, res) {
    const { stencilId } = req.params

    try {

        const stencil = await queries.getStencilById(stencilId)

        res.json(stencil)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Server error"
        })

    }

}

async function getDashboardData(req, res) {

    try {

        const data = await queries.getDashboardData()

        res.json(data)


    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Server error"
        })

    }

}

async function getExpiringStencils(req, res) {

    try {

        const stencils = await queries.getExpiringStencils()

        res.json(stencils)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error fetching expiring stencils"
        })

    }

}

async function getRecentActivity(req, res) {

    try {

        const activity = await queries.getRecentActivity()

        res.json(activity)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: "Error fetching activity"
        })

    }

}

module.exports = {
    getStencils,
    getStencilById,
    getDashboardData,
    getExpiringStencils,
    getRecentActivity
}