// Parte a
// function somaNum(num1, num2){
// const soma1 = num1 + num2
// console.log(`O resultado é: ${soma1}`)
// }

// somaNum(5,2)

// Parte b

// function comparaNum (numero1, numero2) {
// const compara = numero1 >= numero2
// const frase = `O número ${numero1} é maior ou igual ao ${numero2}: ${compara}`
// console.log(frase)
// }

// comparaNum(15,9)

// Parte c

function verificaParidade(numero1) {
const ehPar = numero1 % 2 === 0
const frase = `O ${numero1} é par? ${ehPar}`
console.log(frase)
}

verificaParidade(4)

// Parte d

function calSalarioLiquido(salario) {

const desconto = salario * 0.1 
const salarioLiquido = salario - desconto
return desconto
}

console.log(calSalarioLiquido(1500.00))
console.log(calSalarioLiquido(7000.00))
