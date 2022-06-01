<template>
	<transition name="load">
		<div class="loading" v-if="loadingVerify">
			<p class="loading__paragraph">Carregando...</p>
			<!-- <i class="fa fa-spinner fa-pulse fa-2x"></i>  -->
			
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
	background: #707070;
	box-shadow: 0 0 15px -5px white, 0 0 25px 5px gold;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('../assets/images/loading.gif') ;
	background-repeat: no-repeat;
	background-size: 100px 100px;
}

.loading__paragraph {
	font-family: "Star-Jedise" !important;
	letter-spacing: 7px !important;
	font-size: 2rem;
	font-weight: 600;
	color: white;
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
