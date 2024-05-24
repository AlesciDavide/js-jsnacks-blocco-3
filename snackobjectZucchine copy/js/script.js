// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


let finestra = [
    {
        tab: ["Facebook", "x", "twitter", "GitHub", "Gmail", "instagram"],
        activeTab: 0,
    },
    {
        tab: ["Facebook", "x", "twitter", "GitHub", "Gmail", "instagram"],
        activeTab: 3,
    },
    {
        tab: ["Facebook", "x", "twitter", "GitHub", "Gmail", "instagram"],
        activeTab: 2,
    },
    {
        tab: ["Facebook", "x", "twitter", "GitHub", "Gmail", "instagram"],
        activeTab: 6,
    },
]


finestra.forEach(element => {
    if(element.tab[Number.parseInt(finestra.activeTab)] !== "GitHub" && element.tab[Number.parseInt(finestra.activeTab)] !== "Gmail"){
    }else{
        element.tab.splice([Number.parseInt(element.activeTab)], 1);
        element.activeTab = element.activeTab + 1;
    }
});

console.log(finestra);