let listaSpesa = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
listaSpesa.push('cocomero');


let checkValue = 0;

for(let i = 0; i < listaSpesa.length; i++ ){

    if(listaSpesa[i] == 'cocomero'){
        checkValue = 1;
    }
    
}

if(checkValue === 1){
    console.log('Trovato! Devo solo preparare il cocktail.');
}else{
    console.log('Oh no, devo uscire a comprare il cocomero!');
}