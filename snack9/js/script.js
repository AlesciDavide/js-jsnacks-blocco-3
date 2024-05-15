/* Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */

const arrayNumeriUtente = [];

while(arrayNumeriUtente.length < 6){
    let numero = (prompt('inserisci un numero'));

    if(numero % 2 == 1){
        arrayNumeriUtente.push(numero);
    }
    
    
}
console.log(arrayNumeriUtente);