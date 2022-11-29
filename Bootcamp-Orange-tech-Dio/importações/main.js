


const { gets, print} = require('./funcoes-auxiliares'); // Este comando importa as funções criadas anteriormente

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
   const numeroSorteado = gets();
   if (numeroSorteado > maiorValorEncontrado) {
      maiorValorEncontrado = numeroSorteado;
   } 
    
}

print(maiorValorEncontrado);