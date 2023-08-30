const elementoChute = document.querySelector('#chute');

//A API Web Speech fornece duas áreas distintas de funcionalidade — reconhecimento de fala e síntese de fala (também conhecida como texto para fala ou tts) — que abrem novas possibilidades interessantes para acessibilidade e mecanismos de controle. Este artigo fornece uma introdução simples a ambas as áreas, juntamente com demonstrações.

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'; // Para português
//recognition.start();

recognition.addEventListener('result', onSpeak); // Um evento para obeter o resultado do chute

// Função para obter o valor do chute
function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

// Função para exibir o valor do chute na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `;
}

//recognition.addEventListener('end', () => recognition.start());

// Função para clicar e falar
document.body.addEventListener('click', (e) => {
    if (e.target.id == 'ativar-mic') {
        console.log('Cliclou!');
        recognition.start();
    }
});
