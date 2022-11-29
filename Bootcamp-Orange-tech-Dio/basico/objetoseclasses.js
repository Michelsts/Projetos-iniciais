// Objeto se trata de um nome e seus atributos

/*
const pessoa = {
    nome:'Michel',
    idade: 38,

    // podemos adicionar funções e nelas chamar os atributos com this
    descrever: function () {
        console.log("Meu nome é " + this.nome + "e minha idade é " + this.idade)
    }
}
*/

//Podemos chamar a função do objeto
//pessoa.descrever();

//class tbm é um objeto que pode ser reutilizado atribuindo-se novos atributos
class pessoa2 {
    nome;
    idade;

    //Podemos ultilizar o contructor 
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log("Meu nome é " + this.nome + " e minha idade é " + this.idade)
    }
}
//Podemos adicionar novos atributos desta forma
/*const michel = new pessoa2();
michel.nome = "Michel Santos";
michel.idade = 38;

//E chamar a função desta forma
michel.descrever();
*/

//Podemos adicionar e chamar o constructor dessa forma
const nome2 = new pessoa2("Michel",38);

nome2.descrever();