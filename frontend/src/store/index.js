import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		question,
	},
	a: [
		{
			id_question: 1,
			id_answer: 1,
		},
		{
			id_question: 1,
			id_answer: 1,
		},
		{
			id_question: 2,
			id_answer: 2,
		},
	],
})
