// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: '600',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'tipo',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'doblò',
        alimentazione: 'elettrico'
    },
    {
        marca: 'fiat',
        modello: '500x',
        alimentazione: 'metano'
    },
    {
        marca: 'toyota',
        modello: 'supra',
        alimentazione: 'benzina'
    },
    {
    marca: 'ford',
    modello: 'puma',
    alimentazione: 'diesel'
    },
    {
    marca: 'bmw',
    modello: 'a1',
    alimentazione: 'gpl'
    },
    {
    marca: 'bmw',
    modello: 'a3',
    alimentazione: 'elettrico'
    },
    {
    marca: 'audi',
    modello: 'q8',
    alimentazione: 'metano'
    },{
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'Focus',
        alimentazione: 'diesel'
    },
    {
        marca: 'ford',
        modello: 'kuga',
        alimentazione: 'gpl'
    },
    {
        marca: 'ford',
        modello: 'mustang',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ford',
        modello: 'explorer',
        alimentazione: 'metano'
    },
];

const benzina = automobili.filter((benz) =>{
    if(benz.alimentazione == 'benzina'){
        return benz;
    }
    return false;
})
console.log(benzina);


const diesel = automobili.filter((diesel) =>{
    if(diesel.alimentazione == 'diesel'){
        return diesel;
    }
    return false;
})

console.log(diesel);


const macchineRestanti = automobili.filter((allMa) =>{
    if(allMa.alimentazione == 'benzina' || allMa.alimentazione == 'diesel'){
        return false;
    }
    return allMa;
})

console.log(macchineRestanti);