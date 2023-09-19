class Urlap{
    constructor(adat, szuloElem){
     this.adat = adat
     
        this.szuloElem = szuloElem
        this.urlap()
        this.tevElem = this.szuloElem.children("form").children("#tevekenyseg")
        this.hatElem = this.szuloElem.children("form").children("#hatarido")
        this.submitElem = this.szuloElem.children("form").children("#sub")
        
       
        this.submitElem.on("click", (event)=>{
           event.preventDefault();
            this.adatGyujt()
            this.#esemenyTrigger("feltolt")
          
        })
    }
    urlap(){
        let txt = "";
        txt += `<form>
        <label for="tevekenyseg">Adat: </label>
        <input type="text" id="tevekenyseg" name="tevekenyseg"><br><br>
        <label for="hatarido">Adat2: </label>
        <input type="text" id="hatarido" name="hatarido"><br><br>
        <input type="submit" value="Submit" id="sub">
      </form>`;

      this.szuloElem.append(txt)
    }
adatGyujt(){
    this.adat = {tevekenyseg:this.tevElem.val(), hatarido: this.hatElem.val()}
   

}
#esemenyTrigger(esemenynev){
    const gyujt = new CustomEvent(esemenynev, {detail: this.adat});
    window.dispatchEvent(gyujt)
}
}
export default Urlap;