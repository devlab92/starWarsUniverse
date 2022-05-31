<template>
	<transition name="load">
		<div class="loading" v-if="loadingVerify">
			<p class="loading__paragraph">Carregando...</p>
			<i class="fa fa-spinner fa-pulse fa-2x"></i>
			
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Loading',
	props: ['loadingVerify']
}
</script>
<style scoped>
.loading {
	width: 100%;
	height: 100px;
	background: rgb(57, 57, 57);
	position: fixed;
	top: 0;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
}

.loading__paragraph {
	font-size: 2rem;
	font-weight: 600;
	color: rgb(255, 0, 0);
	text-shadow: 0 0 1px rgb(242, 255, 0), 0 0 25px rgb(255, 0, 0),
		0 0 30px rgb(255, 255, 255);
	text-align: center;
	letter-spacing: 1px;
}

.load-enter,
.load-leave-to{
	opacity: 0;
}

.load-enter-active,
.load-leave-active {
	transition: opacity .2s;
}

</style>
