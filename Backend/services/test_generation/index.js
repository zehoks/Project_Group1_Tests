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
  if (arr_q.length == count_q) return arr_q
  let num_q = getRandomIntInclusive(1 + 40 * (theme - 1), 40 * theme)
  //if (arr_q.length == 0) arr_q.push(num_q)
  //console.log(arr_q.length)
  for (let i = 0; i < arr_q.length; i++) {
    console.log(arr_q.length, arr_q[i])
  }
  let f = true
  for (let i = 0; i < arr_q.length; i++) {
    if (arr_q[i] == num_q) f = false
  }
  if (f) 
  {
    arr_q[j] = num_q
    j++
  }
  else getRandomArrQuestion(arr_q, count_q, theme, j)
  console.log('\n')
  // for (let i = 0; i < arr_q.length;) {
  //   if (num_q == arr_q[i]) getRandomArrQuestion(arr_q, count_q, theme)
  //   else if (arr_q.length < count_q) 
  //   {
  //     arr_q[i] = num_q
  //     i++
  //   }
  // }
}

/**
 * Генерирует список вопросов
 * @param {number} theme - тема теста
 * @param {number} count_q - количество вопросов
 */
async function generateTest(theme, count_q) {

    let arr_q = []
    arr_q = getRandomArrQuestion(arr_q, count_q, theme, 0)
    console.log(arr_q[0])
    const { rows } = await pool.query(
        `
        Select q_text
        From question
      `,
        [theme]
      )
    
    let arr_q_text = []
    for (let i = 0; i < arr_q_text.length; i++) {
      arr_q_text.push({
        id: arr_q[i],
        question: rows[arr_q[i]]
      })
    }
    
    return arr_q_text
}

module.exports = {
  generateTest,
}