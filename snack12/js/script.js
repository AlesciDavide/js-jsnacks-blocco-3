// Snack12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.



function lunghezaParole(parolaUno, parolaDue){

    if(parolaUno.length === parolaDue.length){
        console.log(parolaUno, parolaDue);
    } else if (parolaUno.length > parolaDue.length){
        console.log(parolaUno);
    }else{
        console.log(parolaDue);
    }
}

let testoUno = prompt('parola uno');
let testoDue = prompt('parola due');
lunghezaParole(testoUno, testoDue);