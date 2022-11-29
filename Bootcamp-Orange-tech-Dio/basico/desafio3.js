//IMC = PESO / (ALTURA * ALTURA)

let peso = 180;
let altura = 1.87;

let imc = peso / (altura*altura); //Pode ser ultilizado tbm Math.pow(altura,2) para potêcia.

console.log("Seu IMC é " + imc.toFixed(2))

if ( imc < 18.5){ 
    console.log("Você está abaixo do peso!");
}else if ( imc >= 18.5 && imc < 25){
    console.log("Você está no peso normal!");
}else if ( imc >= 25 && imc < 30){
    console.log("Você está acima do peso!");
}else if ( imc >= 30 && imc < 40){
    console.log("Você está obeso!")
}else{
    console.log("Você está com obesidade grave!"); 
}