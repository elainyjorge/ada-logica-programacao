// Desafio - 01 Verificação de Números Pares e Ímpares (IF e Ternário)

// Ternário
const numero = 2;
const resultado = numero % 2 === 0 ? "É par" : "É impar"
console.log(resultado)

// IF
if (numero % 2 == 0) {
  console.log("É par")
} else {
  console.log("É impar")
}

// Desafio 02 - Verificação de Nota

const nota = 85

if (nota >= 90) {
  console.log("Aprovado com mérito")
} else if(nota >= 70) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}

// Desafio 03 - Determinação do Maior Número

const numero1 = 10
const numero2 = 15
const numero3 = 20

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1)
} else if(numero2 > numero1 && numero2 > numero3) {
  console.log(numero2)
} else {
  console.log(numero3)
}

// Desafio 04 - Verificação de Triângulo

const lado1 = 5
const lado2 = 5
const lado3 = 5

if (lado1 === lado2 && lado1 === lado3) {
  console.log("Triângulo equilátero!")
} else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("Triangulo isósceles!")
} else {
  console.log("Triângulo escaleno")
}

// Desafio 05 - Verificação de Ano Bissexto

const ano = 2021;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log("Ano bissexto!")
} else {
  console.log("Não é ano bissexto!")
}


// Desafio 06 - Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)

// Resposta IF
const idade = 16
if (idade >= 18) {
  console.log("Você pode comprar bebidas alcóolicas!")
} else {
  console.log("Você não pode comprar bebidas alcoólicas!")
}

// Resposta Ternário
idade >= 18 ? console.log("Você pode comprar bebidas alcóolicas!") : console.log("Você não pode comprar bebidas alcoólicas!")

// Desafio 07 - Verificação de Números Pares e Ímpares

const parOuImpar = 2
switch(parOuImpar % 2) {
  case 0:
    console.log("É par")
    break;
  default:
    console.log("É ímpar")  
}

// Desafio 08 - Conversão de Notas em Conceitos

const verificaVogal = "U";
switch (verificaVogal.toLowerCase()) {
  case "a":
  case "e":
  case "i": 
  case "o":
  case "u":
          console.log("É uma vogal")
          break
   default:
            console.log("É uma consoante")
  }

// Desafio 09 - Determinação de Estação do Ano

const mes = "Abril"
switch (mes.toLowerCase()) {
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log("Inverno")
    break
  case "março":
  case "abril":
  case "maio":
    console.log("Primavera")
    break
  case "junho": 
  case "julho":
  case "agosto":
    console.log("Verão")
    break
  case "setembro":
  case "outubro":
  case "novembro": 
  console.log("Outono")  
  break
  default:
  console.log("Mês inválido!")            
}