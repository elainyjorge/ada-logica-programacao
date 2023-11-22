// Desafio 01

function soma(numero1, numero2){
  return numero1 + numero2
}
function subtracao( numero1, numero2){
  return numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return numero1 * numero2
}

function divisao(numero1, numero2) {
  return numero1 / numero2
}

function calculadora(numero1, numero2, operador){

  if ( operador === '+'){
    return soma(numero1, numero2)
  }
  if ( operador === '-'){
    return subtracao(numero1, numero2)
  }
  if ( operador === '*'){
    return multiplicacao(numero1, numero2)
  }
  if ( operador === '/'){
    return divisao(numero1, numero2)
  }
}

console.log(calculadora(20, 2, "+"))
console.log(calculadora(20, 2, "-"))
console.log(calculadora(20, 2, "*"))
console.log(calculadora(20, 2, "/"))

// Desafio 02

let saldo = 6000;
let stop = false;

function depositar() {
	const valorDeposito = Number(prompt('Digite o valor do deposito: '));
	saldo += valorDeposito;
	alert(`O valor R$ ${valorDeposito.toFixed(2).replace('.', ',')} foi depositado com sucesso!`);
}

function sacar() {
	const valorSaque = Number(prompt('Digite o valor do saque: '));
	if (valorSaque > saldo) {
		alert('Seu saldo é insuficiente! Operação não realizada.');
	} else {
		saldo -= valorSaque;
		alert(`Saque de R$ ${valorSaque.toFixed(2).replace('.', ',')} efetuado com sucesso!`);
	}
}

function consultarSaldo() {
	alert(`O seu saldo atual é de R$ ${saldo}!`);
}

while (stop == false) {
	let opcao = Number(
		prompt(`Escolha a opção desejada:
      1 - Deposito
      2 - Saque
      3 - Saldo
      4 - Sair`)
	);

	switch (opcao) {
		case 1:
			depositar();
			break;
		case 2:
			sacar();
			break;
		case 3:
			consultarSaldo();
			break;
		case 4:
			alert('Você saiu do sistema! Obrigado(a)');
			stop = true;
			break;
		default:
			alert('Opção inválida! Digite uma opção válida');
			break;
	}
}

// Desafio 03

function mostraTabuleiro(valor) {
  for (let i = 0; i < 3; i++) {
      console.log(valor[i].join(' | '));
      if (i < 2) console.log('---------');
    if (i == 2){
      console.log('Nova jogada')
    }
  }
}

function verificaVencedor(valor, jogador) {
  for (let i = 0; i < 3; i++) {
      if (
          (valor[i][0] === jogador && valor[i][1] === jogador && valor[i][2] === jogador) || // linha
          (valor[0][i] === jogador && valor[1][i] === jogador && valor[2][i] === jogador) // coluna
      ) {
          return true;
      }
  }

  if (
      (valor[0][0] === jogador && valor[1][1] === jogador && valor[2][2] === jogador) ||
      (valor[0][2] === jogador && valor[1][1] === jogador && valor[2][0] === jogador)
  ) {
      return true;
  }

  return false;
}

function jogar() {

  const valor = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
  ];

  let jogadorAtual = 'X';
  let fimJogo = false;

  while (!fimJogo) {
      mostraTabuleiro(valor);

      const linha = prompt(`Jogador ${jogadorAtual}, informe a linha (0, 1 ou 2):`);
      const coluna = prompt(`Jogador ${jogadorAtual}, informe a coluna (0, 1 ou 2):`);

      if (valor[linha][coluna] === ' ') {
          valor[linha][coluna] = jogadorAtual;

          if (verificaVencedor(valor, jogadorAtual)) {
              mostraTabuleiro(valor);
              alert(`Parabéns! O jogador ${jogadorAtual} venceu.`);
              fimJogo = true;
          } else {
              jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
          }
      } else {
          alert('Posição ocupada! Tente novamente.');
      }
  }
}

jogar();

// Teste de Lógica 01

const lista = [ 5, 1, 6, 3, 9]
const lista2 = [ 9, 3, 3, 5, 8]

function somaArrayMinMax(array) {
  array.sort((a, b) => a - b)
  const minSoma = array.slice(0, array.length - 1).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
  const maxSoma = array.slice(1).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
  return [minSoma, maxSoma]
}

console.log(somaArrayMinMax(lista))
console.log(somaArrayMinMax(lista2))

// Teste de Lógica 02

function desenharEscada(n) {
  for (let count = 1; count <= n; count++) {
      let espacos = '';
      let degraus = '';

      for (let espaco = 1; espaco <= n - count; espaco++) {
          espacos += ' ';
      }

      for (let degrau = 1; degrau <= count; degrau++) {
          degraus += '#';
      }
      console.log(espacos + degraus);
  }
}
desenharEscada(8);