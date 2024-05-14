let listaSpesa = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
listaSpesa.push('pesca');


let checkValue = false;

for(let i = 0; i < listaSpesa.length; i++ ){

    if(listaSpesa[i] == 'cocomero'){
        checkValue = true;
        break;
    }
}

if(checkValue === true){
    console.log('Trovato! Devo solo preparare il cocktail.');
}else{
    console.log('Oh no, devo uscire a comprare il cocomero!');
}