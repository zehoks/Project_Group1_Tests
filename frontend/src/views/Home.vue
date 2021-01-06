<template>
	<div class="home">
		<Theme msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src

import Theme from '../views/Theme.vue'

export default {
	name: 'Home',
	components: {
		Theme,
	},
}
</script>
