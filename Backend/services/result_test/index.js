const pool = require('../../config/db')

//В answer_for_checking находятся id_question, id_answer
async function get_result(answer_for_check) {
    const {rows: true_answer } = await pool.query(`
    SELECT id, question_id, result_
    FROM answer_question
    WHERE result_ = 1 AND question_id in (${answer_for_check.id_question})
    ` )

    let count_true_answer = 0
    let count_question = 0
    for (const i of answer_for_check) {
        count_question++
        for (const j of true_answer) {
            if (j.question_id == i.id_question){
                if (i.id_answer == j.result_){
                    count_true_answer++
                }
            }
        }
    }
    
    return count_true_answer, count_question
}



module.exports = {
    get_result,
}