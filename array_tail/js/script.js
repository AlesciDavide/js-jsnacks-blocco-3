let numeroUtente = Number.parseInt(prompt('Quanti elementi vuoi inserire nel nostro array?'));
const lista = [];

if(numeroUtente > 50 || numeroUtente < 0 || Number.isNaN(numeroUtente)){
    numeroUtente = 20;
}