const pool = require('../../config/db')

async function get_result(answer_for_check) {
	let count_true_answer = 0
	let count_question = 0
	for (let i = 0; i < answer_for_check.length; i++) {
		const { rows: true_answer } = await pool.query(
			`
        SELECT id, question_id
        FROM answer_question
        WHERE result_ = 1 AND question_id = $1`,
			[answer_for_check[i].id_question]
		)

		if (answer_for_check[i].id_answer == true_answer[0].id) {
			count_true_answer++
		}
		count_question++
	}

	let res = Math.round((count_true_answer / count_question) * 100)
	let value = 30
	if (res >= 30) {
		value = 70
	} else if (res >= 70) {
		value = 100
	}

	const { rows: theme } = await pool.query(
		`
        SELECT theme_id 
        FROM theme_question
        WHERE question_id = $1
	    `,
		[answer_for_check[0].id_question]
	)

	const { rows } = await pool.query(
		`
        SELECT phrase
        FROM theme_phrase
        WHERE theme_id = $1 and max_value = $2
	    `,
		[theme[0].theme_id, value]
	)
	let final_res =
		'Вы набрали: ' + res + '% правильных ответов. ' + rows[0].phrase

	return final_res
}

module.exports = {
	get_result,
}
