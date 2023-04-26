let paperino = {
    verso: "qua",
    parla: function () {
        console.log(this.verso);
        //console.log(paperino.verso);
    }
};

let gatto = {
    verso: "miao",
    parla: function () {
        console.log(this.verso);
        //console.log(paperino.verso);
    },
    parlaDueVolte: function () {
        this.parla();
        parla();
    }

};

let verso = "muuuu";
console.log("ciao");

gatto.parlaDueVolte();

