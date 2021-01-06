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
	</v-col>
</template>

<script>
export default {
	data() {
		//	var x = +document.getElementById('numberValue').textContent //string to Number;

		return {
			cou: 10,
		}
	},
}
</script>
