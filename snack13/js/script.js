// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321




function invertiCifre(cifra){   
    let string = cifra.toString();
    let stringFinale = ('');
    for(i = string.length - 1; i >= 0; i--){
        stringFinale += string[i];
    }
    return stringFinale;
}


const numero = ('5616818');



let numeroInvertito = invertiCifre(numero);
console.log(numeroInvertito);

