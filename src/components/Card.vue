<template>
	<div id="card" class="card flex">
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
				<p>Data nascimento: {{infos.birth_year != 'unknown' ? infos.birth_year : 'desconhecido'}}</p>
				<h3>Filmes</h3>
				<p>Participou de {{infos.films.length > 1 ? infos.films.length+' filmes' : '1 filme'}}</p>
				<h3>Caracteristicas físicas</h3>
				<p>
					Possui olhos de cor {{translateToPt(infos.eye_color)}}, 
					seu cabelo é {{translateToPt(infos.hair_color)}},
					altura {{infos.height != 'unknown' ? infos.height+' cm' : 'desconhecido'}} 
					e seu peso é {{infos.mass != 'unknown' ? infos.mass+' quilos' : 'desconhecido'}}.
				</p>
			</div>
			<div>
				<button @click="showMore = !showMore">Saber mais!</button>
			</div>
			<!-- <div id="starship"></div>
			<div id="specie"></div>
			<div id="vehicle"></div>-->
		</div>
		<transition>
			<div v-if="showMore" id="moreDetails" class="moreDetails flex">
				<Person :person="infos" @closeModal="showMore = $event"/>
			</div>
		</transition>
	</div>
</template>

<script>
import Person from './about/Person.vue'
import globalFn from '../services/GlobalFunctions'
export default {
	name: 'Cards',
	components: {
		Person
	},
	props: ['infos'],
	data() {
		return {
			showMore: false
		}
	},
	methods:{
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
}
.card__image {
	position: relative;
	background: yellow;
	justify-content: left;
}
.card__image--img {
	margin: 10px 5px;
	max-width: auto;
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
	margin: 10px 0 5px 0;
}

.moreDetails {
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
}
</style>
