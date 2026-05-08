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

