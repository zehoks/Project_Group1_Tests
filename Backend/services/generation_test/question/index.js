const pool = require('../../../config/db')

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
    return arr_q_text
}

module.exports = {
  generateTest,
}