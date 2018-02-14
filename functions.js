
//funciones
function suma ( x, y ){
	var sumaTotal = x + y
	return sumaTotal 
}

// forma 3
var suma3 = (n1,n2) => {
	var sumaTotal = n1 + n2
	console.log(sumaTotal)
}



	// semaforo



var semaforo = (verde,amarillo,) =>{
	var semaforo = "verde"
	if(semaforo=="verde"){
		console.log("Cruza la calle")
	}else if( semaforo=="amarillo"){
		console.log("corre")
	}else{
		console.log("cruza la Calle")
	}

}

semaforo ("verde")


var opSuma = (x,y,z,) => {
	var  suma3num = x + y + z   
	console.log(suma3num)
}

var opResiduo = (n1,n2,) => {
	var residuo1 = (n1 / n2)
	console.log(residuo1)
}



var compra = (totalCompras,) => {
	var totalCompras = 100
	if(totalCompras < 100){
		console.log("pago con efectivo")
	} else if (totalCompras > 100 && totalCompras < 300){
		console.log("pago con tarjeta de debito")
	} else{
		console.log("pago con tarjeta de debito")
	}
}	


var fibonacci = (fibo1,fibo2,) => {
	var fibo = 1
	var fibo2 = 1
	var resultado = 0

	for(i = 0; i < 10; i++) { 
	    fibo = fibo + fibo2; 
	    fibo2 = fibo - fibo2; 
	    console.log( resultado +  ' | ' + fibo); 
	    } 
}



fibo = 1, 
fibo2 = 1, 
resultado=0; 
 
for(i = 0; i < 10; i++) { 
    fibo = fibo + fibo2; 
    fibo2 = fibo - fibo2; 
    console.log(resultado+= ' | ' + fibo); 
    } 



// resultados console.log

suma (1,5)
var prueba = suma(5,7)
console.log(prueba)

suma3 (4,6)

opSuma (3,5,8)

opResiduo(4,7)

compra (150)

fibonacci(1,1,)

