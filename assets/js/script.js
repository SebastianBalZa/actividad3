import { getZapas } from "./getZapas.js";

const createCards = (results=[])=>{

    let zapatillasRow = document.getElementById("zapatillasRow");

    results.map((results)=>{
        const {series, id, name, img, model, price} = results;

        const divCol = document.createElement("div");
       divCol.classList.add("col-xl-3")
       divCol.classList.add("col-lg-3")
       divCol.classList.add("col-md-3")
       divCol.classList.add("col-sm-12")
       divCol.classList.add("col-xs-12")
       divCol.classList.add("mt-2")
       divCol.classList.add("mb-2")
    })

}