<template>
	<v-col cols="12">
		<div id="app">
			<p>{{ this.$store.state.count }}</p>
			<p>
				<button @click="increment">+</button>
			</p>
		</div>
	</v-col>
</template>

<script>
export default {
	// store,
	// data() {
	// 	return {
	// 		message: 'Hello world',
	// 		att: '32',
	// 	}
	// },
	// async created() {
	// 	this.init()
	// },
	// methods: {
	// 	async init() {},
	// 	increment() {
	// 		this.$store.commit('increment')
	// 		console.log(this.$store.state.count)
	// 	},
	// },
}
</script>
