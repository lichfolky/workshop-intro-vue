// VARIABILI GLOBALI
const armi = ["bomba", "corda", "spranga", "coltello", "chiave inglese", "candeliere", "rivoltella"];

const stanze = ["Cucina", "Sala da ballo", "Serra", "Sala da pranzo", "Veranda", "Ingresso",
    "Studio", "Biblioteca", "Sala da biliardo"];

const sospetti = [
    {
        nome: "Miss Scarlet", colore: "rossa", descrizione: "Figlia della Contessa Peacock, donna seducente sempre al centro del gossip"
    },
    {
        nome: "Professor Plum", colore: "viola", descrizione: "Victor Plum. professore di storia antica già sospettato per la morte di un suo collega"
    },
    {
        nome: "Colonnello Mustard", colore: "gialla", descrizione: "Militare in pensione che, a causa di vendita di una sua biografia non andata bene è debitore a molte persone"
    },
    {
        nome: "Reverendo Green", colore: "verde", descrizione: "Reverendo ricercato per frode, contrabbando e riciclaggio di denaro, incontrò Black e Sir Hugh durante un pellegrinaggio in Inghilterra"
    },
    {
        nome: "Signora Bianchi", colore: "bianca", descrizione: "Governante di casa Tudor ed educatrice del dottor Black. Negli ultimi tempi non è più dedita, riservata e raffinata come lo era una volta"
    },
    {
        nome: "Contessa Peacock", colore: "blu", descrizione: "Madre di Miss Scarlet e amica della deceduta madre del dottor Black. Ha avuto una vita agiata, ha prosciugato l'intera fortuna del marito"
    },
    {
        nome: "Dottoressa Orchid", colore: "fucsia", descrizione: " Orchid è la figlia adottiva del Dottor Black. È una biologa asiatica con un dottorato di ricerca in tossicologia delle piante. "
    }];

// FUNZIONI

function printSospetti() {
    let ulElement = document.createElement("ul");
    /*
    for (const sospetto of sospetti) {
        let liElement = document.createElement("li");
        liElement.innerHTML = sospetto.nome;
        ulElement.append(liElement);
    }*/
    for (let i = 0; i < sospetti.length; i++) {
        let liElement = document.createElement("li");
        liElement.innerText = sospetti[i].nome;
        if (sospetti[i].arma !== undefined) {
            liElement.innerText += " Arma: " + sospetti[i].arma;
        }
        if (sospetti[i].stanza !== undefined) {
            liElement.innerText += " Stanza: " + sospetti[i].stanza;
        }
        ulElement.append(liElement);
    }
    document.body.append(ulElement);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


// MAIN
/*
let oggettoCreatoDiSanaPianta = { pianta: 2, oggetto1: "obj" };
oggettoCreatoDiSanaPianta.sana = true;
let index = 1;
console.log(oggettoCreatoDiSanaPianta["ogg" + "etto" + index]);
*/

// oggetto clonato
//let combinazione = { ...sospetti[0] };

// o più semplicemente così
/*
let combinazione = {
    nome: sospetti[0].nome,
    colore: sospetti[0].colore,
};
*/

// così la referenza è la stessa, sto moficando entrambi gli oggetti
/*
let combinazione = sospetti[0];

console.log("1:", combinazione);
combinazione.arma = armi[0];

console.log("combinazione: ", combinazione);
console.log("sospetti[0]: ", sospetti[0]);

combinazione.stanza = stanze[0];
console.log("3:", combinazione);
*/

for (let i = 0; i < sospetti.length; i++) {
    let combinazione = sospetti[i];
    let indiceRandom = getRandomIntInclusive(0, armi.length - 1);
    combinazione.arma = armi[indiceRandom];
    armi.splice(indiceRandom, 1);
    indiceRandom = getRandomIntInclusive(0, stanze.length - 1);
    combinazione.stanza = stanze[indiceRandom];
    stanze.splice(indiceRandom, 1);
}

console.log(armi);

printSospetti();