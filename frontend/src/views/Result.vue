<template>
	<v-card class="mx-auto" max-width="800">
		<v-img
			class="white--text align-end"
			height="300px"
			src="https://klike.net/uploads/posts/2020-08/1597993608_2.jpg"
		>
		</v-img>

		<v-card-subtitle class="pb-0" style="font-size:2em">
			Результаты
		</v-card-subtitle>

		<v-card-text class="text--primary">
			<div style="margin-top: 20px">{{ menu1 }}</div>
		</v-card-text>

		<v-card-actions>
			<v-btn color="orange" text>
				<router-link to="/">Вернуться на главную</router-link>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			menu1: [],
		}
	},
	async created() {
		this.init()
	},
	methods: {
		async init() {
			const res1 = await this.$axios.post('/result', [
				{
					id_question: this.$root.a[0].id_question,
					id_answer: this.$root.a[0].id_answer,
				},
				{
					id_question: 149,
					id_answer: 13,
				},
			])
			this.menu1 = res1.data

			//let radioGroup0 = f
			console.log('radioGroup0')
			//this.$root.a = [this.radioGroup0]
		},
	},
}
</script>
