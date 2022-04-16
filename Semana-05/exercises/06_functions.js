console.log('--EXERCISE 6: FUNCTIONS --');
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a:');
function add(x,y){
    return x+y;
}
var result = add(2,5);
console.log('The function result is: '+ result);
//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('-Exercise 6.b:');
function add(x,y){
    if(isNaN(x) || isNaN(y)){
        alert(message= 'One of the parameters is incorrect')
        return NaN;
    } else{
        return x+y;
    }
}
var result = add(2,"f");
console.log('The function result is: '+ result);
//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');
function validate(n){
    if(Number.isInteger(n)){
        return true;
    }else {
        return false;
    }
}   
//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('-Exercise 6.d:');
function add(x,y){
    if(isNaN(x) || isNaN(y)){
        alert(message= 'One of the parameters is incorrect')
        return NaN;
    } else{
        if(!validate(x) || !validate(y)){
            alert(message= 'Not Integer')
            x = Math.round(x);
            y = Math.round(y);
        }
        return x+y;
    }
}
console.log(add(2,2.5))
//e.Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('-Exercise 6.e:');
function myround(n){
    if(!validate(n)){
        alert(message= 'Not Integer')
        n = Math.round(n);
    }
    return  n;
}
function add(x,y){
    if(isNaN(x) || isNaN(y)){
        alert(message= 'One of the parameters is incorrect')
        return NaN;
    } else{
        return myround(x)+myround(y);
    }
}
console.log(add(2,2.5));