/*  15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10. */

function binADecimal(num,base) {
   
    if (base == 2) {
        return parseInt(num,2)
    }else if (base == 10){
        let result = (num % 2).toString();
        for (; num > 1; ) {
          num = parseInt(num / 2);
          result  =  (num % 2) + (result);
        }
        return result;
    }
    
   
}

//console.log(binADecimal("40",10));


/* 
function BinarioADecimal(num, base) {
    sum = 0
    let numString = String(num)
    var numReverse = numString.split('').reverse().join('')
  
    const arrFinal = []
  
    if(base == 2){
        for (i = 0; i < numReverse.length; i++) {
//   console.log(`${sum} = ${sum}+${numReverse[i]} * 2 ** ${i} `) 
      sum = sum + numReverse[i] * 2 ** i;
    }}
    else if(base == 10){
        for (let i = 0; i < numReverse; i++) {
            let numDiv = i /2 ;
            if (numDiv % 2 === 0) {
                arrFinal.push("0")
            }else if (numDiv % 2 === 1){
                arrFinal.push("1")
            }
        }
        return arrFinal
    }
    return sum;
  }
 */
  
/*   console.log(BinarioADecimal(5, 10)); */







/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800. */

function descuento(precio, desc) {
    if (typeof precio !== "number" || typeof desc !== "number") {
        return "Tienes que dar numeros válidos"
    }else{
        let res = precio*(desc/100);
        return `Tenés que pagar un total de $${precio - res} ($${res} de descuento)`
    }
   
}

//console.log(descuento(1200, 30));




/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */


function date(date) {
    let prevDateYear = date.getFullYear()
    let prevMonth = date.getMonth()
    let prevDay = date.getDate()
    
    let actualYear = new Date().getFullYear()
    let actualMonth =  new Date().getMonth() + 1
    let actualDay =  new Date().getDate()
   
    let resDate = (actualYear - prevDateYear)
    if (actualYear < prevDateYear) {
        return `Faltan ${Math.abs(resDate)} años`
    }
    else if (prevMonth <= actualMonth) {
        return  actualDay >= prevDay? `Han pasado ${resDate} años`: `Han pasado ${resDate - 1} años`
       
    }else{
       return `Han pasado ${resDate - 1} años`
    }
  
}
console.log(date(new Date(3984,4,23)));