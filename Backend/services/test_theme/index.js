const pool = require('../../config/db')

async function theme_description() {
    const { rows } = await pool.query(`
    SELECT t.name, t.description
    FROM theme t
    `)

    return rows
}

module.exports = {
    theme_description,
}