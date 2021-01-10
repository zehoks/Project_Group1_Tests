<template>
	<v-col cols="12">
		<v-text-field
			v-model="numberValue"
			min="5"
			max="40"
			style="width: 60px"
			single-line
			type="number"
		/>
		//работает
		<span>Выбрано: {{ numberValue }}</span>
		<v-card>
			<select v-model="selected">
				<option disabled value="">Выберите один из вариантов</option>
				<option> /test?theme=1&count_q=5</option>
				<option>/test?theme=1&count_q=10</option>
				<option>/test?theme=1&count_q=15</option>
			</select>

			<div class="about">
				<p class="subheading font-weight-regular">
					<router-link v-bind:to="selected">Сформировать тест</router-link>
				</p>
			</div>
		</v-card>
		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined>
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Tests
						</div>
						<v-list-item-title class="headline mb-1">
							{{ menu1.name }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu1.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-avatar
						tile
						size="100"
						color="green"
					></v-list-item-avatar>
				</v-list-item>

				<v-card-actions>
					<v-btn outlined rounded text>
						<div class="about">
							<p class="subheading font-weight-regular">
								<router-link to="/">Сформировать тест</router-link>
							</p>
						</div>
					</v-btn>
				</v-card-actions>
			</v-card>
			<div id="app">
				<div
					class="question"
					v-for="question in allQuestion"
					:key="question.id"
				>
					<h2>{{ question.name }}</h2>
					<p>{{ question.description }}</p>
				</div>
			</div>
		</v-col>
	</v-col>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	// computed:{
	// 	allQuestion(){
	// 		return this.$store.getters.allQuestion;
	// 	}
	// },
	computed: mapGetters(['allQuestion']),
	methods1: mapActions(['fetchQuestion']),
	async mounted() {
		this.fetchQuestion(4)
	},

	data() {
		//	var x = +document.getElementById('numberValue').textContent //string to Number;

		return {
			cou: 10,
			selected: '',
			menu1: [],
			//	x: +document.getElementById('numberValue').textContent,
		}
	},
	async created() {
		this.init()
	},
	methods: {
		async init() {
			const res1 = await this.$axios.get(`/theme/${this.selected}`)
			this.menu1 = res1.data

			console.log('we are in init function')
		},
	},
}
</script>
