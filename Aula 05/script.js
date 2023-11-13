// Desafio 01

let numero = 10

while (numero >= 1) {
console.log(numero)
numero--
}

// Desafio 02

let numero = 12
let count = 2
let isPrimo = true

while (numero > count) {
  if(numero % count === 0) {
    isPrimo = false
    break
  }
  count++
}

console.log(isPrimo && numero > 1? `${numero} é um número primo!`: `${numero} não é número primo!`)

// Desafio 03
let total = 0

while(true) {
  const numero = Number(prompt('Digite um número'))

  if(numero === 0) {
    break
  }
  if(numero % 2 ===0){
  total += numero
  }
}

console.log(total)

// Desafio 04

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

while(true) {
  const numero = Number(prompt("Digite um número entre 1 e 100: "))
  const msg = (numero > numeroAleatorio) ? 'é maior! Tente outra vez!' : 'é menor! Digite um número maior!';
  if (numero > 100 || numero < 1){
    alert("Digite um número válido!")
    continue
  }
  if (numero === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!")
    break
  }
  alert(` O número ${numero} ${msg}`)
}

// Desafio 05

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 5

while(true) {
  const numero = Number(prompt("Digite um número entre 1 e 100: "))
  const msg = (numero > numeroAleatorio) ? 'é maior! Tente outra vez!' : 'é menor! Digite um número maior!';
  if (numero > 100 || numero < 1){
    alert("Digite um número válido!")
    continue
  }
  if (numero === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!")
    break
  }
  if (--tentativas < 1) {
    alert(`Suas tentativas acabaram! O número correto era ${numeroAleatorio}.`)
    break
  }
  alert(` O número ${numero} ${msg} Você tem mais ${tentativas} tentativa(s)!`)
}