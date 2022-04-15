console.log('--EXERCISE 2: STRINGS --');
//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');
var word = 'radiumrocket';
console.log('Word: '+word + ' \nIn capital letters: ' + word.toUpperCase());
//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b:');
var word = 'radiumrocket';
var result = word.substring(0,5);
console.log('Word: ' + word + '  \nFirst 5 characters: ' + result);
//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c:');
var word = 'radiumrocket';
console.log('Word: ' + word + '\nLast 3 characters: ' + word.substring(word.length-3));
//d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.d:');
var word = 'radiumrocket';
var result = word.substring(0,1).toUpperCase() + word.substring(1); 
console.log('Word: '+ word+ '\nFirst in capital letter: '+result);
//e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');
var word = 'radium rocket';
var result =word.indexOf(' ', 0);
console.log('The string is: '+ word +'\nThe space position es: ' + result);
//f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');
var word = 'radiumrocket javascript';
var result = word.substring(0,1).toUpperCase()+word.substring(1, word.indexOf(' ',0))+' ';
result = result+word.substring((word.indexOf(' ',0)+1),(word.indexOf(' ',0)+2)).toUpperCase();
result = result+word.substring((word.indexOf(' ',0)+2));
console.log('String: '+ word +'\nFirs Letter of both words in capital letters: '+result);