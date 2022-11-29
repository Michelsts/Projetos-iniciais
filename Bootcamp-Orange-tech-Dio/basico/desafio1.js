/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distância em KM da viagem;
*/

const precoCombustivel = 5.79;
const mediaCombustivel = 10;
const distancia = 100;

const litrosConsumidos = distancia / mediaCombustivel;
const valoGasto = litrosConsumidos * precoCombustivel;

console.log (valoGasto.toFixed(2))