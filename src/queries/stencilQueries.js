const pool = require("../db")

async function getAllStencils() {
    const result = await pool.query(`
        SELECT * FROM stencil 
        ORDER BY id ASC
        `)
        return result.rows    
}

const getStencilsTotal = async () => {

    const result = await pool.query(
        "SELECT COUNT(*) FROM stencil"
    )

    return result.rows[0]

}

module.exports = {
    getAllStencils,
    getStencilsTotal
}
