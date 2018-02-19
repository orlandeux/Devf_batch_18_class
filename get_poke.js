/*
const request = require("request");
const url = "http://pokeapi.co/api/v2/pokemon/94";

request.get(url,(error, response, body) => {
let json = JSON.parse(body);
console.log(
	`Name: ${json.forms[0].name} \n`,
	`Habilidades: ${json.abilities[0].ability.name} \n`,
	`tipo: ${json.types[1].type.name} \n`,
	`rareza: ${json.held_items[0].version_details[1].rarity} \n`,
	`numero: ${json.id} \n 

		//	`Longitud: ${json.results[0].geometry.location.lng} \n`,
		//	`Nuevo: ${json.results[0].geometry.bounds.northeast.lat} \n

	 );
});*/


/*const request = require("request");
const url = "https://goodreads-devf-aaron.herokuapp.com/api/v1";

request.get(url,(error, response, body) => {
	let json = JSON.parse(body);
	for (var i = 0; i < json.lenght; i++) {
		if (json[i].id ==96){
			console.log(json[i])
		}
	})
	

*/

   // encadenar 
   // promesa


const request = require("request");

const URL = "http://pokeapi.co/api/v2/pokemon/";

for (var i = 1; i<=10; i++ ){
   var url = URL + i
   request.get(url,(error,response,body) =>{
       var json = JSON.parse(body)
       console.log(
           `Nombre: ${json.name}\n`,
           `Numero: ${json.id}`)
   })
}


