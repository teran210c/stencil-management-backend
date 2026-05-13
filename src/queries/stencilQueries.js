const pool = require("../db")

async function getAllStencils() {
    const result = await pool.query(`
        SELECT * FROM stencil 
        ORDER BY id ASC
        `)
        return result.rows    
}
module.exports = {
    getAllStencils
}

const getStencilsTotal = async () => {

    const result = await pool.query(
        "SELECT count(*) FROM stencils"
    )

    return result[0]

}

module.exports = {
    getStencilsTotal
}
