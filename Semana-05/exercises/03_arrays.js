console.log('--EXERCISE 3: ARRAYS --');
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a:');
var myArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log('Month 5: '+ myArray[4] + '\nMonth 11: '+ myArray[10])
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');
console.log(myArray.sort());
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');
myArray.unshift('months: ') + myArray.push('finish');
console.log(myArray);
//d.Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');
myArray.shift();
myArray.pop();
console.log(myArray);
//e.Invertir el orden del array (utilizar reverse)
console.log('-Exercise 3.e:');
console.log(myArray.reverse());
//f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');
console.log(myArray.join('-'));
//g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g:');
myArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var newArray = myArray.slice(4,11);
 console.log('the new array is: ' + newArray);