import Modell from "../modell/Modell.js";
import Megjelenites from "../view/MegjelenitView.js";
import Urlap from "../view/UrlapView.js";
class Controller{
    constructor(){
        const tarolo = $(".tarolo")
        const ujadat = $(".ujadat")
        const MODELL = new Modell();
     new Megjelenites(MODELL.getList(), tarolo)
     new Urlap({tevekenyseg: "", hatarido: ""}, ujadat)
     $(window).on("torles", (event) =>{
        console.log(event.detail)
    })
    $(window).on("feltolt", (event) =>{
        //console.log(event.detail)
        
        MODELL.ujADAT(event.detail)
        //console.log(TODOLIST2)
        tarolo.empty()
        new Megjelenites(MODELL.getList(), tarolo)
    })
    }
}
export default Controller