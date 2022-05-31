<template>
	<div class="modal">
		<div class="modal__header flex">
			<div class="modal__header--img">
				<img :src="person.image" />
			</div>
			<div class="modal__header--infos flex">
				<div class="modal__header--title flex">
					<h2>{{person.name}}</h2>
				</div>
				<div class="modal__header--list flex">
					<p>
						<span>Data nascimento :</span>
						{{person.birth_year}}
					</p>
					<p>
						<span>Cor dos olhos :</span>
						{{person.eye_color ? translateToPt(person.eye_color):''}}
					</p>
					<p>
						<span>Cor do cabelo :</span>
						{{person.hair_color ? translateToPt(person.hair_color):''}}
					</p>
					<p>
						<span>Pele :</span>
						{{person.skin_color ? translateToPt(person.skin_color):''}}
					</p>
					<p>
						<span>Gênero :</span>
						{{person.gender ? translateToPt(person.gender):''}}
					</p>
					<p>
						<span>Altura :</span>
						{{person.height}} cm
					</p>
					<p>
						<span>Peso :</span>
						{{person.mass}} Kg
					</p>
				</div>
			</div>
		</div>
		<div id="relatedInfos" class="relatedInfos">
			<div class="birthFeatures">
				<div class="birthFeatures--infos flex">
					<p>
						<span>Onde nasceu:</span>
						{{translateToPt(person.homeworld.name)}}
					</p>
					<p>
						<span>Espécie:</span>
						{{person.species.name ? person.species.name : 'Não informado'}}
					</p>
				</div>
			</div>
			<!-- STARSHIPS -->
			<div id="starships" class="starships" v-if="typeof person.starships[0] == 'object'">
				<div id="starshipsInfosHeader" class="infosHeader flex">
					<h3>Naves que pilota</h3>
				</div>
				<div v-for="starship in person.starships" :key="'starship_'+starship.url" class="flex data--for">
					<div class="infosImg flex">
						<img :src="starship.image" :alt="'Imagem da nave '+starship.name" />
					</div>
					<div class="infos flex">
						<div class="infos--col1">
							<p>
								<span>Nome da nave:</span>
								{{translateToPt(starship.name)}}
							</p>
							<p>
								<span>Modelo da nave:</span>
								{{translateToPt(starship.model)}}
							</p>
							<p>
								<span>Velocidade máxima:</span>
								{{translateToPt(starship.max_atmosphering_speed)}} km/h
							</p>
						</div>
						<div class="infos--col2">
							<p>
								<span>Comprimento:</span>
								{{translateToPt(starship.length)}}
							</p>
							<p>
								<span>Capacidade de carga:</span>
								{{translateToPt(starship.cargo_capacity)}}Kg
							</p>
							<p>
								<span>Valor:</span>
								{{translateToPt(starship.cost_in_credits)}} créditos galáticos
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- VEHICLES -->
			<div id="vehicles" class="vehicles" v-if="typeof person.vehicles[0] == 'object'">
				<div id="vehicleInfosHeader" class="infosHeader flex">
					<h3>Veículos que pilota</h3>
				</div>
				<div v-for="vehicle in person.vehicles" :key="'vehicle_'+vehicle.url" class="flex data--for">
					<div class="infosImg flex">
						<img :src="vehicle.image" :alt="'Imagem do veículo '+vehicle.name" />
					</div>
					<div class="infos flex">
						<div class="infos--col1">
							<p>
								<span>Nome da nave:</span>
								{{translateToPt(vehicle.name)}}
							</p>
							<p>
								<span>Modelo da nave:</span>
								{{translateToPt(vehicle.model)}}
							</p>
							<p>
								<span>Velocidade máxima:</span>
								{{translateToPt(vehicle.max_atmosphering_speed)}} km/h
							</p>
						</div>
						<div class="infos--col2">
							<p>
								<span>Comprimento:</span>
								{{translateToPt(vehicle.length)}}
							</p>
							<p>
								<span>Capacidade de carga:</span>
								{{translateToPt(vehicle.cargo_capacity)}}Kg
							</p>
							<p>
								<span>Valor:</span>
								{{translateToPt(vehicle.cost_in_credits)}} créditos galáticos
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- FILMS -->
			<div id="films" class="films" v-if="typeof person.films[0] == 'object'">
				<div id="filmsInfosHeader" class="infosHeader flex">
					<h3>Filmes que participou</h3>
				</div>
				<div v-for="film in person.films" :key="'film_'+film.url" class="flex data--for">
					<div class="infosImg flex">
						<img :src="film.image" :alt="'Imagem da capa do filme '+film.name" />
					</div>
					<div class="infos flex">
						<div class="infos--col1">
							<p>
								<span>Nome do filme:</span>
								{{translateToPt(film.title)}}
							</p>
							<p>
								<span>Diretor:</span>
								{{translateToPt(film.director)}}
							</p>
							<p>
								<span>Produção:</span>
								{{translateToPt(film.producer)}}
							</p>
						</div>
						<div class="infos--col2">
							<p>
								<span>Episódio:</span>
								{{translateToPt(film.episode_id)}}
							</p>
							<p>
								<span>Data de lançamento:</span>
								{{transformDate(film.release_date)}}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="closeBtn" @click="closeModal()">
			<CloseButton />
		</div>
	</div>
</template>

<script>
import globalFn from '../../services/GlobalFunctions'
import CloseButton from '../CloseButton.vue'
export default {
	name: 'Person',
	props: ['person'],
	data() {
		return {

		}
	},
	components: {
		CloseButton
	},
	methods: {
		translateToPt(word) {
			return globalFn.translateToPt(word)
		},
		transformDate(dateString) {
			return globalFn.transformDate(dateString)
		},
		closeModal() {
			let x = new Date()
			x.toLocaleDateString()
			this.$emit('closeModal', false)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
	z-index: 2;
}
.modal {
	width: 80%;
	height: 95%;
	background: rgb(148, 148, 148);
	border: #000 5px solid;
	position: absolute;
	overflow-y: scroll;
}
/* ======== PERSON INFOS ========*/
.modal__header {
	width: auto;
	padding: 10px;
	justify-content: left;
	align-items: flex-start;
}
.modal__header--img {
	height: 100%;
}
.modal__header--img img {
	border: 5px solid #000;
	border-radius: 4px;
	height:300px;
	width: auto;
}
.modal__header--infos {
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0 0 0 10px;
}
.modal__header--title h2 {
	margin: 0 0 10px 0;
	text-align: center;
	font-family: "Star-Jout" !important;
	font-size: 2.5rem;
	font-weight: 100;
	color: #000;
	line-height: 0.9;
}
.modal__header--list {
	margin: 0;
	width: 100%;
	height: -webkit-fill-available;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border: 2px solid black;
	border-radius: 4px;
	display: flex;
	align-items: center;
}
.modal__header--list p,
.infos p {
	height: 100%;
	color: black;
	padding: 3px 15px;
	width: -webkit-fill-available;
}
.modal__header--list span,
.birthFeatures--infos span,
.infos span {
	font-weight: 600;
}
.modal__header--list p:nth-child(even) {
	background: rgb(246, 246, 246);
}
.modal__header--list p:nth-child(odd) {
	background: rgb(196, 196, 196);
}
.relatedInfos {
	/* display: none; */
	margin: 0 0 60px 0;
}
.relatedInfos h3{
	font-size: 28px;
	font-family: 'Nunito-SemiBoldItalic' !important;
}
.birthFeatures,
.starships,
.vehicles,
.films {
	margin: 2px 10px;
	border: 5px solid black;
	border-radius: 4;
}
/* ======== HOMEWORLD / SPECIES ========*/
.birthFeatures {
	background: rgb(246, 246, 246);
}
.birthFeatures--infos {
	color: #000;
	width: 100%;
	justify-content: space-evenly;
}
/* ======== STARSHIPS ========*/
.infosHeader {
	padding: 0 10px;
}
.infosHeader h3 {
	margin: 0;
	padding: 0;
}
.data--for {
	padding: 5px;
	align-items: center;
	justify-content: flex-start;
	background: #ccc;
}
.data--for:nth-child(even) {
	background: rgb(246, 246, 246);
}
.data--for:nth-child(odd) {
	background: rgb(196, 196, 196);
}
.infosImg {
	padding: 10px 0 5px 10px;
	width: 100px;
	height: auto;
	transition: all 0.5s;
}
.infosImg img {
	border-radius: 50%;
	height: 100px;
	width: 100px;
	min-height: 100px;
	min-width: 100px;
	cursor: pointer;
	transition: all 0.5s;
	box-shadow: 0 0 5px rgb(255 255 255), 0 0 20px 5px rgb(0 0 0);
}
/* .infosImg:hover {
	position: absolute;
	height: 200px;
	width: auto;
} */
/* .infosImg:hover img{
	position: absolute;
    left: 5%;
	height: calc(100px * 1.5);
	width: calc(100px * 1.5);
	box-shadow: 0 0 25px rgb(255, 255, 255), 0 0 30px 10px rgb(0, 0, 0);
} */
.infosImg:active {
	height: 100px;
	width: 130px;
}
.infosImg:active img {
	z-index: 2;
	position: fixed;
	width: 800px;
	height: 800px;
	box-shadow: 0 0 25px rgb(255 255 255), 0 0 30px 10px rgb(0 0 0);
	left: calc(50% - 400px);
	bottom: calc(50% - 400px);
}

.infos {
	width: 100%;
	padding: 0 15px;
	justify-content: flex-start;
	gap: 10px;
	word-break: break-word;
}
.infos--col1,
.infos--col2 {
	width: 50%;
}
/* ======== VEHICHLES ========*/
/* ======== FILMES ========*/
.closeBtn {
	position: fixed;
	bottom: 30px;
	left: 12%;
}
@media (max-width: 767px) {
	.modal__header {
		flex-direction: column;
		align-items: center;
		padding: 10px 10px 0 10px;
	}
	.modal__header--img {
		max-width: 400px;
		position: relative;
		width: 90%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	.modal__header--img img {
		border: 5px solid #000;
		border-radius: 4px;
		height: -webkit-fill-available;
		width: auto;
	}
	.modal__header--infos {
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 0;
	}
	.modal__header--title h2 {
		margin: 0;
		padding: 0 0 10px 0;
		text-align: center;
		font-family: "Star-Jout" !important;
		font-size: calc(100vw / 15);
		font-weight: 100;
		color: #000;
		line-height: 0.9;
	}
}

@media (max-width: 479px) {
	.modal__header--title h2 {
		font-size: calc(100vw / 12);
	}

	.data--for {
		flex-direction: column;
		gap: 10px;
	}
	.infos {
		align-items: flex-start;
	}
	.infosImg:active img {
		z-index: 2;
		position: fixed;
		width: 300px;
		height: 300px;
		box-shadow: 0 0 25px rgb(255 255 255), 0 0 30px 10px rgb(0 0 0);
		left: calc(50% - 150px);
		bottom: calc(50% - 150px);
	}
}
</style>

