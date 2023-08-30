// Elementos do HTML

const form = document.querySelector('#novoItem');
const lista = document.querySelector('.lista');
const itens = JSON.parse(localStorage.getItem('itens')) || []; // Verifica primeiramente se tem infomação do locaStore ou se não cria um novo array

itens.forEach((elemento) => {
    criaElementos(elemento);
});

// Função para submiter o elemento

form.addEventListener('submit', (evento) => {
    // Evento para submeter o formulário
    evento.preventDefault();

    const nome = evento.target.elements['nome']; // Utiliza o nome do elemento
    const quantidade = evento.target.elements['quantidade']; // Utiliza a quantidade do elemento

    const existe = itens.find((elemento) => elemento.nome === nome.value); // Verifica se já existe o elemento na lista

    const itemAtual = {
        nome: nome.value,
        quantidade: quantidade.value,
    };

    // Condicional para existir ou não o elemento na lista

    if (existe) {
        // Caso exita o elemento na list ele irá atualizar a quantidade
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[itens.findIndex((elemento) => elemento.id === existe.id)] = // Mais uma comparação para verifiacar a igualdade do nome
            itemAtual;
    } else {
        // Caso não, ele irá criar um novo item
        itemAtual.id = itens[itens.length - 1]
            ? itens[itens.length - 1].id + 1
            : 0; // Uma função ternária para adicionar o novo elemento no final do array caso contrário ele cria uma

        criaElementos(itemAtual);

        itens.push(itemAtual); // Cria elemento
    }

    localStorage.setItem('itens', JSON.stringify(itens)); // Armazena no locaStore como uma lista JSON

    // Zera os dados no formulário
    nome.value = '';
    quantidade.value = '';
});

// Função para criar um novo elemento

function criaElementos(item) {
    const novoItem = document.createElement('li'); // Cria um elemento li no HTML
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong'); // Cria um elemento com strong
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem); // Cria elemento no final
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id)); // Chama a função do botão no final da li
    lista.appendChild(novoItem);
}

// Função para atualizar a lista de elementos no localStore

function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML =
        item.quantidade;
}

// Função para criar o botão de deletar

function botaoDeleta() {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML = 'X'; // Cria um elemento button com um X

    elementoBotao.addEventListener('click', function () {
        deletaElemento(this.parentNode);
    });

    return elementoBotao;
}

// Função para deletar elementos e atualizar o localStore

function deletaElemento(tag, id) {
    tag.remove(); // remove o elemento

    itens.splice(
        itens.findIndex((elemento) => elemento.id === id),
        1
    );

    localStorage.setItem('itens', JSON.stringify(itens)); // Atualiza no localStore
}
