<template>
	<section>
		<div>
			Escolha o repositório de imagens
			<select @change="setApi()" id="apiSelect">
				<option value="google">Google API</option>
				<option value="swvg">Star Wars Visual Guide</option>
			</select>
		</div>
		<h1>Escolha o que deseja saber sobre o univer STAR WARS</h1>
		<router-link tag="button" :to="{name: 'People'}">Pessoas</router-link>
		<router-link tag="button" :to="{name: 'People'}">Planetas</router-link>
		<router-link tag="button" :to="{name: 'People'}">Especies</router-link>
		<router-link tag="button" :to="{name: 'People'}">Filmes</router-link>
		<router-link tag="button" :to="{name: 'People'}">Veículos</router-link>
		<router-view />
		<!-- </transition> -->

		<br />
		<br />
		<button backBtn @click="goTo()">VOLTAR</button>
	</section>
</template>

<script>
export default {
	name: "Home",
	beforeMount() {
		window.onload(localStorage.setItem('apiSelected', 'google'))
	},
	methods: {
		setApi() {
			var api = document.getElementById('apiSelect').value
			localStorage.setItem('apiSelected', api)
		},
		// A funcao goTo deve ser implementada como mixin
		goTo(params) {
			//chama uma rota passando um paramentro
			// this.$router.push({path: `/newUser/${params}`})
			this.$router.push({path: '/'})
		}

	}
}
</script>

<style scoped>
[backBtn] {
	background: rgb(72, 207, 207);
	color: rgb(214, 37, 185);
	width: 250px;
	height: 25px;
}

.elIn {
	transform: translate(0px, 0px);
	transition: box-shadow 2000ms ease;
}

.elIn:hover {
	box-shadow: inset 0px 200px 185px 0px rgba(35, 109, 173, 0.64);
}

.elOut {
	transform: translate(0px, 0px);
	transition: transform 1000ms ease-out;
}

.elOut:hover {
	transform: rotate(90deg) translate(200px, -200px);
}
</style>