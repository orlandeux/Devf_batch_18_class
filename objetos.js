/*var objeto = { }
//console.log(typeof(objeto))


var bike = { 
	motor = "fixed"
	ruedas: 2,
	color: "rojo",
	marca: "DIY",
	acelerar: function(){
		console.log(this.motor)
		return "rodar"
	}
}
console.log(bike.acelerar())*/

// Hacer objeto que se llame factura
// subtotal e iva total y este se va a retornar
// la suma de subtotal + Iva


var factura = {
	folio: 124,
	cliente : "JoJo Co.",
	cantidad: 22,
	description: "yoyos",
	subtotal: 599.99,
	iva: 69.99,
	total: function(){ 
		return this.subtotal + this.iva;	
	}
}
var totalFactura = factura.total();
var cliente = factura.cliente

console.log("la cuenta total de  " + cliente + "es " + totalFactura )

var jetta = {	
}

function Auto(marca,modelo,annio) {
	this.marca = marca
	this.modelo = modelo
	this.annio= annio
	var arranca = function (){
		return "arranco el " + modelo
	}
	this.arranca = arranca
}

var jetta = new Auto("Nissan","jetta",2015)
console.log(jetta.arranca())
var tsuru = new Auto()

