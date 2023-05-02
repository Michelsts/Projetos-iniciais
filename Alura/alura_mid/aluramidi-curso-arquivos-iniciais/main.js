

function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio); 

   if (elemento && elemento.localName === 'audio') {

         elemento.play();
      
   }else {
      console.log('Elemnto não encontrado ou seletor inválido');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

      const tecla = listaDeTeclas[contador];
      const instrumento = tecla.classList[1];

      const idAudio = `#som_${instrumento}`;

      
      tecla.onclick = function () {
         tocaSom(idAudio);
      };

      tecla.onkeydown = function (evento) {
         if (evento.code == 'Space' || evento.code == 'Enter')

         
         tecla.classList.add('ativa');
      }

      tecla.onkeyup = function () {
         tecla.classList.remove('ativa');
      }
}









/* Utilizando o While

let contador = 0;
 while (contador < listaDeTeclas.length) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];

   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function () {
      tocaSom(idAudio);
   };
   
   contador = contador + 1;
}
*/

/* Codígo da atividade Alura telefone
const listaDeTeclas = document.querySelectorAll('input[type=button]'); // dessa forma acessa os type button
const inputTel = document.querySelector('input[type=tel]'); 

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}
*/