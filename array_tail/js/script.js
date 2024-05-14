let numeroUtente = Number.parseInt(prompt('Quanti elementi vuoi inserire nel nostro array?'));
const lista = [];

if(numeroUtente > 50 || numeroUtente < 0 || Number.isNaN(numeroUtente)){
    numeroUtente = 20;
}

for(let i= 0; i < numeroUtente; i++){
    lista.push(Math.floor(Math.random() * 100 + 1));
}

/* prima alternativa con slice */

console.log(lista.slice(numeroUtente - 5));



let numeroUtenteStampa = Number.parseInt(prompt('Quanti elementi dell\' array vuoi stampare?'));
if(numeroUtenteStampa > numeroUtente){
    numeroUtenteStampa = numeroUtente - 1;
}

console.log(lista.slice(numeroUtente - numeroUtenteStampa));



/* seconda alternativa senza slice */
console.log('alternativa senza slice')

for(let i = numeroUtente - 5; i < numeroUtente; i++){
    console.log(lista[i]);
}

console.log('alternativa senza slice con richiesta utente');

for(let i = numeroUtente - numeroUtenteStampa; i < numeroUtente; i++){
    console.log(lista[i]);
}
