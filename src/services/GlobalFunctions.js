export default {
	getUrlId(url) {
		// Recebe uma URL que contem o ID no final de sua estrutura 
		if (url == undefined)
			return

		let link = url.split('/')
		return link[link.length - 2]
	},
	translateToPt(word) {
		word = String(word)
		// Se a palavra passada como parametro possui tradução
		// será retornado a tradução
		let translateArray = {
			'blue': 'Azul',
			'red': 'Vermelho',
			'yellow': 'Amarelo',
			'green': 'Verde',
			'brown': 'Marrom',
			'white': 'Branco',
			'black': 'Preto',
			'blond': 'Loiro',
			'fair': 'Claro',
			'light': 'Claro',
			'gold': 'Dourado',
			'grey': 'Cinza',
			'blue-gray': 'Azul acinzentado',
			'auburn': 'Ruivo',
			'orange': 'Laranja',
			'green-tan': 'Castanho esverdeado',
			'hazel': 'Avelã',
			'pale': 'Pálido',
			'metal': 'Metálico',
			'dark': 'Escuro',
			'brown mottle': 'Manchado de marrom',
			'brown green': 'Manchado de verde',
			'pink': 'Rosa',
			'male': 'Masculino',
			'female': 'Feminino'
		}
		var translated = word

		if (word  == 'n/a'){
			console.log('entrou')
			translated = 'Não definido'
		}

		if (word == 'unknown')
			translated = 'Desconhecido'

		Object.keys(translateArray).find((item) => item == word ? translated = translateArray[item] : '')

		return translated
	},
	fillArrayPeople() {
		return [{
			birth_year: "19BBY",
			created: "2014-12-09T13:50:51.644000Z",
			edited: "2014-12-20T21:17:56.891000Z",
			eye_color: "blue",
			image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
			films: [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			gender: "male",
			hair_color: "blond",
			height: "172",
			homeworld: "https://swapi.dev/api/planets/1/",
			mass: "77",
			name: "Luke Skywalker",
			skin_color: "fair",
			species: [],
			starships: [
				{
					MGLT: "50",
					cargo_capacity: "80000",
					consumables: "2 months",
					cost_in_credits: "240000",
					created: "2014-12-15T13:04:47.235000Z",
					crew: "6",
					edited: "2014-12-20T21:23:49.900000Z",
					hyperdrive_rating: "1.0",
					length: "20",
					manufacturer: "Sienar Fleet Systems",
					max_atmosphering_speed: "850",
					model: "Lambda-class T-4a shuttle",
					name: "Imperial shuttle",
					passengers: "20",
					starship_class: "Armed government transport",
					url: "https://swapi.dev/api/starships/22/",
				},
				{
					MGLT: "100",
					cargo_capacity: "110",
					consumables: "1 week",
					cost_in_credits: "149999",
					created: "2014-12-12T11:19:05.340000Z",
					crew: "1",
					edited: "2014-12-20T21:23:49.886000Z",
					hyperdrive_rating: "1.0",
					length: "12.5",
					manufacturer: "Incom Corporation",
					max_atmosphering_speed: "1050",
					model: "T-65 X-wing",
					name: "X-wing",
					passengers: "0",
					starship_class: "Starfighter",
					url: "https://swapi.dev/api/starships/12/"
				}
			],
			url: "https://swapi.dev/api/people/1/",
			vehicles: [
				"https://swapi.dev/api/vehicles/14/",
				"https://swapi.dev/api/vehicles/30/"
			]
		}]
	}
}