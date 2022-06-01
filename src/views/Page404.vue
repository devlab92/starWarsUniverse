<template>
	<section>
		<h1>Nada por aqui!</h1>
		<router-link class="backToHome" tag="div" :to="{name: 'Home'}">
			<p>Voltar para Home</p>
		</router-link>
	</section>
</template>

<script>
export default {
}
</script>

<style scoped>
.home{
	width: 100%;
	height: 100%;
	
}
</style>