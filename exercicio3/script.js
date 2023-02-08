function somaDoisNum(num1, num2) {
const somaNun = num1 + num2
const frase = `O resultado de ${num1} + ${num2} é: ${somaNun}`
return frase
}

function subtraiDoisNum(num1, num2) {
const subtraiNum = num1 - num2
const frase = `O resultado de ${num1} - ${num2} é: ${subtraiNum}`
return frase
}

function multiplicaDoisNum(num1, num2) {
const multiplicaNum = num1 * num2
const frase = `O resultado de ${num1} * ${num2} é: ${multiplicaNum}`
return frase
}

function divideDoisNum(num1, num2) {
const divideNum = num1 / num2
const frase = `O resultado de ${num1} / ${num2} é: ${divideNum}`
return frase
}
// Parte b

const numeroSolicitado1 = Number(prompt(`Informe o primeiro número`))
const numeroSolicitado2 = Number(prompt(`Informe o segundo número`))

// parte c e d

const opSoma = somaDoisNum(numeroSolicitado1, numeroSolicitado2)
const opSubtrai = subtraiDoisNum(numeroSolicitado1, numeroSolicitado2)
const opMuliplica = multiplicaDoisNum(numeroSolicitado1, numeroSolicitado2)
const opDivide = divideDoisNum(numeroSolicitado1, numeroSolicitado2)

console.log(opSoma)
console.log(opSubtrai)
console.log(opMuliplica)
console.log(opDivide)


