/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".


 */

//1
function contarCaracteres(string) {
    return string.length
}
console.log(contarCaracteres("Hola Mundo"));
//2
function cortarTexto(string, cortar) {
    if (!string) {
        return console.log("puto el que lee");
    }
    return string.slice(0, cortar)
}
console.log(cortarTexto("Hola Mundo", 4));
//3
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function arrayDeTextos(string, separation, agregation) {
    return string.split(separation).join(agregation)
}
console.log(arrayDeTextos('hola que tal'," " ," "));
/* 
let arr = [1,2,3,4,5,65,6,7,]

console.log(arr.join(" ")) */


//4

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo. */

function repeatString(string, repeatNum) {
    let newString = " "
    for (let index = 0; index < repeatNum; index++) {
        newString += string + " "
      /*   newString = newString + string + " " */
        // "Hola" + "Mundo" = "Hola Mundo" 
    }
    return newString
    
  /*   return string.repeat(repeatNum) */
}

console.log(repeatString("Hola Mundo", 8));





