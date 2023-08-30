// Função para validar valores
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteforInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (seMaoirOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>
        Valor inválido: O número secreto precisa estar entre 
        ${menorValor} e ${maiorValor}
        </div>`;
        return;
    }

    // Condicionais caso seja verdade ou proximidade dos valores
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>
                O número secreto é menor
                <i class="fa-solid fa-arrow-down fa-bounce"></i>
            </div>`;
    } else {
        elementoChute.innerHTML += `
        <div>
            O número secreto é maior
            <i class="fa-solid fa-arrow-up fa-bounce"></i>
        </div>`;
    }
}

// Se o chute for um valor inválido
function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

// Se o número não estiver estre o intervalo descrito
function seMaoirOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

// Função para reniciar jogo
document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        // Se o click acontecer no id
        window.location.reload();
    }
});

console.log(numeroSecreto);
