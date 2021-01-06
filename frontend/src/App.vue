<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-spacer></v-spacer>

			<v-btn @click="darkTheme" text rounded>
				<span class="mr-3">Dark Theme</span>
				<v-icon>mdi-thumb-up</v-icon></v-btn
			>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	methods: {
		darkTheme() {
			//this.$vuetify.theme.themes.dark.anchor = '#41B883'
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark
		},
	},
}
</script>
