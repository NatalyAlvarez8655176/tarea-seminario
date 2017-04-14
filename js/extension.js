var animal = ['gato', 'perro', 'gato','gallina','gallina'];
console.log( animal );
console.log( 'el elemento que se eliminara es perro y queda :' );
animal = animal.filter(function(i) { return i !== 'perro' }); // filtramos
console.log( animal );