<template>
	<div id="card">
		<Loading :loadingVerify="loading" />
		<div class="card flex" @click.prevent="selectedInfos = infos; showMoreFn()">
			<div id="image" class="card__image flex">
				<div class="flex">
					<img :src="infos.image" class="card__image--img" :alt="'Foto de ' + infos.name" />

					<div class="card__image--label flex">
						<p>{{ infos.name }}</p>
					</div>
				</div>
			</div>
			<div id="infos" class="infos flex">
				<div id="person" class="infos__list">
					<h3>Data nascimento</h3>
					<p>{{infos.birth_year != 'unknown' ? infos.birth_year : 'desconhecido'}}</p>
					<h3>Filmes</h3>
					<p>Participou de {{infos.films.length > 1 ? infos.films.length+' filmes' : '1 filme'}}</p>
					<h3>Caracteristicas físicas</h3>
					<p>
						Possui olhos de cor {{translateToPt(infos.eye_color)}},
						cabelo {{translateToPt(infos.hair_color)}},
						altura {{infos.height != 'unknown' ? infos.height+' cm' : 'desconhecido'}}
						e seu peso é {{infos.mass != 'unknown' ? infos.mass+' quilos' : 'desconhecido'}}.
					</p>
				</div>
				<!-- <div id="starship"></div>
			<div id="specie"></div>
				<div id="vehicle"></div>-->
			</div>
		</div>
		<transition>
			<div v-if="showMore" id="moreDetails" class="moreDetails flex">
				<Person :person="selectedInfos" @closeModal="showMore = $event" />
			</div>
		</transition>
	</div>
</template>

<script>
import Person from './about/Person.vue'
import Starships from '../services/Starships'
import Vehicles from '../services/Vehicles'
import Films from '../services/Films'
import Species from '../services/Species'
import Planets from '../services/Planets'
import globalFn from '../services/GlobalFunctions'
import Loading from '../components/Loading.vue'
export default {
	name: 'Cards',
	components: {
		Person,
		Loading,
		Starships,
		Vehicles,
		Films,
		Planets,
		Species
	},
	props: ['infos'],
	data() {
		return {
			selectedInfos: {},
			showMore: false,
			loading: false,
		}
	},
	methods: {
		async showMoreFn() {
			this.loading = true
			if (typeof this.selectedInfos.starships[0] == 'string') {
				var starshipsNewArray = []
				await this.selectedInfos.starships.map(starship => {
					Starships.getStartshipById(globalFn.getUrlId(starship))
						.then((res) => {
							starshipsNewArray.push(res.data)
						})
				})
				this.selectedInfos.starships = starshipsNewArray
			}

			if (typeof this.selectedInfos.vehicles[0] == 'string') {
				var vehiclesNewArray = []
				await this.selectedInfos.vehicles.map(vehicle => {
					Vehicles.getVehicleById(globalFn.getUrlId(vehicle))
						.then((res) => {
							vehiclesNewArray.push(res.data)
						})
				})
				this.selectedInfos.vehicles = vehiclesNewArray
			}

			if (typeof this.selectedInfos.films[0] == 'string') {
				var filmssNewArray = []
				await this.selectedInfos.films.map(film => {
					Films.getFilmById(globalFn.getUrlId(film))
						.then((res) => {
							filmssNewArray.push(res.data)
						})
				})
				this.selectedInfos.films = filmssNewArray
			}

			if (typeof this.selectedInfos.species[0] == 'string') {
				var speciessNewArray = []
				await this.selectedInfos.species.map(specie => {
					Species.getSpecieById(globalFn.getUrlId(specie))
						.then((res) => {
							this.selectedInfos.species = res.data
						})
				})
			}

			if (typeof this.selectedInfos.homeworld == 'string') {
				await Planets.getPlanetById(globalFn.getUrlId(this.selectedInfos.homeworld))
					.then((res) => {
						this.selectedInfos.homeworld = res.data
					})
			}

			this.loading = false
			this.showMore = true
		},
		translateToPt(word) {
			return globalFn.translateToPt(word).toLowerCase()
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
	background: rgb(50, 50, 50);
	/* width: 30%; */
	width: 100%;
	height: 300px;
	justify-content: left;
	cursor: pointer;
}
.card__image {
	margin: 10px;
	position: relative;
	background: rgb(255, 255, 0);
	justify-content: left;
	transition: all 0.4s;
}
.card__image:hover,
.card__image:focus {
	box-shadow: 0 0 15px 5px rgb(123, 123, 123);
}
.card__image--img {
	margin: 10px 5px;
	max-width: 200px;
	max-height: 250px;
	border: 5px solid #000;
	border-radius: 4px;
}
.card__image--label {
	justify-content: right;
	background: red;
	height: 25px;
	position: absolute;
	bottom: 10%;
	width: 100%;
}
.card__image--label p {
	font-family: "Nunito-SemiBoldItalic";
	margin: 0 1px 0 0;
}

.infos {
	padding: 0 15px;
	flex-direction: column;
	align-items: flex-start;
}

.infos__list {
	padding: 15px 5px;
}
.infos__list p {
	margin: 0 0 0 10px;
	padding: 0;
}
.infos__list h3 {
	font-family: "Nunito-italic" !important;
	letter-spacing: 1px;
	margin: 10px 0 5px 0;
}

.moreDetails {
	width: 100%;
	height: 100%;
	background-color: rgba(80, 80, 80, 0.9);
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
}

@media (max-width: 1025px) {
	.card__image--img {
		max-height: calc(100vw / 4);
	}
	.card__image {
		margin: 0 5px 0 0;
	}
	.infos__list p,
	.infos__list h3 {
		margin: 3px 0;
		font-size: 1em;
	}
}
@media (max-width: 767px) {
	.card__image--img {
		max-height: 250px;
	}
	.card__image {
		margin: 10px;
	}

	.infos__list p,
	.infos__list h3 {
		margin: 5px 0;
		font-size: 1em;
	}
}
@media (max-width: 479px) {
	.infos__list p {
		font-size: 0.85em;
	}
	.infos__list h3 {
		font-size: 0.8em;
	}
}
</style>
