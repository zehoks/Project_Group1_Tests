export default {
	actions: {
		async fetchQuestion(ctx, number = 1) {
			const res12 = await this.$axios.get('/theme/' + number)
			//const question = await res12.json()
			//  this.menu12 = res12.data
			const question = res12.data
			ctx.commit('updateQuestion', question)
		},
	},
	mutations: {
		updateQuestion(state, question) {
			state.question = question
		},
	},
	state: {
		question: [],
	},
	getters: {
		allQuestion(state) {
			return state.question
		},
	},
}
