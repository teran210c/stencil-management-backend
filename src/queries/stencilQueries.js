const pool = require("../db")

async function getAllStencils() {
    const result = await pool.query(`
        SELECT * FROM stencil 
        ORDER BY id ASC
        `)
    return result.rows
}

const getStencilById = async (stencilId) => {

    const result = await pool.query(
        `SELECT * FROM stencil
        WHERE id = $1     
        `,
        [stencilId]
    )

    return result.rows[0]
}

const getDashboardData = async () => {

    const result = await pool.query(`
        SELECT
            COUNT(*) AS total,

            COUNT(*) FILTER (
                WHERE status = 'PASSED'
            ) AS approved,

            COUNT(*) FILTER (
                WHERE status = 'PENDING'
            ) AS expiring,

            COUNT(*) FILTER (
                WHERE expiration_date < CURRENT_DATE
            ) AS expired

        FROM stencil
    `)

    return result.rows[0]

}

const getExpiringStencils = async () => {

    const result = await pool.query(
        `
        SELECT
            id,
            number,
            status,
            (expiration_date - CURRENT_DATE) AS days_left

        FROM stencil

        WHERE expiration_date <= CURRENT_DATE + INTERVAL '5 days'

        ORDER BY expiration_date ASC

        LIMIT 10
        `
    )

    return result.rows

}

const getRecentActivity = async () => {

    const result = await pool.query(
        `
        SELECT
            v.id,
            s.number,
            v.result,
            v.validation_date
    FROM stencil_validation v
    JOIN stencil s
    ON v.stencil_id = s.id
    WHERE v.result IN ('PASSED', 'FAILED')
    ORDER BY v.validation_date DESC
    LIMIT 10
        `
    )

    return result.rows

}

module.exports = {
    getAllStencils,
    getStencilById,
    getDashboardData,
    getExpiringStencils,
    getRecentActivity
}
