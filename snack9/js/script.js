/* Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */

const arrayNumeriUtente = [];

while(arrayNumeriUtente.length < 6){
    let numero = Number.parseInt(prompt('inserisci un numero'), 10);
    if(Number.isNaN(numero) !== true && numero % 2 == 1){
        arrayNumeriUtente.push(numero);
    }
}
console.log(arrayNumeriUtente);