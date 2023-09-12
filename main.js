import Megjelenites from "./Megjelenit.js";
import  { TODOLIST2 } from "./adatok.js";
$(function () {
    const tarolo = $(".tarolo")
 new Megjelenites(TODOLIST2, tarolo)
 
})
$(window).on("torles", (event) =>{
    console.log(event.detail)
})