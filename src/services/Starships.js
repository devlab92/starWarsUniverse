import axios from 'axios'

const Starships = axios.create({
	baseURL: "http://swapi.dev/api/starships/",
  })

export default {
	// Retorna uma nave especifica de acordo com o id passado no parametro "id"
	getStartshipById(id){
		return Starships.get(`${id}`)
	}
}