<template>
	<div id="closeButton" class="closeButton">
			<div class="flex closeButton__button">
				<i class="fa fa-arrow-left fa-2x"></i>
				<span>Voltar</span>
			</div>
		</div>
</template>

<script>
export default {
	name: 'CloseButton'
}
</script>
<style scoped>
.closeButton__button{
	gap: 10px;
	padding: 5px 10px;
	background: #000;
	border-radius: 10px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1.5px;
	outline: 0 solid #fff;
	outline-offset: 0px;
	transition: all .1s;
}
.closeButton__button:hover, .closeButton__button:focus{
	outline: 3px solid #fff;
	box-shadow: 0 0 10px 10px black;
	outline-offset: 3px;
}
</style>
