<template>
	<div class="logo flex">
		<div class="logo__text flex">
			<div class="universe">
				<p>universo</p>
			</div>
			<div class="zoomIn">
				<h1>
					\star\\\
					<br />wars
				</h1>
			</div>
			<div class="developed">
				<p>
					develop by
					<a href="https://github.com/devlab92/starWarsUniverse" target="_blank">DevLab92</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FontLogo'
}
</script>
<style scoped>
.logo {
	cursor: default;
	position: fixed;
	top: 10%;
	z-index: 0;
	flex-direction: column;
}
.logo__text,
.logo__text h1 {
	font-family: "Star-Jedise" !important;
}
.logo__text {
	flex-direction: column;
}
.logo__text h1 {
	line-height: calc(100vw / 11);
	font-size: calc(100vw / 9);
}

.logo__text:hover .zoomIn {
	transition: all 2s;
	color: black;
	transform: scale(2);
}
.logo__text:hover .universe {
	transition: 1s;
	color: rgba(0, 0, 0, 0);
}
.logo__text:hover .developed,
.logo__text:hover .developed a{
	transition: 2s;
	margin: 50% 0 0 0 ;
	/* color: rgb(255, 255, 255); */
		text-shadow: 0 0 15px gold;
		color: rgb(0, 0, 0);
	transform: scale(2);
}
	.logo__text:hover .developed a{
		transition: 2s;
		text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 15px gold;
	}

.zoomIn {
	transition: all 3s;
	text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
	/* animation: zoomIn 5s;
	-webkit-animation: zoomIn 5s;
	-moz-animation: zoomIn 5s;
	-o-animation: zoomIn 5s;
	-ms-animation: zoomIn 5s; */
}

.universe {
	transition: all 5s;
	letter-spacing: 10px;
	font-size: calc(100vw / 25);
}

.developed,
.developed a {
	transition: all 1.5s;
	margin: 25px 0 0 0;
	color: rgba(0, 0, 0, 0);
	text-decoration: none;
}

@media (min-width: 1536px) {
	.logo h1 {
		line-height: 139px;
		font-size: 170px;
	}
}

@media (max-width: 767px) {
	
}
@media (max-width: 479px) {
	
}

@keyframes zoomIn {
	0% {
		transform: scale(0);
		text-shadow: 0 0 0px black, 0 0 0px gold;
	}
	25% {
		transform: scale(1.4);
		text-shadow: 0 0 1px black, 0 0 0px gold;
	}
	100% {
		text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
		transform: scale(1);
	}
}
@-moz-keyframes zoomIn {
	0% {
		transform: scale(0);
		text-shadow: 0 0 0px black, 0 0 0px gold;
	}
	25% {
		transform: scale(1.2);
		text-shadow: 0 0 1px black, 0 0 0px gold;
	}
	100% {
		text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
		transform: scale(1);
	}
}
@-webkit-keyframes zoomIn {
	0% {
		transform: scale(0);
		text-shadow: 0 0 0px black, 0 0 0px gold;
	}
	25% {
		transform: scale(1.2);
		text-shadow: 0 0 1px black, 0 0 0px gold;
	}
	100% {
		text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
		transform: scale(1);
	}
}
@-ms-keyframes zoomIn {
	0% {
		transform: scale(0);
		text-shadow: 0 0 0px black, 0 0 0px gold;
	}
	25% {
		transform: scale(1.2);
		text-shadow: 0 0 1px black, 0 0 0px gold;
	}
	100% {
		text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
		transform: scale(1);
	}
}
@-o-keyframes zoomIn {
	0% {
		transform: scale(0);
		text-shadow: 0 0 0px black, 0 0 0px gold;
	}
	25% {
		transform: scale(1.2);
		text-shadow: 0 0 1px black, 0 0 0px gold;
	}
	100% {
		text-shadow: 0 0 2px black, 0 0 20px gold, 0 0 40px black;
		transform: scale(1);
	}
}
</style>
