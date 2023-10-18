/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

function ascDesc(arr) {
    const container = {
        asc: undefined,
        desc: undefined,
    }
    
    const arrAsc = [...arr]
    const arrAsc2 = [...arr]
    arrAsc.sort()
    arrAsc2.sort()
    const arrDesc = arrAsc2.reverse();
    container.asc = [...arrAsc]
    container.desc = [...arrDesc]
    return container
}
//console.log(ascDesc([7, 5,7,8,6]));

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

function deleteSame(arr) {
    const arrNuevo = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

       if (!arrNuevo.includes(element)) {
        arrNuevo.push(element)
       }
    }
    return arrNuevo
}
/* console.log(deleteSame(["x", 10, "x", 2, "10", 10, true, true])); */



/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */


function promedio(arr) {
 let arrTotal = arr.reduce((item,sum) => item + sum, 0)
 return `${arrTotal / arr.length} Porciento`
}

console.log(promedio([9,8,7,6,5,4,3,2,1,0]));