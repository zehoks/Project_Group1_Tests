import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		question,
	},
	a: [],
	b: [],
	c: [],
	d: [],
})
