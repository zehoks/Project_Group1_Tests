const pool = require('../../config/db')

/**
 * Генерирует число в заданном диапазоне
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 */
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
}

/**
 * Рекурсия, добавляющяя вопросы и проверяющая, что вопросы не совпадают
 * @param {number[]} arr_q - массив вопросов
 * @param {number} count_q - количество вопросов
 * @param {number} theme - номер темы
 */
function getRandomArrQuestion(arr_q, count_q, theme, j) {
	let num_q = getRandomIntInclusive(1 + 40 * (theme - 1), 40 * theme)
	let f = true
	for (let i = 0; i < arr_q.length; i++) {
		if (arr_q[i] == num_q) f = false
	}
	if (f) {
		arr_q[j] = num_q
		j++
	}
	if (arr_q.length == count_q) return arr_q
	return getRandomArrQuestion(arr_q, count_q, theme, j)
}

/**
 * Генерирует список вопросов
 * @param {number} theme - тема теста
 * @param {number} count_q - количество вопросов
 */
async function generateTest(theme, count_q) {
	let arr_q = []
	arr_q = getRandomArrQuestion(arr_q, count_q, theme, 0)

	const { rows } = await pool.query(
		`
        Select q_text
        From question
      `
	)

	let arr_q_text = []
	for (let i = 0; i < count_q; i++) {
		arr_q_text.push({
			id: arr_q[i],
			question: rows[arr_q[i] - 1].q_text,
		})
	}

	let arr_q_text_answer = await getAnswer(arr_q_text)
	return arr_q_text_answer
}

async function getAnswer(arr_q_text) {
	//let count_a = []
	//массив с количеством ответов по каждому вопросу
	// for (const id in arr_q_text) {
	//   const { rows } = await pool.query(
	//     `
	//     SELECT count(*)
	//     FROM answer_question
	//     WHERE question_id = $1
	//   `, [id])
	//   count_a.push(rows)
	// }

	let test = []
	// for (const count in count_a) {
	//   //получаем id первого вопроса
	//   for (const id in arr_q_text) {
	//     let { rows: id_first} = await pool.query(
	//       `
	//         SELECT id
	//         FROM answer_question
	//         WHERE question_id = $1
	//         LIMIT 1
	//       `, [id])
	//       //console.log(id)
	//       id_answer.push({
	//         id_question: id,
	//         id_ans: getRandomAnswer(count, id_first, id_answer)
	//       })
	//   }

	// }
	//let answer = []
	//console.log(arr_q_text)

	for (let i = 0; i < arr_q_text.length; i++) {
		const { rows } = await pool.query(
			`SELECT id, answer_text
		    FROM answer_question
		    WHERE question_id = $1
		    `,
			[arr_q_text[i].id]
		)

		let answer = []
		for (let i = 0; i < rows.length; i++) {
			answer.push(rows[i])
		}
		let new_answer = []
		new_answer.push(getRandomArrAnswer(answer))

		test.push({
			id_question: arr_q_text[i].id,
			text_question: arr_q_text[i].question,

			answer: new_answer,
		})
	}

	//console.log(test)

	//let arr_a_text = []

	// console.log(arr_q_text)
	// for (const id in arr_q_text) {
	//   for (const [id_question, id_ans] in id_answer) {
	//     if(id_question == id) {
	//       // for (const [id, question] in arr_q_text) {
	//       //   if (key == id) {
	//           const { rows } = await pool.query(
	//           `
	//           SELECT id, answer_text
	//           FROM answer_question
	//           WHERE id = $1
	//           `, [id_ans])
	//           //console.log(rows)
	//           arr_a_text.push({
	//             id_answer: rows.id,
	//             id_question: id,
	//             text_question: arr_q_text.question,
	//             text_answer: rows.answer_text
	//           })
	//           i++
	//       //   }
	//       // }

	//     }
	//   }

	// }
	// for (const [id, question] in arr_q_text) {
	//   for (const [id_question, answer] in id_answer) {
	//     if (id == id_question){
	//       arr_a_text.push({
	//         id_question: id,
	//         text_question: question,
	//         answer: answer
	//       })
	//     }
	//   }
	// }
	//return arr_a_text
	return test
}

function getRandomInclusiveAnswer(arr_a, arr_id_answer) {
	let num_a = getRandomIntInclusive(arr_a[0].id, arr_a[arr_a.length - 1].id)
	for (let i = 0; i < arr_id_answer.length; i++) {
		if (arr_id_answer[i] == num_a) {
			num_a = getRandomInclusiveAnswer(arr_a, arr_id_answer)
		}
	}
	return num_a
}

function getRandomArrAnswer(arr_a) {
	let arr_id_answer = []
	//console.log(arr_a)

	let arr_answer_text = []

	for (let i = 0; i < arr_a.length; i++) {
		let num_a = getRandomInclusiveAnswer(arr_a, arr_id_answer)
		arr_id_answer.push(num_a)

		for (let i = 0; i < arr_a.length; i++) {
			if (num_a == arr_a[i].id) {
				arr_answer_text.push({
					id: num_a,
					answer_text: arr_a[i].answer_text,
				})
			}
		}
	}

	return arr_answer_text
}

module.exports = {
	generateTest,
}
