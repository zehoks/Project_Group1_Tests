<template>
	<v-col class="mb-4" cols="12">
		<v-card class="mx-auto" max-width="844" outlined>
			<v-list-item three-line>
				<v-list-item-content>
					<div class="overline mb-4">
						Тест
					</div>
					<v-list-item-title class="headline mb-1">
						{{ menu1.name }}
					</v-list-item-title>
					<v-list-item-subtitle>
						{{ this.$root.a }}
					</v-list-item-subtitle>
				</v-list-item-content>

				<v-list-item-avatar tile size="100" color="red"></v-list-item-avatar>
			</v-list-item>

			<v-card-actions>
				<v-btn outlined rounded text>
					<div class="about">
						<p class="subheading font-weight-regular">
							<router-link to="/Tests">Сформировать тест</router-link>
						</p>
					</div>
				</v-btn>
			</v-card-actions>
		</v-card>

		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined>
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							{{ menu2.name }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu2.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-avatar tile size="100" color="blue"></v-list-item-avatar>
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
		</v-col>

		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined>
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							{{ menu3.name }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu3.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-avatar
						tile
						size="100"
						color="black"
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
		</v-col>

		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined>
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							{{ menu4.name }}
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu4.description }}
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
		</v-col>
	</v-col>
</template>

<script>
//import axios from 'axios'
//axios стал глобальным
//Vue.component('compotenA', {   })

export default {
	data() {
		//var x = +document.getElementById('numberValue').textContent //string to Number;
		//const t = 3
		//	Vue.component('compotenA', {   })

		return {
			menu1: [],
			menu2: [],
			menu3: [],
			menu4: [],

			//t: [2],
			//	x: +document.getElementById('numberValue'),
			selected: '1',
			selected1: '3',
			cou: 10,
		}
	},
	async created() {
		this.init()
	},
	methods: {
		async init() {
			//	Vue.component('compoten-a', {y: +document.getElementById('nnumberValue'),})
			//Vue.component('compotenA', {   })
			const res1 = await this.$axios.get('/theme/1')
			this.menu1 = res1.data
			const res2 = await this.$axios.get('/theme/2')
			this.menu2 = res2.data
			const res3 = await this.$axios.get(`/theme/${this.selected1}`)
			this.menu3 = res3.data
			const res4 = await this.$axios.get('/theme/4')
			this.menu4 = res4.data
			console.log('we are in init function')
		},
	},
}
</script>
