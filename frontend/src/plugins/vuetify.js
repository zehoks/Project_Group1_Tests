import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#34495E',
				secondary: '#b0bec5',
				accent: '#8c9eff',
				error: '#b71c1c',
			},
			dark: {
				primary: '#8c9eff',
				accent: '#FF4081',
				secondary: '#ffe18d',
				success: '#4CAF50',
				info: '#2196F3',
				warning: '#FB8C00',
				error: '#FF5252',
			},
		},
	},
})
