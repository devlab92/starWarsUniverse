<template>
	<div id="menu" class="menu">
		<div id="buttonToOpenMenu" class="openMenuButton">
			<i :class="`fa fa-chevron-circle-down fa-4x fa-rotate-270`" aria-hidden="true" @click="showHide = !showHide"></i>
		</div>
		<div :class="`menuBody ${showHide ? 'showMenu' : ''}`">
			<div class="menuBody__header" @click="showHide = !showHide">
				<h2>
					<span class="menuBody__header--universo">universo</span>
					<span class="menuBody__header--starwars">
						Star
						<br />Wars
					</span>
				</h2>
			</div>
			<hr />
			<div class="menuBody__list flex">
				<div class="menuBody__list--divBtn slectApi flex">
					<div>Repositório de imagens</div>
					<div class="menuBody__list--apiBtn flex">
						<div :class="`flex ${active ? 'active':''}`" @click="setApi('google')">
							<p>Google api</p>
						</div>
						<div :class="`flex ${!active ? 'active':''}`" @click="setApi('swvg')">
							<p>Star wars visual guide</p>
						</div>
					</div>
				</div>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'People'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>Pessoas</p>
					</div>
				</router-link>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'Planets'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>Planetas</p>
					</div>
				</router-link>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'Species'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>Espécies</p>
					</div>
				</router-link>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'Films'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>Filmes</p>
					</div>
				</router-link>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'Vehicles'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>veículos</p>
					</div>
				</router-link>
				<router-link class="menuBody__list--divBtn" v-slot="{ navigate }" :to="{name: 'Favorits'}">
					<div @click="navigate" @keypress.enter="navigate" role="link">
						<p>Favoritos</p>
					</div>
				</router-link>
				<div class="menuBody__list--divBtn" tag="div" @click="showHide = !showHide">
					<p>Fechar Menu</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	props: ['allPages'],
	data() {
		return {
			showHide: false,
			active: true
		}
	},
	beforeMount() {
		let api = localStorage.getItem('apiSelected')
		if (api) {
			this.active = api == 'google' ? true : false
		}
	},
	methods: {
		setApi(api) {
			this.active = api == 'google' ? true : false
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
.fa {
	color: gold;
	text-shadow: 0 0 15px black, 0px 0px 20px white;
}
.openMenuButton {
	z-index: inherit;
	cursor: pointer;
	position: fixed;
	top: 25px;
	left: 25px;
}

.menu {
	z-index: 5;
	color: white;
}
.showMenu {
	left: 0 !important;
}
.menuBody {
	    z-index: inherit;
	cursor: pointer;
	position: fixed;
	top: 0;
	left: -450px;
	width: 400px;
	max-width: 450px;
	min-width: 200px;
	height: 100%;
	background: rgb(36, 36, 36);
	transition: all 0.5s;
	box-shadow: 0 0 15px -5px white, 0 0 50px 5px gold;
}

.menuBody__header {
	margin: 10px 0 25px 0;
	flex-direction: column;
	font-weight: 100;
}
.menuBody__header h2 {
	display: flex;
	flex-direction: column;
	font-family: "Star-Jedise" !important;
	text-align: center;
	line-height: 2.5em;
	transition: all 0.2s;
}
.menuBody__header:hover h2 {
	cursor: pointer;
	letter-spacing: 1.9px;
}
.menuBody__header--universo {
	letter-spacing: 1.5px;
	font-size: 3em;
}
.menuBody__header--starwars {
	padding: 0 0 0 5px;
	line-height: 0.75em;
	font-size: 5em;
}
.menuBody__list {
	height: calc(100vh - 35%);
	flex-direction: column;
	justify-content: space-between;
	padding: 5px 5px 5px 5px;
	gap: 5px;
}
.menuBody__list--divBtn {
	font-family: "Star-Jedise" !important;
	font-size: 1.5em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 2px 0;
	background: rgb(20, 20, 20);
	width: 100%;
	height: 100%;
	min-height: 20px;
	text-align: center;
	vertical-align: center;
	box-shadow: 0 0 15px -5px white;
	cursor: pointer;
	transition: all 0.2s;
}
.menuBody__list--apiBtn {
	flex-direction: column;
	font-size: 0.5em;
	width: 100%;
	height: -webkit-fill-available;
}
.menuBody__list--apiBtn div {
	width: 98%;
	margin: 1px;
	box-shadow: 0 0 5px -2px white;
	border-radius: 4px;
	transition: all 0.2s;
}
.menuBody__list--apiBtn div:hover {
	border: 5px solid green;
}
.active {
	border: 5px solid green;
}
.menuBody__list--divBtn:hover {
	box-shadow: 0 0 15px 0px gold;
}
.menuBody__list--divBtn:hover:not(:first-child) {
	font-size: 1.8em;
	padding: 0 0 0 25px;
}
.menuBody__list--divBtn p {
	padding: 0 15px;
}

@media (max-width: 767px) {
	.menuBody__header h2 {
		font-size: 0.7em;
		line-height: 2.5em;
		transition: all 0.2s;
	}

	.slectApi:first-child {
		font-size: 0.8em;
	}
}

@media (max-width: 479px) {
	.menuBody {
		width: 90%;
	}
	.menuBody__list--apiBtn {
		font-size: 10px;
	}
}

@media (max-height: 720px) {
	.menuBody {
		/* overflow-y: scroll;
		overflow-x: hidden; */
	}
	.menuBody__header h2 {
		font-size: 0.8em;
	}
	.menuBody__list--divBtn {
		font-size: 0.8em;
	}
}
@media (max-height: 450px) {
	.menuBody__header h2 {
		font-size: 0.7em;
	}
	.menuBody {
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.menuBody::-webkit-scrollbar {
		background: transparent;
		width: 8px;
		height: 4px;
	}
	::-webkit-scrollbar-thumb {
		background: rgb(0, 0, 0);
	}

	::-webkit-scrollbar-track {
		background: gold;
	}
}
</style>
