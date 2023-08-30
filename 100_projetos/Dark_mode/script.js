let container = document.querySelector('body');
let botao = document.querySelector('button');
let texto = document.querySelector('.container h1');
let botao2 = document.querySelector('#botao2');
let circle = document.querySelector('.circle');

function modo_escuro() {
    if (container.classList.contains('light')) {
        container.classList.replace('light', 'dark');
        texto.innerText = 'Modo Escuro';
    } else {
        container.classList.replace('dark', 'light');
        texto.innerText = 'Modo Claro';
    }

    if (botao.classList.contains('light')) {
        botao.classList.replace('light', 'dark');
        botao.innerText = 'Modo claro';
    } else {
        botao.classList.replace('dark', 'light');
        botao.innerText = 'Modo escuro';
    }
}

function seletor_modo() {
    if (circle.classList.contains('light2')) {
        circle.classList.replace('light2', 'dark2');
        modo_escuro();
        botao2.style.backgroundColor = 'white';
    } else {
        circle.classList.replace('dark2', 'light2');
        modo_escuro();
        botao2.style.backgroundColor = 'black';
    }
}
