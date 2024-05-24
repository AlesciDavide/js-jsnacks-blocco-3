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
        nome: 'roberto',
        cognome: 'arrotino',
        eta: 25
    },
    {
        nome: 'daniele',
        cognome: 'rottemmaier',
        eta: 35
    },
    {
        nome: 'risacca',
        cognome: 'piano',
        eta: 45
    },
    {
        nome: 'gianni',
        cognome: 'portafiori',
        eta: 55
    },
    {
        nome: 'brugola',
        cognome: 'rossi',
        eta: 65
    },
    {
        nome: 'claudio',
        cognome: 'rotondo',
        eta: 75
    },
    {
        nome: 'gianna',
        cognome: 'prendirose',
        eta: 23
    },
    {
        nome: 'gigi',
        cognome: 'latrottola',
        eta: 53
    },
    {
        nome: 'gianni',
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


/* correzione riccardo */

const PersoneModificate = listaPersone.map((persona) =>{
    return  `${persona.nome} ${persona.cognome}, ${persona.eta >= 18 ? "può guidare" : "non può guidare"} `;
})

console.log(PersoneModificate);