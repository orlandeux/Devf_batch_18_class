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

var animal = new Animal ("Animal")
console.log(animal.comer("pollo"))

// herencia  // multiherencia




