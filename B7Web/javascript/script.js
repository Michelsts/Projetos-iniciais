// Primeiros passos com Javascript

// Variáveis
let exemplo1 = 0; // Variável interna
var exemplo2 = 1; // Variável global
const exemplo3 = 2; // Constante, ou seja, não poderá ser alterada

// Tipos de valores

exemplo1 = 4; // Numérico
exemplo2 = 'Hello Word'; // String
exemplo2 = true; // Booleano, ou seja, vedadeiro ou falso

// String e Template String

exemplo1 = 'Michel'; // Uma String simples
exemplo2 = 'Santos'; // Outra String simples

let nomeCompleto = `$exemplo1 $exemplo2`; // Comcatena

console.log(nomeCompleto); // Michel Santos

// Condicionais

if (condiçãoExigida) {
    // se
    // Caso seja verdadeira execute este codígo
} else {
    // então
    // Caso seja falso este
}

// && = e  / || = ou / == = igual / ==== = igual restrita

// Caso a necessidade de varias condições de if dependentes

if (condicao) {
} else if (condicao2) {
} else if (condica3) {
}

/* Condicional ternária

 let ternario = condicão ? caso seja vedadeiro : caso seja falso;
*/

/* Switch

switch (variavel) {
    case '1' :
        faca isso 
        break;
    case '2' :
        faça outro
        break;
    default:
        fazer algo por padrão
        break;
}
*/

/* Funções -> Um trecho de código que pode ser reutilizado

Entrada -> Processamento -> Saída

function nome(parâmetros) {
    código da função
}

nome(); -> Para executar a função


Arrow function -> Uma forma mais simples de criar uma função.

nomeDaFunçao = (parâmetros) => { codigo da função }
nomeDaFunçao = (x, y) => x + y; -> Uma forma mais reduzida para uma única sentença

*/

/* 
Array -> Lista ordenada e indexada com valores não repetidos.
let array = [valor 0, valor 1, ..., valor n];

Operações com array
.length -> Quatidade total de itens
.push() -> Adicionar itens novos ao array
.pop() -> Remover o ultimo item do array
.shift() -> Remove o primeiro elemento do array
.unshift() -> Insere um novo elemento no inicio do array
.splice() -> Elimina ou adiciona elementos em determinado índice
.sort() -> Ordenação dos dados dentro do array
.reverse() -> Inverte os dados dentro do array
.indexOf() -> Retorna o indice onde se encontra o dado informado
.includes() -> Verifica se existe algum dado dentro do array
.forEach() -> Executa uma função sobre cada elemento do array
.map() -> Transforma todos os elementos do array em um novo array
.filter() -> Filtrar apenas os elementos desejados do array
.reduce() -> Reduzir o array em um único valor
.some() / .every() -> Testes lógicos entre todos os elementos do array
.join() -> Converte o array em string separando-o por vírgula
.slice() -> Cria um subarray a partir de um intervalo definido
.concat() -> Concatena arrays juntos
.toString() -> Converte o array em string
.toLocaleString() -> Converte o array em string formatado
.valueOf() -> Retorna o objeto inteiro representante do array
.entries() -> Retorna as chaves/indices e seus respectivos valores
.keys() -> Retorna somente as chaves/indices do array
.values() -> Retorna somente os valores do array
.find() -> Procura pelo primeiro elemento que atenda à condição especificada
.findIndex() -> Procura pela posição do primeiro elemento que atende à condição especificada
.fill() -> Preenche todo o array com um valor específico
.copyWithin() -> Copia parte de um array para outra posição
.isArray() -> Confere se é um Array
.from() -> Cria um novo array a partir de qualquer coisa
.of() -> Cria um novo array a partir de vários argumentos

*/

/* 
Objeto -> Um conjunto de pares nome:valor. Os objetos podem ser estruturados como hierárquicas.

let obj = {"chave": "valor", ...}; // Ou podemos usar {} sem declarações aninhadas



obj["chave"] -> Para obter o valor associado a uma chave específica
obj[chave] -> Também funciona!
obj.nome -> Se for usado o método toString(), retornará o nome da propriedade
obj.hasOwnProperty(chave) -> Indica se a chave está presente naprópria instância (não herdada).
Object.assign({}, {propA:"ValorA"}, {propB:"ValorB"})-> Fazendo merge de duas variáveis de Objeto
Object.create({propA:"ValorA"}, {propB:"ValorB"}) -> Criando um novo Objecto baseado num objecto existente
Object.defineProperty(obj, 'key', {value:'value'}) -> Define uma nova propriedade na instancia atual do objeto
Object.defineProperties(obj, {'key':{value:'value'}})-> Define múltiplas propriedades na instancia atual do objeto
Object.getOwnPropertyDescriptor(obj,'key') -> Pega informações detalhadas sobre uma propriedade de um objeto
Object.getPrototypeOf(obj) -> Retorna o prototype do objeto
Object.isExtensible(obj) -> Indica se o objeto foi criado usando
Object.seal() ou Object.freeze().
Object.preventExtensions() -> Previne que mais propriedades sejam adicionadas ao objeto
Object.isSealed(obj) -> Indica se o objeto foi criado usando


*/

// Funções dentro de um Objeto

let pessoa = {
    nome: 'Michel',
    sobrenome: 'Santos',
    idade: 39,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
};

// Loops
// for(contador, condição, incremento) {}

let cores = ['preto', 'braco', 'azul', 'vermelho'];

for (let i in cores) {
    console.log(cores[i]); // Uma forma mais reduzida para percorrer um array
}

for (let cor of cores) {
    console.log(cor); // Uma forma ainda mais rezumida
}

/* While -> Enquanto
 while (condição) {
    instrução;
    incremento;
}

 */

/*
Funções de array

Exemplo

*/

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 },
];

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});

console.log(cars);

// Forma mais reduzida

cars.sort((a, b) => {
    return a.year - b.year;
});

// Ainda mais reduzida

cars.sort((a, b) => b.year - a.year);

/* Manipulando DOM

.window -> Seleção global
.document -> Selação da tela de exibição

funcões
.getElementById() -> Para selecionar um ID
.getElementsByClassName() -> para selecinar classes
.getElementsByTagName() -> para selecionar tags
.querySelector() -> .class #id 
.querySelectorAll() -> Todas as opções acima



Eventos de clique

onclick = "nome" -> No elemento
onmouseover="nome" -> Sobre o elemento
onmouseout="nome" -> Fora do elemento
onmouseenter="nome" -> Quando passamos sobre ele
onmouseleave="nome" -> Quando sai sobrinho
ondblclick="nome" -> Dois cliques no mesmo lugar
onfocus="nome" -> Foco em algum lugar dentro do elemento
onblur="nome" -> Depois que perdeu foco
onchange="nome" -> Mudança nos valores
onload="nome" -> Carregamento total
onunload="nome" -> Descarrega a página
onsubmit="nome" -> Enviado os dados
onreset="nome" -> Resetados os dados
onselectstart="nome" -> Selecionou algo na tela
ondragstart="nome" -> Arrastando um item
ondragend="nome" -> Soltou o arrastar
ondragover="nome" -> Passando por cima
ondrag="nome" -> Arrastei
ondragout="nome" -> Soltou de fora
oncontextmenu="nome" -> Clique com o botão direito
onkeydown="nome" -> Apertada uma tecla
onkeypress="nome" -> Pressionou uma tecla
onkeyup="nome" -> Liberada uma tecla

.addEventListener -> Escutador de evento

Manipulando elementos

.children -> Array do elemento selecionado
.innerHTML -> Conteúdo do HTML ou alterar
.innerText -> Texto dentro da tag (sem tags)
.outerHTML -> Outer HTML, conteudo completo
.value -> Valor atualizado no input
.getAttribute(atributo) -> Se tem esse atributo 
.setAttribute("atributo", "valor") -> Alteração de atributos
.removeAttribute("atributo") -> Remover um atributo
.hasAttribute("atributo") -> Verificar se tem algum atributo

.classList -> Para consultar, alterar ou excluir class

.contains -> Conteúdo do elemento
.className = 'novoNome' -> Mudança de nome das listas de classe
.remove() -> Remove o elemento
.prepend(elemento) -> Inserir antes do elemento
.after(elemento) -> Após o elemento
.before(elemento) -> Antes do elemento
.replaceWith(elemento) -> Substitui o elemento por outro
.cloneNode(true/false) -> Clona o nó e seus filhos


.append -> Adiciona ao conteúdo sem mover o texto da memória (Apenas texto)
.createElement -> Para adionar um novo elemento
.appendChild -> Para adicionar ao HTML pelo anterior no final do elemento
.prepend -> Para adicionar o elemento no começo do elemento

*/

//Exemplo de mostrar/ocutar senha

function clicou() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar Senha';
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar Senha';
    }
}

/*
Estilo inline

.style -> Estilo CSS

*/

/*
Eventos de teclado
.key -> A tecla digitada
.code -> Código da tela

*/

/*
OO - Orientação a Objetos -> Quem guia o código são os objetos (Que é uma simulação de objetos da vida real)
Programção Orientada a Objetos (POO - OOP)
Programaão Procedural -> Sequpência de códigos
Programação funcional (PF -FP)

*/

class Person {
    constructor(name, age) {
        // Uma função que será executada sempre que criar uma pessoa nova
        this.name = name; // This se refere ao próprio objeto
        this.age = age;
    }

    takeAStep() {
        this.steps++; // Uma função para adiconar passoas para uma pessoa
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge;
        } else {
            console.log('Não foi possível alterar sua idade');
        }
    }
}

let p1 = new Person('David', 14);
let p2 = new Person('Aghata', 12);
let p3 = new Person('Arthur', 1);

p1.takeAStep(); // Adiciona um passo para p1 = David
