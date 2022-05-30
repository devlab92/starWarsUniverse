import axios from 'axios'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Starships = axios.create({
	baseURL: "https://swapi.dev/api/starships/",
  })

export default {
	// Retorna uma nave especifica de acordo com o id passado no parametro "id"
	getStartshipById(id){
		let starship = Starships.get(id)
		starship.image = this.getStarshipImg(starship)
		return starship
		
	},
	async getStarshipImg(starship) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(starship.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.starships + globalFn.getUrlId(starship.url) }.jpg`
			}
				
			return link
	}

}