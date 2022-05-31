<template>
	<div id="app">
		<nav>
			<!-- <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>-->
		</nav>
		<router-view />
	</div>
</template>
<script>
import 'font-awesome/css/font-awesome.css'
export default {
}
</script>
<style>
body {
	margin: 0;
	padding: 0;
	background: #2c3e50;
}

p{
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #F0F0F0;
	font-size: 16px;
	font-family: 'Nunito';
	padding: 15px;
}

#app h1{
	font-family: 'Nunito-ExtraBold';
	letter-spacing: 1px
}

#app h2, #app h3, #app h4, #app h5,#app h6{
	font-family: 'Nunito-SemiBold'
}

.flex{
	display: flex;
	justify-content: center;
	align-items: center;
}

@font-face {
  font-family: 'Nunito';
  src: url(./assets/fonts/Nunito/Nunito-Light.ttf)
}
@font-face {
  font-family: 'Nunito-italic';
  src: url(./assets/fonts/Nunito/Nunito-LightItalic.ttf)
}
@font-face {
  font-family: 'Nunito-SemiBold';
  src: url(./assets/fonts/Nunito/Nunito-SemiBold.ttf)
}
@font-face {
  font-family: 'Nunito-SemiBoldItalic';
  src: url(./assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf)
}
@font-face {
  font-family: 'Nunito-ExtraBold';
  src: url(./assets/fonts/Nunito/Nunito-ExtraBold.ttf)
}
@font-face {
  font-family: 'Nunito-ExtraBoldItalic';
  src: url(./assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf)
}
@font-face {
  font-family: 'Star-Jout';
  src: url(./assets/fonts/StarJedi/Starjout.ttf)
}
</style>
