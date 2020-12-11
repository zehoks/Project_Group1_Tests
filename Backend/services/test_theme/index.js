const pool = require('../../config/db')

async function theme_description() {
    const {theme } = await pool.query(`
    SELECT t.name, t.description
    FROM theme t
    `)

    
    return theme
}



module.exports = {
    theme_description,
}