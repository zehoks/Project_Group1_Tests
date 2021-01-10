<template>
	<v-col class="mb-4" cols="12" style="background: #006699; height: 100%">
		<v-card class="mx-auto" max-width="800" elevation="5">
			<v-img
				class="white--text align-end"
				height="300px"
				src="https://klike.net/uploads/posts/2020-08/1597993608_2.jpg"
			>
			</v-img>

			<v-card-subtitle class="pb-0" style="font-size:2em">
				<font face="serif">Результаты</font>
			</v-card-subtitle>

			<v-card-text class="text--primary">
				<div style="margin-top: 20px">Здесь будут результаты</div>
			</v-card-text>

			<v-card-actions>
				<v-btn outlined rounded color="orange" text elevation="5">
					Пройти тест еще раз
				</v-btn>

				<v-btn outlined rounded color="orange" text elevation="5">
					Вернуться на главную
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
export default {}
</script>
