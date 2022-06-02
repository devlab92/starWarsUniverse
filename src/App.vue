<template>
	<div id="app">
		<Menu />
		<router-view />
	</div>
</template>
<script>
import 'font-awesome/css/font-awesome.css'
import Menu from './components/Menu.vue'
export default {
	components: {Menu},
	name: 'App'
}
</script>
<style>
body {
	margin: 0;
	padding: 0;
	background-image: url("./assets/images/background_home.jpg");
	background-attachment: fixed;
}

p {
	margin: 0;
}

a,
a:visited,
a:hover {
	text-decoration: none;
}

#app {
	color: #f0f0f0;
	font-size: 16px;
	font-family: "Nunito";
	padding: 15px;
}

#app h1 {
	font-family: "Nunito-ExtraBold";
	letter-spacing: 1px;
	margin: 0;
	padding: 0;
}

#app h2,
#app h3,
#app h4,
#app h5,
#app h6 {
	margin: 0;
	padding: 0;
	font-family: "Nunito-SemiBold";
}

.flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.backToHome {
	padding: 10px 15px;
	background: #323232;
	margin: 4px;
	border-radius: 10px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1.5px;
	transition: all 0.1s;
	box-shadow: 0 0 5px -2px gold;
}
.backToHome:hover,
.backToHome:focus {
	box-shadow: 0 0 10px 0px gold;
}

@font-face {
	font-family: "Nunito";
	src: url(./assets/fonts/Nunito/Nunito-Light.ttf);
}
@font-face {
	font-family: "Nunito-italic";
	src: url(./assets/fonts/Nunito/Nunito-LightItalic.ttf);
}
@font-face {
	font-family: "Nunito-SemiBold";
	src: url(./assets/fonts/Nunito/Nunito-SemiBold.ttf);
}
@font-face {
	font-family: "Nunito-SemiBoldItalic";
	src: url(./assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf);
}
@font-face {
	font-family: "Nunito-ExtraBold";
	src: url(./assets/fonts/Nunito/Nunito-ExtraBold.ttf);
}
@font-face {
	font-family: "Nunito-ExtraBoldItalic";
	src: url(./assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf);
}
@font-face {
	font-family: "Star-Jout";
	src: url(./assets/fonts/StarJedi/Starjout.ttf);
}
@font-face {
	font-family: "Star-Jedise";
	src: url(./assets/fonts/StarJedi/Starjedise.TTF);
}
@font-face {
	font-family: "SW-Symbols";
	src: url(./assets/fonts/StarWarsSymbols/SW-Symbols.ttf);
}
</style>
