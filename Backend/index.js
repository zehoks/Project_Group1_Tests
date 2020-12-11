require('dotenv').config()
const express = require('express')

// body parser, чтобы была возможность парсить body
const bodyParser = require('body-parser')

//allow cors
var cors = require('cors')

const generationServices = require('./services/generation')
const resultServices = require('./services/result')

const app = express()
// чтобы парсить application/json
app.use(bodyParser.json())
app.use(cors())


app.listen(80, () => {
    console.log('Server started on http://localhost:80')
})

//если мы "открываем" запрос к api, то нужно прописать и его "закрытие", 
//пушо тогда сервак постоянно будет крутиться и ожидать нас