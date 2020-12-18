const pool = require('../../config/db')

/**
 * Генерирует число в заданном диапазоне
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
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
  if (f) 
  {
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
      `)
    
    let arr_q_text = []
    for (let i = 0; i < count_q; i++) {
      arr_q_text.push({
        id: arr_q[i],
        question: rows[arr_q[i] - 1]
      })
    }

    let arr_q_text_answer = getAnswer(arr_q_text)
    return arr_q_text_answer
}

async function getAnswer(arr_q_text) {
  let id_question = []
  arr_q_text.forEach(element => {
    id_question.push(element.id)
  })

  let count_a = []
  //массив с количеством ответов по каждому вопросу
  id_question.forEach(element => {
    const { rows } = await pool.query(
      `
      SELECT count(*)
      FROM answer_question
      WHERE question_id = $1
    `, [element])
    count_a.push(rows)
  })
  
  let id_answer = []
  for (const key in count_a) {
    //получаем id первого вопроса
    for (const key in id_question) {
      const { rows } = await pool.query(
        `
          SELECT id
          FROM answer_question
          WHERE question_id = $1
        `, [key])
    }
    id_answer.push(getRandomAnswer(key, rows))
  }
  

  let arr_a_text = []
  for (const key in id_question) {
    const { rows } = await pool.query(
      `
      SELECT id, answer_text
      FROM answer_question
      WHERE id = $1
      `, [key])
      arr_a_text.push({
        id: rows.id,
        id_question: key,
        text_answer: rows.answer_text
      })
  }
  return arr_a_text
}

function IsValid(key, arr) {
  flag = false
  arr.forEach(element => {
    if (key == element){
      flag = true
    }
  })
  return flag
}

function getRandomAnswer(key, rows){
  i = getRandomIntInclusive(1, key)
    if (IsValid(i, id_answer)) {
      id_answer.push(i + rows[0] - 1)
    } else {
      i = getRandomAnswer(i, key, rows)
    }
    return i
}

module.exports = {
  generateTest
}