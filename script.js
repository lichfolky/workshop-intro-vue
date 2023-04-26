//const { createApp } = Vue;


Vue.createApp({
    data() {
        return {
            armi: ["bomba", "corda", "spranga", "coltello", "chiave inglese", "candeliere", "rivoltella"],

            stanze: ["Cucina", "Sala da ballo", "Serra", "Sala da pranzo", "Veranda", "Ingresso",
                "Studio", "Biblioteca", "Sala da biliardo"],
            sospetti: [
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
                }],
            elementoAttivo: 1

        };
    }, mounted() {
        for (let i = 0; i < this.sospetti.length; i++) {
            let combinazione = this.sospetti[i];
            let indiceRandom = this.getRandomIntInclusive(0, this.armi.length - 1);
            combinazione.arma = this.armi[indiceRandom];
            this.armi.splice(indiceRandom, 1);
            indiceRandom = this.getRandomIntInclusive(0, this.stanze.length - 1);
            combinazione.stanza = this.stanze[indiceRandom];
            this.stanze.splice(indiceRandom, 1);
        }
    }, methods: {
        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
        },
        cambiaCurrent(indice) {
            this.elementoAttivo = indice;
        }
    }
}).mount('#app');