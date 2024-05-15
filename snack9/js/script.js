/* Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */

const arrayNumeriUtente = [];

while(arrayNumeriUtente.length < 6){
    arrayNumeriUtente.push(prompt('inserisci un numero'));
    
}
console.log(arrayNumeriUtente);