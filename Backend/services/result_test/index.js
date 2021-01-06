const pool = require('../../config/db')

//В answer_for_checking находятся id_question, id_answer
//**
/* Получает число правильных ответов
 * @param {Number[number[], number[]]} answer_for_check - массив массивов (id вопросов, id ответов)
 */
async function get_result(answer_for_check) {
	//console.log(answer_for_check)
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
	//console.log(count_question, count_true_answer)

	let res = (count_true_answer / count_question) * 100
	//console.log(res)
	return res
}

module.exports = {
	get_result,
}
