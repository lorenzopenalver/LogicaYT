/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá "odnuM aloH". */

//5

function invertString(string ="") {
    if (typeof string !== "string" ) {
        return "No es un string"
    }else if(string === ""){
        return "No valido"
    }
    else{
       return string.split("").reverse().join("")
    }

};
/* console.log(invertString("Hola Mundo"));
console.log(invertString(""));
 */

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

function countNumber(string, keyword) {
    let validator = 0;
    const arr = string.split(" ")
    if (!string || !keyword) {
        return "Valores no válidos"
    }else if (typeof string !== "string" || typeof keyword !== "string"){
        return "Ambos valores deben ser strings"
    }
    else if(string == "" || keyword == ""){
        return "Ambos deben tener un valor"
    }
    for (let i = 0; i < arr.length; i++) {
        if (keyword == arr[i]) {
            validator++;
        }
        
    }
    return `Hay un total de ${validator} ${keyword}`;
};

/* console.log(countNumber("Hola Mundo de Mundo Mundo Mundo", "Mundo")); */


/* 
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un 
    sentido que en otro), pe. mifuncion("Salas") devolverá true. */

function phraseValidator(string) {

    if (!string) {
        return "Debes colocar un string"
    }else if(string == ""){
        return "Tu string debe tener un valor"
    }else if (typeof string !== "string"){
        return "Debes poner un string"
    }
    const stringValidation = string.toLowerCase()
    const validator = string.split("").reverse().join("").toLowerCase()
   if (validator == stringValidation){
    return true
   }else{
    return false
   }
};

/* console.log(phraseValidator("Ojo"));
console.log(phraseValidator(2)); */

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

function miFuncion(string, recortar) {
    if (!string || !recortar) {
        return "Valores no válidos"
    }else if (typeof string !== "string" || typeof recortar !== "string"){
        return "Ambos valores deben ser strings"
    }
    else if(string == "" || recortar == ""){
        return "Ambos deben tener un valor"
    }else{
    return string.split(recortar).join(" ")
}};
console.log(miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log(miFuncion("", "xyz"));
console.log(miFuncion("222", 2));