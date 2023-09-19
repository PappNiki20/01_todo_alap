import Megjelenites from "../view/MegjelenitView.js";
import  { TODOLIST2 } from "../adatok.js";
import Urlap from "../view/UrlapView.js";
class Controller{
    constructor(){
        const tarolo = $(".tarolo")
        const ujadat = $(".ujadat")
       
     new Megjelenites(TODOLIST2, tarolo)
     new Urlap({tevekenyseg: "", hatarido: ""}, ujadat)
     $(window).on("torles", (event) =>{
        console.log(event.detail)
    })
    $(window).on("feltolt", (event) =>{
        //console.log(event.detail)
        TODOLIST2.push(event.detail)
        //console.log(TODOLIST2)
        tarolo.empty()
        new Megjelenites(TODOLIST2, tarolo)
    })
    }
}
export default Controller