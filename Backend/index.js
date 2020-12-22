require('dotenv').config()
const express = require('express')

// body parser, чтобы была возможность парсить body
const bodyParser = require('body-parser')

//allow cors
var cors = require('cors')

const generationServices = require('./services/generation_test')
const resultServices = require('./services/result_test')
const themeServices = require('./services/theme')

const app = express()
// чтобы парсить application/json
app.use(bodyParser.json())
app.use(cors())


app.route('/theme/:id').get(async (req, res) => {
    try {
        const theme = await themeServices.theme_description(Number(req.params.id) - 1)
        res.send(theme)
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
})


app.route('/test').get(async (req, res) => {
    try {
        const {theme, count_q} = req.query
        const arr_q_q_text = await generationServices.generateTest(theme, count_q)
        res.send(arr_q_q_text)
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
})

app.route('/result').post(async (req, res) => {
    const {body} = req.body
    try {
        
        const result = await resultServices.get_result(body)

        res.send( result)

    } catch (err) {
        
        res.status(500).send({
            error: err.message
        })
        
    }  
})

app.listen(80, () => {
    console.log('Server started on http://localhost:80')
})

//если мы "открываем" запрос к api, то нужно прописать и его "закрытие", 
//пушо тогда сервак постоянно будет крутиться и ожидать нас