var request = require('request')

//var url = 'https://swapi.co/api/people/3'

/*
console.log("primero")
var name = 'medio'
request.get(url,function(error,status,response){
	response = JSON.parse(response);
	name = response.name
	console.log('dentro name ' + name) 
})

console.log(name)
console.log("ultimo")
*/

/*
const promise = new promise(function(resolve,reject){
	request.get(url,function(error,status,response){
		if (status.statusCode == 200){
			resolve(JSON.parse(response))

		}else{
			reject("woops...!")
		}
	})
})
*/

/*

function promesa(){
	return new Promise(function(resolve,reject){
		request.get(url,function(error,status,response){
		if (status.statusCode == 200){
			resolve(JSON.parse(response))

		}else{
			reject("woops...!")
		}
	});
});	
}

promesa()
  .then(function(body){
	console.log(body.name)
}).catch(function(error){
	console.log(error)
})

*/
//

var url = 'https://swapi.co/api/people/1/'
var peopleName = []
var planetName = []
var movieName = []


function promesa(){
	return new Promise(function(resolve,reject){
		request.get(url,function(error,status,response){
		if (status.statusCode == 200){
			resolve(JSON.parse(response))
		}else{
			reject("woops...!")
		}
	});
});	
}

function promesa2(urlnueva){
	return new Promise(function(resolve,reject){
		request.get(urlnueva,function(error,status,response){
		if (status.statusCode == 200){
			resolve(JSON.parse(response))
		}else{
			reject("woops...!")
		}
	});
});	
}

function promesa3(urlnueva2){
	return new Promise(function(resolve,reject){
		request.get(urlnueva2,function(error,status,response){
		if (status.statusCode == 200){
			resolve(JSON.parse(response))
		}else{
			reject("woops...!")
		}
	});
});	
}

promesa()
  .then(function(body){
  	var urlnueva = body.films[0]
  	//console.log(urlnueva)
	console.log(body.name)
	peopleName.push((body.name))
	promesa2(urlnueva)
	  .then(function(body){
	  	var urlnueva2 = body.planets
		console.log(body.title)
		console.log(body.release_date)
		movieName.push((body.title))
		promesa3(urlnueva2)
		  .then(function(body){
		  	for (var i = 0; i < body.planets.length; i++) {
	  		listplanets.push(body.name[i])
	  	};
	  		//console.log(urlnueva2)
			console.log(body.name[i])
			planetName.push((body.name))
			var data_movie = `${peopleName} ${movieName} ${planetName} ` 
			console.log(data_movie)
		}).catch(function(error){
			console.log(error)
		})
	}).catch(function(error){
		console.log(error)
	})
}).catch(function(error){
	console.log(error)
})

console.log()


/*promesa()
  .then(function(body){
  	var urlnueva = body.films[0]
  	//console.log(urlnueva)
	console.log(body.name)
	promesa2(urlnueva)
	  .then(function(body){
	  	var urlnueva2 = body.planets[0]
		console.log(body.title)
		promesa3(urlnueva2)
		  .then(function(body){
	  		//console.log(urlnueva2)
			console.log(body.name)
		}).catch(function(error){
			console.log(error)
		})
	}).catch(function(error){
		console.log(error)
	})
}).catch(function(error){
	console.log(error)
})*/







