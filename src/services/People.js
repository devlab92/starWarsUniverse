import axios from 'axios'

const People = axios.create({
	baseURL: "http://swapi.dev/api/people/",
  })

export default {
	//Dashboard
	getAllPerson(page) {
		return People.get(`?page=${page}`)
	},
	getPeopleByName(name) {
		return People.get(`?search=${name}`)
	}
}