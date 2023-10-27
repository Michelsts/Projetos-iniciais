let listaDeItens = [];
let itemAEditar;

// Itens do DOM
const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const ulItens = document.getElementById('lista-de-itens');
const ulItenscomprados = document.getElementById('itens-comprados');
const listaRecuperada = localStorage.getItem('listaDeItens');

// Função para adicionar itens no LocalStorage
function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens));
}

// Recupera Itens do LocaStorage e converte para JavaScript
if (listaRecuperada) {
    listaDeItens = JSON.parse(listaRecuperada);
    mostrarItens();
} else {
    listaDeItens = [];
}

// Funcão de evento para o submit do formulário
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    salvarItens();
    mostrarItens();
    itensInput.focus();
});

// Função para salvar itens
function salvarItens() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some(
        (elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase()
    );

    if (checarDuplicado) {
        alert('O item já foi adicionado!');
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false,
        });
    }

    itensInput.value = '';
}

// Função para mostrar itens salvos na tela
function mostrarItens() {
    ulItens.innerHTML = '';
    ulItenscomprados.innerHTML = '';
    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItenscomprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
            `;
        } else {
            ulItens.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}" ${
                index !== Number(itemAEditar) ? 'disabled' : ''
            }></input>
        </div>
        <div>
            ${
                index === Number(itemAEditar)
                    ? '<buttom onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></buttom>'
                    : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'
            }
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
        `;
        }
    });

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach((i) => {
        i.addEventListener('click', (evento) => {
            const valorDoElmento =
                evento.target.parentElement.parentElement.getAttribute(
                    'data-value'
                );
            listaDeItens[valorDoElmento].checar = evento.target.checked;
            mostrarItens();
        });
    });

    const deletarObjetos = document.querySelectorAll('.deletar');
    deletarObjetos.forEach((i) => {
        i.addEventListener('click', (evento) => {
            const valorDoElmento =
                evento.target.parentElement.parentElement.getAttribute(
                    'data-value'
                );
            listaDeItens.splice(valorDoElmento, 1);
            mostrarItens();
        });
    });

    const editarItens = document.querySelectorAll('.editar');
    editarItens.forEach((i) => {
        i.addEventListener('click', (evento) => {
            itemAEditar =
                evento.target.parentElement.parentElement.getAttribute(
                    'data-value'
                );
            mostrarItens();
        });
    });
    // Chama a função do localSotrage
    atualizaLocalStorage();
}

// Função para editar itens
function salvarEdicao() {
    const itemEditado = document.querySelector(
        `[data-value="${itemAEditar}"] input[type="text"]`
    );
    listaDeItens[itemAEditar].valor = itemEditado.value;
    itemAEditar = -1;
    mostrarItens();
}
