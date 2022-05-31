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
		<div></div>

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
	components: {
		CloseButton
	},
	methods: {
		translateToPt(word) {
			return globalFn.translateToPt(word)
		},
		closeModal() {
			this.person = {}
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
	width: 95%;
	height: 95%;
	background: rgb(148, 148, 148);
	border: #000 5px solid;
	position: absolute;
}
.modal__header {
	width: auto;
	height: 30%;
	padding: 10px;
	justify-content: left;
	align-items: flex-start;
}
.modal__header--img {
	max-width: 200px;
	height: 100%;
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
	padding: 0 0 0 10px;
}
.modal__header--title h2 {
	margin: 0 0 10px 0;
	text-align: center;
	font-family: "Star-Jout" !important;
	font-size: 2.5rem;
	font-weight: 100;
	color: #000;
}
.modal__header--list {
	margin: 0;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border: 2px solid black;
	border-radius: 4px;
}
.modal__header--list p {
	color: black;
	padding: 2px 4px;
	width: -webkit-fill-available;
}
.modal__header--list span {
	font-weight: 600;
}
.modal__header--list p:nth-child(even) {
	background: #ccc;
}
.modal__header--list p:nth-child(odd) {
	background: #fff;
}
.closeBtn {
	position: fixed;
	bottom: 30px;
	left: 30px;
}
</style>

