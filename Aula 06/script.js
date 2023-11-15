// Desafio 01

let somaNumeros = 0

for(let i = 1; i <= 10; i++){
somaNumeros += i
}

console.log(`A soma dos números é ${somaNumeros}`)

// Desafio 02

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
}

for( let propriedade in pessoa) {
  console.log(propriedade + ':' + pessoa[propriedade])
}

// Desafio 03

const frutas = ['banana', 'kiwi', 'uva', 'morango', 'laranja']

for(let fruta of frutas) {
  console.log(fruta)
}

// Desafio 04

let numero = 10

for(i = 1; i<= 10; i++){
  let resultado = numero * i
  console.log(`${numero} x ${i} = ${resultado}`)
}

// Desafio 05

const valores = {
  valor1: 10, 
  valor2: 20,
  valor3: 30,
  valor4: 40
}
let soma = 0
for(let i in valores){
 soma += valores[i]
}

console.log(soma)

// Desafio 06

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numero = 7

let itemAchado = false

// Usando for of
for(let item of lista){
  if (item === numero) {
    itemAchado = true
    break
  }
}

// Usando for
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === numero){
    itemAchado = true
    break
  }
}

console.log(itemAchado ? 'Número achado' : 'Número não encontrado')

// Desafio 07

const start = Number(prompt('Digite aqui'))
const start = 5
const lista = []

for(let count = 0; count < start; count ++){
  if(count <= 1) {
    lista.push(1)
  } else {
    const soma = lista[count -1] + lista[count - 2]
    lista.push(soma)
  }
}

console.log(lista)

// Desafio 08

const palavra = 'papel'
const letras = palavra.split('')
let totalVogais = 0

for(let i = 0; i < letras.length; i++) {
 if(letras[i] === 'a' || letras[i] === 'e' || letras[i] === 'i' || letras[i] === 'o' || letras[i] === 'u'){
  totalVogais++
 }
}

console.log(`A palavra ${palavra} possui ${totalVogais} vogais!`)

// Solução considerando acentos e letras maiusculas

const palavra = 'Avião';
const vogaisExistentes = ['a','à','á','â','ã','e','é','è','ê','i','í','ì','î','o','ó','ò','ô','õ','u','ú','ù','û']
const letras = palavra.split('');
let totalVogais = 0;

for(let i=0; i < letras.length; i++) {
  if (vogaisExistentes.includes(letras[i].toLowerCase())) {
    totalVogais++
  }
}

console.log(totalVogais)

// Desafio 09

const novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]

// Usando laço Do While e For

let troca
do {
troca = false
  for(let i = 0; i <= novoArray.length; i++){
    if (novoArray[i] > novoArray[i + 1]) {
      let temp = novoArray[i]
      novoArray[i] = novoArray[i + 1]
      novoArray[i + 1] = temp
      troca = true
    }
  }
} while(troca)

console.log(novoArray)

// Usando laço For

for (let i = 1; i < novoArray.length; i++)
    for (let j = 0; j < i; j++)
        if (novoArray[i] < novoArray[j]) {
            let temp = novoArray[i];
            novoArray[i] = novoArray[j];
            novoArray[j] = temp;
        }

console.log(novoArray);

// Usando método sort

const resultado = novoArray.sort((a, b) => (a - b))
console.log(resultado)

// Desafio 10

const quantidadeDados = 4
let valoresIndividuais = []
let somaDados = 0

console.log("Rolagens Individuais: ")
for( let i = 1; i <= quantidadeDados; i++) {
  let valorDado = Math.floor(Math.random() * 6) + 1
  valoresIndividuais.push(valorDado)
  somaDados += valorDado
  console.log(`Dado ${i} : ${valorDado}`)
}

console.log(`A soma dos dados é ${somaDados}`)

// Desafio 11

const quantidadeDados = 5
const quantidadeLados = 10
let valoresIndividuais = []
let somaDados = 0

console.log("Rolagens Individuais: ")
for( let i = 1; i <= quantidadeDados; i++) {
  let valorDado = Math.floor(Math.random() * quantidadeLados) + 1
  valoresIndividuais.push(valorDado)
  somaDados += valorDado
  console.log(`Dado ${i} : ${valorDado}`)
}

console.log(`A soma dos dados é ${somaDados}`)

// Desafio 12

const quantidadeDados = 4
const quantidadeLados = 9
const tentativas = 2
let valoresIndividuais = []
let count = 1

while (count <= tentativas){
  let somaDados = 0
  console.log(`Tentativa ${count}`)
  console.log("Rolagens Individuais: ")

  for( let i = 1; i <= quantidadeDados; i++) {
    let valorDado = Math.floor(Math.random() * quantidadeLados) + 1
    valoresIndividuais.push(valorDado)
    somaDados += valorDado
    console.log(`Dado ${i} : ${valorDado}`)
  }
  count++
  console.log(`A soma dos dados é ${somaDados}`)
}








