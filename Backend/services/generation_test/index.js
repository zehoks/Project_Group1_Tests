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

    let arr_q_text_answer = await getAnswer(arr_q_text)
    return arr_q_text_answer
}

async function getAnswer(arr_q_text) {
  let id_question = []
  arr_q_text.forEach(element => {
    id_question.push(element.id)
  })

  let count_a = []
  //массив с количеством ответов по каждому вопросу
  for (const key in id_question) {
    const { rows } = await pool.query(
      `
      SELECT count(*)
      FROM answer_question
      WHERE question_id = $1
    `, [key])
    count_a.push(rows)
  }

  
  let id_answer = []
  for (const count in count_a) {
    //получаем id первого вопроса
    for (const key in id_question) {
      let { rows: id_first} = await pool.query(
        `
          SELECT id
          FROM answer_question
          WHERE question_id = $1
          LIMIT 1
        `, [key])
        id_answer.push({
          id_question: key,
          id_ans: getRandomAnswer(count, id_first, id_answer)
        })
    }
    
  }
  

  let arr_a_text = []
  //i = 1 // здесь ошибка
  for (const key in id_question) {
    for (const [id_question, id_ans] in id_answer) {
      if(id_question == key) {
        for (const [id, text_question] in arr_q_text) {
          if (key == id) {
            const { rows } = await pool.query(
            `
            SELECT id, answer_text
            FROM answer_question
            WHERE id = $1
            `, [id_ans])
            arr_a_text.push({
              id_answer: rows.id,
              id_question: key,
              text_question: text_question,
              text_answer: rows.answer_text
            })
            i++
          }
        }
        
      }
    }
    
  }
  return arr_a_text
}

function IsValid(key, arr) {
  flag = false
  for (const item in arr) {
    if (key == item) {
      flag = true
    }
  }
  
  return flag
}

function getRandomAnswer(key, id_first, id_answer){
  i = Math.floor(Math.random() * key + 1) + id_first - 1
    if (IsValid(i, id_answer)) {
      //id_answer.push(i + rows[0] - 1)
      return i
    } else {
      i = Math.floor(Math.random() * key + 1) + id_first - 1
    }
    return i
}

module.exports = {
  generateTest
}