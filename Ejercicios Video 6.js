/* 
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

function typeofLetra(string) {
    let stringArray = string.split(" ").join("").toLowerCase()
    let vocalNumber = 0;
    
    let consonanteNumber = 0;
    console.log(stringArray);
    for (let i = 0; i < stringArray.length; i++) {
        const element = stringArray[i];
        if (element == "a"||element == "e"||element == "i"||element == "o"||element == "u") {
            vocalNumber++
        }else{
            consonanteNumber++;
        }
        
    }
    return `Vocales: ${vocalNumber}. Consonantes: ${consonanteNumber}`
}
function typeofLetra2(string) {
    let stringArray = string.split(" ").join("").toLowerCase()
    let vocalNumber = 0;
    let consonanteNumber = 0;

    console.log(stringArray);
    for (i of stringArray) {
        if (/[aeiouáéíóúü]/.test(i)) {
            vocalNumber++
        }else{
            consonanteNumber++;
        }
        
    }
    return `Vocales: ${vocalNumber}. Consonantes: ${consonanteNumber}`
}


//console.log(typeofLetra2("HolA mundo"))

/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

function nombreValidator(string) {
   
    for (i of string) {
    
        if (/[0-9-_,.]/g.test(string)) {
            return "Nombre inválido"
        }else{
           return "Nombre válido"
        }
        
    }
}
console.log(nombreValidator("Jonathan Mir2Cha"));



/* 20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

function validarMail(string) {
    const emailArrobaSeparation = string.split("@")
    const firstArgument = emailArrobaSeparation[0].split("")
    const secondArgument = emailArrobaSeparation[1].split("")
   
    if (emailArrobaSeparation.length >= 3) {
        return false
    }else {
        if (firstArgument && secondArgument) {
            for (let i = 0; i < firstArgument.length; i++) {
                let element = firstArgument[i]
                if (/[-ñ&.,]/.test(element)) {
                 return "Valores invalidos al inicio de tu correo"
                }
             }
             for (let i = 0; i < secondArgument.length; i++) {
                let element = secondArgument[i]
                if (/[0-9-ñ&_,]/.test(element) ) {
                 return "Valores invalidos al final de tu correo"
                }
             } 
             return "Correo electrónico válido"
        }else{
            return "Ingresa todo lo que te pido pelotudo"
        }
        
    }
   
        
    
   
}




console.log(validarMail("jonmi@gmail.com"));