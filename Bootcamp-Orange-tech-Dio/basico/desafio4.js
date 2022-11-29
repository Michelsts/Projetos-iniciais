/*
1 - Criar uma classa para representar carros
2 - Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
3 - Crie um método que dado a quantidade de KM e o preço de combustivel nos dê o valor em reais para realizar o percurso.
*/

/*
class carros {
    marca;
    cor;
    mediaComb;

    constructor (marca,cor,mediaComb) {
        this.marca = marca;
        this.cor = cor;
        this.mediaComb = mediaComb;
    }

    gastoDepercurso(distancia,precoDoComb) {
        return distancia * this.mediaComb * precoDoComb;

    }

}

const uno = new carros("Fiat", "Branco", 1/12)
const palio = new carros("fiat", "preto", 1/10)

console.log(uno,"R$ " + uno.gastoDepercurso(70,5));
console.log(palio,"R$ " + palio.gastoDepercurso(70,5))
*/


/*
1 - Crie uma classe para representar pessoa.
2 - Para cada pessoa teremos como atributo nome, peso e altura.
3 - As pessoa devem ter capacidade de dizer o valor de seu IMC (IMC = peso / (altura*altura)).
4 - Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altur e peça que ele diga seu IMC.
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / (this.altura * this.altura);
    }

    classificacaoIMC() {
        const imc = this.imc();

    if ( imc < 18.5){ 
    return ("Você está abaixo do peso!");
    }else if ( imc >= 18.5 && imc < 25){
    return ("Você está no peso normal!");
    }else if ( imc >= 25 && imc < 30){
    return ("Você está acima do peso!");
    }else if ( imc >= 30 && imc < 40){
    return ("Você está obeso!");
    }else{
    return ("Você está com obesidade grave!"); 
}
}
}

const jose = new pessoa ("José", 70, 1.75);
console.log(jose, "\n\nSeu IMC é " + jose.imc().toFixed(2) + "\n\n" +jose.classificacaoIMC());