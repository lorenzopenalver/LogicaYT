

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no,pe. miFuncion(7) devolverá true. */
function isPrimo(num) {
    if (typeof num !== "number" || !num) {
        return "Se necesita numero"
    }
    if (num % 2 === 0) {
        return false
    }else if (num % 3 === 0){
        return false
    }else{
        return true
    }
}
/* console.log(isPrimo(73)); */


/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

function isPar(num) {
    if (typeof num !== "number" || !num) {
        return "Se necesita numero"
    }
    if (num % 2 === 0) {
        return "Par"
    }else if (num % 3 === 0){
        return "Impar"
    }else{
        return "Primo"
    };
};
/* console.log(isPar());
 */

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. */

function celsiusAFahrenheit(num,type) {
    if (typeof num !== "number" || typeof type !== "string") {
        return "Valores inválidos, Intentar de nuevo con valores válidos"
    }
    let resCelius = (num * 1.8) + 32
    let restFar = (num - 32) * (5/9)
    if (type == "C" || type == "c") {
        return resCelius + "° Fahrenheit"
    }else if (type == "F" || type == "f") {
        return restFar + "° Celsius"
    }
}
console.log(celsiusAFahrenheit(1,"f"));
console.log(celsiusAFahrenheit(1,"c"));
console.log(celsiusAFahrenheit());