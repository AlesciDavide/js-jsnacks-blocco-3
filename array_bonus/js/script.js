const listaUno = [5,10,15,60,4,3,8,6,5,5,2,6,45,5,6];
const listaDue = [3,8,6,5,1,2,5,5,10,15,60,4,3,8,6,5,5,2,6,45,5,6];
let x;

if(listaUno.length > listaDue.length){
    x = listaUno.length - listaDue.length;
    for(let i = 0; i < x; i++){
        listaDue.push(Math.floor(Math.random()* 100 + 1));
    }
}