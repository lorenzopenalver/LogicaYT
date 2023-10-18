/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/



function randomGen() {
    return Math.ceil(Math.random() * 100)+ 500
}
    /* console.log(randomGen());
 */

    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
, pe. miFuncion(2002) devolverá true. */

function capicuaNum(num) {
    if(!num){
        return "Debes ingresar algo"
    }
    if (typeof num !== "number") {
        return "Debes ingresar un numero"
    }
    numAString = String(num)
    const revNum = numAString.split("").reverse().join("")
    const revValidator = Number(revNum)
    if (revValidator === num) {
        return true
    }else{
        return false
    }

}

/* console.log(capicuaNum(2323232));
console.log(capicuaNum("232"));
console.log(capicuaNum()); */


/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.  */


function factorial(num) {
    let numFact = num;
    let numDat = num;
    for (let index = 1; index < num; index++) {
        numDat--;
        numFact = numDat * numFact;

        
    }
    return numFact;
};
console.log(factorial(4));