<template>
	<div id="pagesButton" class="pagesButton flex">
			<div v-for="page in allPages" class="flex pagesButton__button" @click="returnPage(page)">
				<p>{{page}}</p>
			</div>
		</div>
</template>

<script>
export default {
	name: 'Pagination',
	props:['allPages'],
	methods:{
		returnPage(page){
			this.$emit('page', page)
		}
	}
}
</script>
<style scoped>
.pagesButton{
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	padding: 0 15px;
}
.pagesButton__button{
	padding: 10px 15px;
	background: #323232;
	margin: 4px;
	border-radius: 10px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1.5px;
	transition: all .1s;
	box-shadow: 0 0 5px -2px gold;
}
.pagesButton__button:hover, .pagesButton__button:focus{
	box-shadow: 0 0 10px 0px gold;
}
</style>
