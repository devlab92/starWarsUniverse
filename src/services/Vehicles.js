import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Vehicles = axios.create({
	baseURL: "https://swapi.dev/api/vehicles/",
  })

export default {
	// Retorna uma veículo especifica de acordo com o id passado no parametro "id"
	async getVehicleById(id){
		let vehicle = await Vehicles.get(id)
		vehicle.data.image = await this.getVehicleImg(vehicle.data)
		return vehicle
		
	},
	async getVehicleImg(vehicle) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(vehicle.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.vehicles + globalFn.getUrlId(vehicle.url) }.jpg`
			}
			return link
	}
}