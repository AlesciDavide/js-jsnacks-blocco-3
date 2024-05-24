// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    { varieta: 'Nera di Milano', peso: '341.23', lunghezza: '14.58' },
    { varieta: 'Romanesca', peso: '287.45', lunghezza: '19.75' },
    { varieta: 'Fiorentina', peso: '458.12', lunghezza: '22.36' },
    { varieta: 'Tonda', peso: '132.67', lunghezza: '25.98' },
    { varieta: 'Lunga fiorentina', peso: '376.54', lunghezza: '28.45' },
    { varieta: 'Striata d\'Italia', peso: '231.78', lunghezza: '11.23' },
    { varieta: 'Bianca triestina', peso: '314.89', lunghezza: '17.56' },
    { varieta: 'Gialla', peso: '459.31', lunghezza: '12.67' },
    { varieta: 'Rugosa friulana', peso: '278.44', lunghezza: '26.89' },
    { varieta: 'Patisson', peso: '387.56', lunghezza: '5.12' }
];


let sum = 0; 
for (const key in zucchine) {
    let peso = Number.parseInt(zucchine[key].peso);
    sum += peso;
}
console.log(sum);


let pesoZucchinePiuOtto = [];
let pesoZucchineMenoOtto = [];

for (const key in zucchine) {
    if (Number.parseInt(zucchine[key].lunghezza) > 8) {
        pesoZucchinePiuOtto.push(zucchine[key]);
    }else if (Number.parseInt(zucchine[key].lunghezza) < 8){
        pesoZucchineMenoOtto.push(zucchine[key]);
    }
}
console.log(pesoZucchinePiuOtto);
console.log(pesoZucchineMenoOtto);

let sommaUno = 0;
for (const key in pesoZucchinePiuOtto) {
    let peso = Number.parseInt(pesoZucchinePiuOtto[key].peso);
    sommaUno += peso;
}
console.log(sommaUno);

let sommaDue = 0;
for (const key in pesoZucchineMenoOtto) {
    let peso = Number.parseInt(pesoZucchineMenoOtto[key].peso);
    sommaDue += peso;
}
console.log(sommaDue);

