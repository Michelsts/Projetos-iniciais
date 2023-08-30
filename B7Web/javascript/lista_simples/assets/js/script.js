// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funções
function handlekeyup(e) {
    if (e.key === 'Enter') {
        const newli = document.createElement('li');
        newli.innerHTML = input.value;
        lista.appendChild(newli);

        input.value = '';
    }
}

// Eventos
input.addEventListener('keyup', handlekeyup);
