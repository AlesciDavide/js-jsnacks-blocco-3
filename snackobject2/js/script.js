// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const listaPersone = [
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 15
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 25
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 35
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 45
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 55
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 65
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 75
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 23
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 53
    },
    {
        nome: 'gino',
        cognome: 'latrottola',
        eta: 84
    },
]



for (const key in listaPersone) {
    if (listaPersone[key].eta > 18) {
        listaPersone[key].push = `${listaPersone[key].nome} ${listaPersone[key].cognome} può guidare`;
    }else{
        listaPersone[key].push = `${listaPersone[key].nome} ${listaPersone[key].cognome} non può guidare`;
    }
}

console.log(listaPersone);