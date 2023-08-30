const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

// Para imprimir os valores em tela
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

// Funçao para  gerar um valor aleatório inteiro
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}
