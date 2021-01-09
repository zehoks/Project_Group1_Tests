export default {
	actions: {
		async fetchQuestion(ctx, number = 2) {
			const res2 = await this.$axios.get('/theme/' + number)

			const question = res2
			//  this.menu12 = res12.data
			//	const question = res12.data
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
