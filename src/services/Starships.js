import axios from 'axios'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Starships = axios.create({
	baseURL: "https://swapi.dev/api/starships/",
  })

export default {
	// Retorna uma nave especifica de acordo com o id passado no parametro "id"
	getStartshipById(id){
		return Starships.get(`${id}`)
	},
	getStarshipImg(id) {
		return fetch(`${ visualGuideApi.baseUrl + visualGuideApi.search.starships + id }.jpg`)
	}
}