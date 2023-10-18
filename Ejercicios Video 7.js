/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

function arrAlCuadrado(arr) {
    const arrNuevo = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element = element * element
        arrNuevo.push(element)
       
    }
    return arrNuevo
}
//console.log(arrAlCuadrado([1, 4, 5]));

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
 pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

 function maxMin(arr) {
    const newArr = []
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    newArr.push(max, min)
    return newArr
 }
 //console.log(maxMin([1, 4, 5, 99, -60]));

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los
 números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0],
impares: [1,3,5,7,9]}.   */

function evenOddSeparation(arr) {
    const evenAndOdd = {
        even: [],
        odd: []
    }
    if (!arr || typeof arr !== "object" || arr === undefined || arr === null) {
        return "No estas ingresando un array válido"
    }else{
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (typeof element === "number") {
                if (element % 2 === 0) {
                    evenAndOdd.even.push(element)
                }else{
                    evenAndOdd.odd.push(element)
                }  
            }else{
                return `Elemento Inválido: ${typeof element} ${element}`  
            }
           
            
        }
    }
    
  
    return evenAndOdd
}
console.log(evenOddSeparation([1,2,3,4,5,6,7,8,9,0]));
console.log(evenOddSeparation(undefined));



