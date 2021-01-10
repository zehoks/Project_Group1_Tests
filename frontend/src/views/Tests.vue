<template>
	<v-card class="mx-auto" max-width="1000" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1">
					Вопрос № {{ menu1[0].id_question }}
				</v-list-item-title>
				<v-list-item-subtitle class="headline mb-2">
					{{ menu1[0].text_question }}</v-list-item-subtitle
				>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-container class="px-0" fluid>
				<v-radio-group v-model="radioGroup0">
					<v-radio
						v-bind:label="[this.menu1[0].answer[0][0].answer_text]"
						v-bind:value="[this.menu1[0].answer[0][0].id]"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[0].answer[0][1].answer_text]"
						value="radio-2"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[0].answer[0][2].answer_text]"
						value="radio-3"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[0].answer[0][3].answer_text]"
						value="radio-4"
					></v-radio>

					<p>Выбрано:{{ (this.$root.a.id_answer = radioGroup0[0]) }}</p>
				</v-radio-group>
				<router-link to="/Result">Result</router-link>
			</v-container>
		</v-card-actions>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1">
					Вопрос № {{ menu1[1].id_question }}
				</v-list-item-title>
				<v-list-item-subtitle class="headline mb-2">
					{{ menu1[1].text_question }}</v-list-item-subtitle
				>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-container class="px-0" fluid>
				<v-radio-group v-model="radioGroup1">
					<v-radio
						v-bind:label="[this.menu1[1].answer[0][0].answer_text]"
						value="radio-1"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[1].answer[0][1].answer_text]"
						value="radio-2"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[1].answer[0][2].answer_text]"
						value="radio-3"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[1].answer[0][3].answer_text]"
						value="radio-4"
					></v-radio>
				</v-radio-group>
			</v-container>
		</v-card-actions>
		<v-list-item three-line>
			<v-list-item-content>
				<v-list-item-title class="headline mb-1">
					Вопрос № {{ menu1[2].id_question }}
				</v-list-item-title>
				<v-list-item-subtitle class="headline mb-2">
					{{ menu1[2].text_question }}</v-list-item-subtitle
				>
			</v-list-item-content>
		</v-list-item>

		<v-card-actions>
			<v-container class="px-0" fluid>
				<v-radio-group v-model="radioGroup2">
					<v-radio
						v-bind:label="[this.menu1[2].answer[0][0].answer_text]"
						value="radio-1"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[2].answer[0][1].answer_text]"
						value="radio-2"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[2].answer[0][2].answer_text]"
						value="radio-3"
					></v-radio>
					<v-radio
						v-bind:label="[this.menu1[2].answer[0][3].answer_text]"
						value="radio-4"
					></v-radio>
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
			radio1: '',
			//radioGroup0: '22323',
			radioGroup0: '',
		}
	},
	async created() {
		this.init()
	},
	methods: {
		async init() {
			const res1 = await this.$axios.get('/test?theme=1&count_q=10')
			this.menu1 = res1.data
			//let radioGroup0 = f
			console.log('radioGroup0')
			//this.$root.a = [this.radioGroup0]
			//this.$root.a.push({ id_question: 150, id_answer: 10 })

			this.$root.a = {
				id_question: this.menu1[0].id_question,
			}
		},
	},
}
</script>
