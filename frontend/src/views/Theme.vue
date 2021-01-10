<template>
	<v-col class="mb-4" cols="12" style="background: #006699; height: 100%">
		<v-card class="mx-auto" max-width="1000">
			<v-img
				src="https://rostovdrive.ru/wp-content/uploads/2020/09/testi-v2.orig_.jpg"
				height="300px"
			></v-img>
		</v-card>
		<v-card
			class="mx-auto"
			max-width="844"
			outlined
			elevation="5"
			style="margin-top: 20px"
		>
			<v-list-item three-line>
				<v-list-item-content>
					<div class="overline mb-4">
						Тест
					</div>
					<v-list-item-title class="headline mb-1">
						<font face="serif">{{ menu1.name }}</font>
					</v-list-item-title>
					<v-list-item-subtitle>
						{{ menu1.description }}
					</v-list-item-subtitle>
				</v-list-item-content>

				<v-img
					class="white--text align-end"
					max-height="100"
					max-width="200"
					src="https://hi-news.ru/wp-content/uploads/2020/02/space_060241612.jpg"
				>
				</v-img>
			</v-list-item>

			<v-card-actions>
				<v-btn outlined rounded text elevation="5">
					<div class="about">
						<p class="subheading font-weight-regular">
							<router-link to="/Tests" style="color: orange"
								>Сформировать тест</router-link
							>
						</p>
					</div>
				</v-btn>
			</v-card-actions>
		</v-card>

		<v-col class="mb-4" cols="12">
			<v-card
				class="mx-auto"
				max-width="844"
				outlined
				elevation="5"
				style="margin-top: 20px"
			>
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							<font face="serif">{{ menu2.name }}</font>
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu2.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-img
						class="white--text align-end"
						max-height="100"
						max-width="200"
						src="https://pp.userapi.com/c638423/v638423782/2bbf0/pTG4C7itmOc.jpg"
					>
					</v-img>
				</v-list-item>

				<v-card-actions>
					<v-btn outlined rounded text elevation="5">
						<div class="about">
							<p class="subheading font-weight-regular">
								<router-link to="/" style="color: orange"
									>Сформировать тест</router-link
								>
							</p>
						</div>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined elevation="5">
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							<font face="serif">{{ menu3.name }}</font>
						</v-list-item-title>
						<v-list-item-subtitle>
							{{ menu3.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-img
						class="white--text align-end"
						max-height="100"
						max-width="200"
						src="https://media.proglib.io/wp-uploads/2018/01/45675477bb165f999.jpg"
					>
					</v-img>
				</v-list-item>

				<v-card-actions>
					<v-btn outlined rounded text elevation="5">
						<div class="about">
							<p class="subheading font-weight-regular">
								<router-link to="/" style="color: orange"
									>Сформировать тест</router-link
								>
							</p>
						</div>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col class="mb-4" cols="12">
			<v-card class="mx-auto" max-width="844" outlined elevation="5">
				<v-list-item three-line>
					<v-list-item-content>
						<div class="overline mb-4">
							Тест
						</div>
						<v-list-item-title class="headline mb-1">
							<font face="serif">{{ menu4.name }}</font>
						</v-list-item-title>
						<v-list-item-subtitle style="margin-top: 10px">
							{{ menu4.description }}
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-img
						class="white--text align-end"
						max-height="100"
						max-width="200"
						src="https://tamlife.ru/uploads/2020/05/14790345527441.jpg"
					>
					</v-img>
				</v-list-item>

				<v-card-actions>
					<v-btn outlined rounded text elevation="5">
						<div class="about">
							<p class="subheading font-weight-regular">
								<router-link to="/" style="color: orange"
									>Сформировать тест</router-link
								>
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
