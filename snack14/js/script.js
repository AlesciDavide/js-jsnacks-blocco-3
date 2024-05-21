// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer


let numberUser = Number.parseInt(prompt('quanti secondi rimangono?'));

if(numberUser > 10 || Number.isNaN(numberUser)){
    numberUser = 10;
}

const timer = setInterval(function(){
    numberUser--;
    console.log(numberUser);
    if(numberUser <= 0){
        clearInterval(timer);
        alert('fine');
    }
}, 1000);