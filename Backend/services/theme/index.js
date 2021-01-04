const pool = require('../../config/db')

/**
 * Возвращает тему и описание к ней
 * @param {number} theme - номер темы
 */
async function theme_description(theme) {
	const { rows } = await pool.query(`
    SELECT t.name, t.description
    FROM theme t
    `)

	return rows[theme]
}

module.exports = {
	theme_description,
}
