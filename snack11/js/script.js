/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50. */

const arrayUno = [];
let i = 0;
let somma = 0;


while(somma < 50){
    
    let numeroUtente = (Number.parseInt(prompt('inserisci un numero')))
    somma = somma + numeroUtente;
    if(somma > 50){
    }else{
        arrayUno.push(numeroUtente);
    }
    
}

console.log(arrayUno, somma);