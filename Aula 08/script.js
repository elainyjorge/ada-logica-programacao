// Atualização exercício Jogo da Velha

function mostraTabuleiro(valor) {
	let valorStr = '';
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			valorStr += valor[i][j] + '   ';
		}
		valorStr += '\n';
	}
	alert(valorStr);
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
		['1', '2', '3'],
		['4', '5', '6'],
		['7', '8', '9'],
	];

	let jogadorAtual = 'X';

	while (true) {
		mostraTabuleiro(valor);

		const escolha = prompt(`Jogador ${jogadorAtual}, informe um número de 1 a 9: `);

		if (isNaN(escolha) || escolha < 1 || escolha > 9) {
			alert('Escolha inválida. Tente novamente.');
			continue;
		}

		let linha = Math.floor((escolha - 1) / 3);
		let coluna = (escolha - 1) % 3;

		if (valor[linha][coluna] === 'X' || valor[linha][coluna] === 'O') {
			alert('Posição ocupada. Tente novamente.');
			continue;
		}

		valor[linha][coluna] = jogadorAtual;

		if (verificaVencedor(valor, jogadorAtual)) {
			mostraTabuleiro(valor);
			alert(`Parabéns! O jogador ${jogadorAtual} venceu.`);
			break;
		}
		jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
	}
}

jogar();