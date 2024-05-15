/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro. */


const listaUno = [5,10,15,60,4,3,8,6,5,5,2,6,45,5,6];
const listaDue = [3,8,6,5,1,2,5,5,10,15,60,4,3,8,6,5,5,2,6,45,5,6];

if(listaUno.length > listaDue.length){
    while(listaUno.length != listaDue.length){
        listaDue.push(Math.floor(Math.random()* 100 + 1));
    }
}else{
    while(listaUno.length != listaDue.length){
    listaUno.push(Math.floor(Math.random()* 100 + 1));
}
}
console.log(listaUno, listaDue);


/* senza if */


while(listaUno.length < listaDue.length){
    listaUno.push(Math.floor(Math.random()* 100 + 1));
}
while(listaUno.length > listaDue.length){
    listaDue.push(Math.floor(Math.random()* 100 + 1));
}

console.log(listaUno, listaDue);