require('dotenv').config()
const express = require('express')

// body parser, чтобы была возможность парсить body
const bodyParser = require('body-parser')

//allow cors
var cors = require('cors')

const generationServices = require('./services/generation')
const resultServices = require('./services/result')
const themeServices = require('./services/test_theme')

const app = express()
// чтобы парсить application/json
app.use(bodyParser.json())
app.use(cors())


app.route('/theme').get(async (res) => {
    
    try {
        const theme = await themeServices.theme_description()
        res.send(theme)
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