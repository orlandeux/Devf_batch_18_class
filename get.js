const request = require("request");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florida";

request.get(url,(error, response, body) => {
let json = JSON.parse(body);
console.log(
	`Ciudad: ${json.results[0].formatted_address} \n`,
		`Latitud: ${json.results[0].geometry.location.lat} \n`,
			`Longitud: ${json.results[0].geometry.location.lng} \n`,
			`Nuevo: ${json.results[0].geometry.bounds.northeast.lat} \n`

	 );
});
