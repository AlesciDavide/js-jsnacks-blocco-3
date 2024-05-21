// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer
const divEl = document.querySelector('div#pagina');

let numberUser = Number.parseInt(prompt('quanti secondi rimangono?'));

if(numberUser > 10 || Number.isNaN(numberUser)){
    numberUser = 10;
}
divEl.innerHTML = (`<p>${numberUser}</p>`);

const timer = setInterval(function(){
    numberUser--;
    divEl.innerHTML = (`<p>${numberUser}</p>`);
    if(numberUser <= 0){
        clearInterval(timer);
        divEl.innerHTML = (`<p>Il timer è finito!!</p>`);
    }
}, 1000);