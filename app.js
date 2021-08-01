
let name1 = prompt(" Cual es tu nombre?")
let nota1 = Number(prompt("Cual es tu nota del primer trimestre?"))
let nota2 =  Number(prompt("Cual es tu nota del segundo trimestre?"))
 let nota3 =  Number(prompt("Cual es tu nota del tercer trimestre?"))


 function notaF(nota1, nota2, nota3) {
     let resultado = nota1 + nota2 + nota3 
     return resultado
 }

console.log( name1 + ' tu nota final es de', notaF(nota1, nota2, nota3)/3)