<template>
	<div id="app">
		<div class="question" v-for="question in allQuestion" :key="question.id">
			<h2>{{ question.name }}</h2>
			<p>{{ question.description }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: mapGetters(['allQuestion']),
	methods1: mapActions(['fetchQuestion']),
	async mounted() {
		this.fetchQuestion(3)
	},
}
</script>
