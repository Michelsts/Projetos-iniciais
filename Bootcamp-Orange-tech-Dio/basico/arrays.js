// Arrays são listas de itens, podendo começar vazia

/*
const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos);//Chamando toda coleção da array criada

console.log(alunos[0]);//Chama apenas o João que está na posição 0

alunos.push('Michel');//Adiciona Michel da lista 
alunos[4] = 'Rose';//Adiciona na posição desejada

console.log(alunos[3] +' e '+ alunos[4]);// Chama Michel e Rose

alunos.pop(); //Remove o ultimo item
alunos.shift(); //Remove o primeiro item
alunos.length; //Mostra a quantidade de itens na lista
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

// Estrutura de repetiçao for
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);