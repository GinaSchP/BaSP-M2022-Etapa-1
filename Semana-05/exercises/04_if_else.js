console.log('--EXERCISE 4: IF-ELSE --');
//a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log('-Exercise 4.a:');
var myNumber = Math.random();
if (myNumber >= 0.5) {
 alert('Greater than 0,5');   
} else {
    alert('Lower than 0,5');
}
/*b.Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
I-“Bebe” si la edad es menor a 2 años;
II-“Niño” si la edad es entre 2 y 12 años;
III-“Adolescente” entre 13 y 19 años;
IV-“Joven” entre 20 y 30 años;
V-“Adulto” entre 31 y 60 años;
VI-“Adulto mayor” entre 61 y 75 años;
VII-“Anciano” si es mayor a 75 años.*/
console.log('-Exercise 4.B:');
var age = Math.random()*10;
if (age<=2) {
    alert('Bebe');
} else if (age>2&age<=12){
    alert('niño');
} else if (age>=13&age<=19){
    alert('adolescente');
} else if(age>=20&age<=30){
    alert('joven');
}else if(age>=31&age<=60){
    alert('adulto');
}else if(age>=61&age<=75){
    alert('adulto mayor');
}else if(age>75){
    alert('anciano');
}