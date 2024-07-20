// 1) FUNÇÃO setTimeout() - EXECUTA  UMA FUNÇÃO APÓS UM DETERMINADO PERÍODO DE TEMPO

setTimeout(() => {
    alert("Olá mundo!");
    console.log("Console dentro do setTimeout");
}, 3000);

console.log("Console depois do setTimeout");

// 2) FUNÇÃO setInterval() - EXECUTA UMA FUNÇÃO REPETIDAMENTE EM UM INTERVALO DEFINIDO

setInterval( () => {
    console.log("Executando a cada 2 segundos");
}, 2000);

// 3) LIMPANDO O INTERVALO COM clearInterval() & clearTimeout

let idDoTimeout = setTimeout(() =>{
    alert("Hello World!");
}, 4000);

console.log(idDoTimeout);

clearTimeout(idDoTimeout);

console.log(idDoTimeout);

let idDoIntervalo = setInterval(() => {
    console.log("Executando a cada 3 segundos");
}, 3000);

console.log(idDoIntervalo);

clearInterval(idDoIntervalo);

console.log(idDoIntervalo);