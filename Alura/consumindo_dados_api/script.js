async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value)); // focusout -> quando click fora

// SOLUÇAO PARA RESOLVER VARIOS CEPS

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));

/*
Resumo dos recursos da aplicação

Síncrono -> Acontece do momento
Assincrono -> Ocorre depois, sem que a tela pareça estar travada! / Em segundo plano

task Queue -> Fila de tarefas assíncronas
event Loop -> Monitora e executa as ações que mandamos para o javaScript
Call Stack -> Organiza como irá funcinar o o script quando existe muitas funções

setTimeOut(função, tempo) -> Determina um tempo para iniciar a função

Callbacks -> Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
Promise -> Uma promeça que o valor irá chegar ou dará erro

.then() -> Então?
.cath() -> Se houver erro

O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.







*/
