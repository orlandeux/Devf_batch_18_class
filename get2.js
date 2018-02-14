var request = require("request");
request({
	uri: "http://www.sitepoint.com",
	method: "GET",
	timeout: 1000,
	followRedirect: true,
	maxRedirects: 10,

}, function(error,response,body ){
	console.log(response)
})