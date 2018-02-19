//
var request = require('request')
URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
URI="/authors/"
DIRECCION = URL_BASE + URI
/*
json_send = {
	"name": "Enrique",
	"last_name": "Ferrufino",
	"nacionalidad": "MX",
	"biography": "Tacos al pastor!",
	"gender":"M",
	"age": 25
}*/

request.post(DIRECCION, function (error, response, body){
	let json = JSON.parse(body);
	for (i=0;i<json.length;i++){
		if(json[i].id==103){
			console.log(json[i].name, json[i].last_name)
			console.log(json[i])
		}
			
	}
	
}	)

//