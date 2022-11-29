// Média de prova

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

var media = (nota1 + nota2 + nota3) / 3;


console.log("A média do aluno é " + media)

if (media < 5) {

    console.log("O aluno está reprovado!");

}else if(media >= 5 && media <= 7) {

    console.log("O aluno está em recuperação!");

}else {
    console.log("O aluno está aprovado!");
}