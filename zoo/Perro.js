var animal =  requiere('./Animal')


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

module.exports.Perro = Perro