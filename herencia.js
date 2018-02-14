class Animal {
	//constructor
	constructor (name,peso=0){
		this.name = name
		this.peso = peso
	}
	getName(){
		return this.name
	}
	setName(newName){
		this.name = newName
	}
	comer(comida){
		return 'el ' + this.name + ' esta comiendo ' + comida
	}
}


class Perro extends Animal{
	constructor (raza,name,peso){
		super(name,peso)
		this.raza = raza
	}
	getRaza(){
		return this.raza
	} 
	setRaza(newRaza){
		this.raza = newRaza
	}
	correr(){
		return `El Perro de la raza ${this.raza} esta corriendo`
	}
}

class Pajaro extends Animal{
	constructor(especie,name,peso){
		super(name,peso)
		this.especie = especie
	}
	getEspecie(){
		return this.especie
	}
	setEspecie(){
		this.especie = newEspecie
	}
	volar(altitud){
		return `el ave de la especie ${this.especie} vuela a ${altitud}` 
	}
}

function hacerRuido(Animal){
	console.log(Animal.comer(comida))
}


var pug = new Perro("pug","Fido",30)
var condor = new Pajaro("condor","nuno","60",)
console.log(pug.comer('croquetas'))
console.log(condor.volar("6,000 pies"))

//  ejercicio = 2Clases: documental y pelicula
// funcion reproducir 
// imprimir reproducir pel y doc 










