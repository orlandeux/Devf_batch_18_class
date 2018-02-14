const request = require("request");
const url = "http://pokeapi.co/api/v2/pokemon/94";

request.get(url,(error, response, body) => {
let json = JSON.parse(body);
console.log(
	`Name: ${json.forms[0].name} \n`,
	`Habilidades: ${json.abilities[0].ability.name} \n`,
	`tipo: ${json.types[1].type.name} \n`,
	`rareza: ${json.held_items[0].version_details[1].rarity} \n`,
	`numero: ${json.id} \n `

		//	`Longitud: ${json.results[0].geometry.location.lng} \n`,
		//	`Nuevo: ${json.results[0].geometry.bounds.northeast.lat} \n

	 );
});
