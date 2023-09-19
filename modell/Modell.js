import { TODOLIST2 } from "../adatok.js"
class Modell{
    #lista
    constructor(lista){
this.#lista = TODOLIST2
    }
    ujADAT(OBJ){
        this.#lista.push(OBJ)
    }
    getList(){
        return this.#lista
    }
    kesz(){

    }
    torol(){
        
    }
}
export default Modell