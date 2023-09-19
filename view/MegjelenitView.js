import Megjelenitsor from "./MegjelenitSorView.js"
class Megjelenites {
    #lista
    #tarolo
    constructor(lista, tarolo) {
        this.#lista = lista
        this.#tarolo = tarolo
        $(tarolo).html(` <table class="table">`)
        this.tablazat = $(tarolo).children("table ")

        this.megjelenites()

    }

    megjelenites() {
        let txt = "";
        txt = "<div class = 'table-responsive'>";
        txt += "<table class = 'table table-striped table-bordered table-hover'>";
        txt += "<thead class = 'table-dark'> <tr>";
        this.#lista.forEach((element) => {
            new Megjelenitsor(element, this.tablazat)


            
         /*   txt += "<tr>"
            for (const key in element) {
                txt+= `<td>${element[key]}</td>`
            }
            txt+=`<td><span class = "kesz"></span>
            <span class = "megse"></span>
            <span class = "nincs"></span>>
            </td>`
            txt += "</tr>"*/

        });

        
    }
}
export default Megjelenites
