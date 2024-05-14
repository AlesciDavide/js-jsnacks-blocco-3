let numeroUtente = Number.parseInt(prompt('Quanti elementi vuoi inserire nel nostro array?'));
const lista = [];

if(numeroUtente > 50 || numeroUtente < 0 || Number.isNaN(numeroUtente)){
    numeroUtente = 20;
}

for(let i= 0; i < numeroUtente; i++){
    lista.push(Math.floor(Math.random() * 100 + 1));
}

console.log(lista.slice(numeroUtente - 5));

