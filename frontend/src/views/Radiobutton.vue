<template>
	<v-card class="mx-auto" max-width="1000" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1">
					Вопрос № 1
				</v-list-item-title>
				<v-list-item-subtitle class="headline mb-2">
					{{ menu1[0].text_question }}</v-list-item-subtitle
				>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-container class="px-0" fluid>
				<v-radio-group v-model="radioGroup">
					<v-radio
						v-html="`${this.menu1[0].answer.answer_text}`"
						value="radio-1"
					></v-radio>
					<v-radio
						label="`Option2 ${this.menu1[0].text_question}`"
						value="radio-2"
					></v-radio>
					<v-radio
						label="`Option3 ${menu1[0].text_question}`"
						value="radio-3"
					></v-radio>
					<v-radio label="Option 4" value="radio-4"></v-radio>
				</v-radio-group>
			</v-container>
		</v-card-actions>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1">
					Вопрос № 2
				</v-list-item-title>
				<v-list-item-subtitle class="headline mb-2">
					{{ menu1[1].text_question }}</v-list-item-subtitle
				>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-container class="px-0" fluid>
				<v-radio-group v-model="radioGroup">
					<v-radio
						v-html="`${this.menu1[1].answer.answer_text}`"
						value="radio-1"
					></v-radio>
					<v-radio
						label="`Option2 ${this.menu1[1].text_question}`"
						value="radio-2"
					></v-radio>
					<v-radio
						label="`Option3 ${menu1[1].text_question}`"
						value="radio-3"
					></v-radio>
					<v-radio label="Option 4" value="radio-4"></v-radio>
				</v-radio-group>
			</v-container>
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
			const res1 = await this.$axios.get('/test?theme=1&count_q=3')
			this.menu1 = res1.data

			console.log('we are in init function')
		},
	},
}
</script>
