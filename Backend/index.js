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
		const theme = await themeServices.theme_description(
			Number(req.params.id) - 1
		)
		res.send(theme)
	} catch (err) {
		res.status(500).send({
			error: err.message,
		})
	}
})

app.route('/test').get(async (req, res) => {
	try {
		const { theme, count_q } = req.query
		const arr_q_ans = await generationServices.generateTest(theme, count_q)
		res.send(arr_q_ans)
	} catch (err) {
		res.status(500).send({
			error: err.message,
		})
	}
})

app.route('/result').post(async (req, res) => {
	try {
		const body = req.body
		const result = await resultServices.get_result(body)
		res.send({
			result: result,
		})
	} catch (err) {
		res.status(500).send({
			error: err.message,
		})
	}
})

app.listen(80, () => {
	console.log('Server started on http://localhost:80')
})
