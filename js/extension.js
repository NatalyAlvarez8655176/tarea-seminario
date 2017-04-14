var animal = ['gato', 'perro', 'gato','gallina','gallina'];
console.log( animal );
console.log( 'el elemento que se eliminara es perro y queda :' );
animal = animal.filter(function(i) { return i !== 'perro' }); // filtramos
console.log( animal );

var animal = ['gato', 'perro', 'gato','gallina','gallina'];
console.log(animal);
Array.prototype.buscar = function(animal){
	var mensaje = 'El animal no ha sido encontrado';
	this.forEach(function(elemento, index){
		if (elemento == animal) {
			mensaje = 'El animal :'+animal+' ha sido encontrado en la posicion '+index+' del arreglo';
		}
	});
	return mensaje;
}

console.log(animal.buscar('perro'));