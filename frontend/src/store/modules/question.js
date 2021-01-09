export default {
	actions: {
		async fetchQuestion(ctx, number = 2) {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=' + number
			)
			const question = await res.json()
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
