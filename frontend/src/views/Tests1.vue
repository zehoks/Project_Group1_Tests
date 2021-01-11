<template>
	<v-col class="mb-4" cols="12" style="background: #006699; height: 100%">
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[0].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[0].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup0">
						<v-radio
							v-bind:label="[this.menu1[0].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[0].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[0].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[0].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[0].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[0].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[0].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[0].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[0].id_answer = radioGroup0[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[1].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[1].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup1">
						<v-radio
							v-bind:label="[this.menu1[1].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[1].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[1].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[1].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[1].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[1].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[1].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[1].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[1].id_answer = radioGroup1[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[2].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[2].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup2">
						<v-radio
							v-bind:label="[this.menu1[2].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[2].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[2].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[2].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[2].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[2].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[2].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[2].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[2].id_answer = radioGroup2[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[3].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[3].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup3">
						<v-radio
							v-bind:label="[this.menu1[3].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[3].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[3].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[3].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[3].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[3].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[3].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[3].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[3].id_answer = radioGroup3[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[4].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[4].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup4">
						<v-radio
							v-bind:label="[this.menu1[4].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[4].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[4].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[4].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[4].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[4].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[4].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[4].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[4].id_answer = radioGroup4[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[5].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[5].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup5">
						<v-radio
							v-bind:label="[this.menu1[5].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[5].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[5].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[5].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[5].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[5].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[5].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[5].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[5].id_answer = radioGroup5[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[6].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[6].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup6">
						<v-radio
							v-bind:label="[this.menu1[6].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[6].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[6].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[6].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[6].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[6].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[6].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[6].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[6].id_answer = radioGroup6[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[7].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[7].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup7">
						<v-radio
							v-bind:label="[this.menu1[7].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[7].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[7].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[7].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[7].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[7].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[7].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[7].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[7].id_answer = radioGroup7[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[8].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[8].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup8">
						<v-radio
							v-bind:label="[this.menu1[8].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[8].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[8].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[8].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[8].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[8].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[8].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[8].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[8].id_answer = radioGroup8[0]) }}</p>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
		<v-alert border="left" elevation="4" max-width="1000" style="margin: auto">
			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">
						<font face="serif">Вопрос № {{ menu1[9].id_question }}</font>
					</v-list-item-title>
					<v-banner single-line></v-banner>
					<v-list-item-subtitle class="headline mb-2">
						<font face="serif">{{ menu1[9].text_question }}</font>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-card-actions>
				<v-container class="px-0" fluid border="left" style="margin-left: 40px">
					<v-radio-group v-model="radioGroup9">
						<v-radio
							v-bind:label="[this.menu1[9].answer[0][0].answer_text]"
							v-bind:value="[this.menu1[9].answer[0][0].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[9].answer[0][1].answer_text]"
							v-bind:value="[this.menu1[9].answer[0][1].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[9].answer[0][2].answer_text]"
							v-bind:value="[this.menu1[9].answer[0][2].id]"
						></v-radio>
						<v-radio
							v-bind:label="[this.menu1[9].answer[0][3].answer_text]"
							v-bind:value="[this.menu1[9].answer[0][3].id]"
						></v-radio>

						<p>Выбрано:{{ ($root.a[9].id_answer = radioGroup9[0]) }}</p>
						<v-btn outlined rounded text elevation="5">
							<div class="about">
								<p class="subheading font-weight-regular">
									<router-link to="/Result" style="color: orange"
										>Завершить тест</router-link
									>
								</p>
							</div>
						</v-btn>
					</v-radio-group>
				</v-container>
			</v-card-actions>
		</v-alert>
	</v-col>
</template>

<script>
export default {
	data() {
		return {
			menu1: [],
			radio1: '',
			//radioGroup0: '22323',
			radioGroup0: '',
			radioGroup1: '',
			radioGroup2: '',
			radioGroup3: '',
			radioGroup4: '',
			radioGroup5: '',
			radioGroup6: '',
			radioGroup7: '',
			radioGroup8: '',
			radioGroup9: '',
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

			this.$root.a[0] = {
				id_question: this.menu1[0].id_question,
			}
			this.$root.a[1] = {
				id_question: this.menu1[1].id_question,
			}
			this.$root.a[2] = {
				id_question: this.menu1[2].id_question,
			}
			this.$root.a[3] = {
				id_question: this.menu1[3].id_question,
			}
			this.$root.a[4] = {
				id_question: this.menu1[4].id_question,
			}
			this.$root.a[5] = {
				id_question: this.menu1[5].id_question,
			}
			this.$root.a[6] = {
				id_question: this.menu1[6].id_question,
			}
			this.$root.a[7] = {
				id_question: this.menu1[7].id_question,
			}
			this.$root.a[8] = {
				id_question: this.menu1[8].id_question,
			}
			this.$root.a[9] = {
				id_question: this.menu1[9].id_question,
			}
		},
	},
}
</script>
