const pool = require("../db")

async function createValidation(stencilId) {

    const validationResult = await pool.query(
        `
        INSERT INTO stencil_validation (
            stencil_id,
            result
        )
        VALUES (
            $1,
            'pending'
        )
        RETURNING *        
        `,
        [stencilId]
    )

    const validation = validationResult.rows[0]

    const templateResult = await pool.query(
        `
        SELECT * FROM validation_checklist_template
        `
    )

    const templateItems = templateResult.rows

    for (const item of templateItems) {

        console.log("Creating Checklist item")
        console.log(item)

        await pool.query(
            `
            INSERT INTO validation_checklist (
                validation_id,
                item_name,
                result
            )
            VALUES (
                $1,
                $2,
                'PENDING'
            )
            `,
            [
                validation.id,
                item.item_name
            ]
        )
    }

    return validation

}

const getValidationById = async (stencilId) => {

    const result = await pool.query(
        `
        SELECT * FROM stencil_validation
        WHERE id = $1
        `,
        [stencilId]
    )

    return result.rows[0]

}

const getValidationDetails = async (validationId) => {

    const validationResult = await pool.query(
        `
        SELECT
            v.id,
            v.result,
            v.created_at,

            s.id AS stencil_id,
            s.number,
            s.vendor,
            s.location

        FROM stencil_validation v

        JOIN stencil s
        ON v.stencil_id = s.id

        WHERE v.id = $1
        `,
        [validationId]
    )

    const checklistResult = await pool.query(
        `
        SELECT
            id,
            item_name,
            result,
            notes

        FROM validation_checklist

        WHERE validation_id = $1
        `,
        [validationId]
    )

    return {
        validation: validationResult.rows[0],
        checklist: checklistResult.rows
    }

}

module.exports = {
    createValidation,
    getValidationById,
    getValidationDetails
}