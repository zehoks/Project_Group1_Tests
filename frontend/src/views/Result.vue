<template>
	<v-col class="mb-4" cols="12" style="background: #006699; height: 100%">
		<v-card class="mx-auto" max-width="800" elevation="5">
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
				<div style="margin-top: 20px">{{ result.result }}</div>
			</v-card-text>

			<v-card-actions>
				<v-btn outlined rounded color="orange" text elevation="5">
					<router-link to="/">Вернуться на главную</router-link>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			result: [],
		}
	},
	async created() {
		this.init()
	},
	methods: {
		async init() {
			const res1 = await this.$axios.post('/result', [
				this.$root.a[0],
				this.$root.a[1],
				this.$root.a[2],
			])
			this.result = res1.data

			//let radioGroup0 = f

			console.log(this.$root.a[0].id_question)
			console.log(this.$root.a[0].id_answer)

			//this.$root.a = [this.radioGroup0]
		},
	},
}
</script>
