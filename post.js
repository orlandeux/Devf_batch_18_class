var request = require('request');
URL_BASE ="https://goodreads-devf-aaron.herokuapp.com/api/v1"
URI = "/authors/"
URL = URL_BASE + URI

json_send = {
	"name": "Doug",
	"last_name": "Narinas",
	"nacionalidad": "MX",
	"biography": "Character",
	"gender": "M",
 	"age": 30
}
request.post({url:URL, form: json_send},
	function  (error, response, body) {
		console.log("body",body)

	})