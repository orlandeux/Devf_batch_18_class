class Animal {
	//constructor
	constructor (name){
		this.name = name
	}
	getName(){
		return this.name
	}
	setName(newName){
		this.name = newName
	}
	resguardo(){
		return "resguardo" 
	}
}


class Aereo extends Animal{
	//constructor
	constructor (alas,name){
		super(name)
		this.alas = alas
	}
	getAereo(){
		return this.aereo
	}
	setAereo(){
		this.aereo = newAlas
	}
	volar(vuela){
		return volara
	}
}


class Terrestre extends Animal{
	//constructor
	constructor (name,patas){
		super(name)
		this.patas = patas
	}
	getTerrestre(){
		return this.patas
	}
	setTerrestre(){
		this.patas = newPatas
	}
	camina(moverse){
		return Caminar
	}
}

class Acuatico extends Animal{
	//constructor
	constructor (name,aletas){
		super(name)
		this.aletas = aletas
	}
	getAcuatico(){
		return this.aletas
	}
	setAcuatico(){
		this.aletas = newAletas
	}
	nadar(nada){
		return "esta es una especie tipo: " + this.aletas  
 	}
}

function tipificar(Animal){
	console.log(Animal.volar(vuela))
}

//
var pulpo = new Acuatico('Suso',0)
var atun = new Acuatico('Tuny',3)
//
var gorila = new Terrestre('Mew',4)
var oso = new Terrestre('Balu',2)
//
var perico = new Aereo('Balu',2)
var tucan = new Aereo('Balu',2)
//print
console.log(pulpo,atun,gorila,oso,perico,tucan) 

console.log(pulpo.nadar(""))

var acuaticosAll = (pulpo,atun) =>






