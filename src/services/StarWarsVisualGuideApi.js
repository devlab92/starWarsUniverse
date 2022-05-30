const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

export default {
	getPersonImg(id){
		return fetch(`${visualGuideApi.baseUrl+visualGuideApi.search.characters+id}.jpg`)
	},
	getStarshipsImg(id){
		return fetch(`starships/${id}.jpg`)
	},
	getFilmesImg(id){
		return fetch(`films/${id}.jpg`)
	},
	getSpeciesImg(id){
		return fetch(`species/${id}.jpg`)
	},
	getVehiclesImg(id){
		return fetch(`vehicles/${id}.jpg`)
	},
	getPlanetsImg(id){
		return fetch(`planets/${id}.jpg`)
	},
	
}