<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">
					Maxon davai doing
				</h1>

				<p class="subheading font-weight-regular">
					<router-link to="/about">Go to about</router-link>
				</p>

				<p class="subheading font-weight-regular">
					<router-link to="/Menu">Go to Menu</router-link>
				</p>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">
					What's next?
				</h2>

				<v-row justify="center">
					<a
						v-for="(next, i) in whatsNext"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ next.text }}
					</a>
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">
					Important Links
				</h2>

				<v-row justify="center">
					<a
						v-for="(link, i) in importantLinks"
						:key="i"
						:href="link.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ link.text }}
					</a>
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">
					Ecosystem
				</h2>

				<v-row justify="center">
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ eco.text }}
					</a>
				</v-row>
			</v-col>

			<template>
				<div class="mb-5" cols="12">
					<v-rating
						v-model="rating"
						background-color="purple lighten-3"
						color="purple"
						large
					></v-rating>
					<v-rating
						v-model="rating"
						background-color="pink lighten-3"
						color="pink"
						large
					></v-rating>
					<v-rating
						v-model="rating"
						background-color="orange lighten-3"
						color="orange"
						large
					></v-rating>
					<v-rating
						v-model="rating"
						background-color="green lighten-3"
						color="green"
						large
					></v-rating>
					<v-rating
						v-model="rating"
						background-color="red lighten-3"
						color="red"
						large
					></v-rating>
					<v-rating
						v-model="rating"
						background-color="indigo lighten-3"
						color="indigo"
						large
					></v-rating>
				</div>
			</template>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader',
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify',
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify',
			},
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com',
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com',
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify',
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs',
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify',
			},
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer',
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
			},
			{
				text: 'Frequently Asked Questions',
				href:
					'https://vuetifyjs.com/getting-started/frequently-asked-questions',
			},
		],
	}),
}
</script>
