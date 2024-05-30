import { getZapas } from "./getZapas.js";

const enviarDatos = (series, id, name, img, model , price)=>{
    const archivoHTML = "../index.html";
    fetch(archivoHTML)
    .then(Response => Response.text)
    .then((html)=>{

        const parser = new DOMParser();
        const doc = parser.parseFromString(html,"texte/html")

        const imagePage = doc.getElementById("imagePage");
        imagePage.src = img;
        imagePage.alt =`ìmagen de ${name}`;
        imagePage.classList.add("card-img-top");

        const titlePage = doc.getElementById("titlePage");
        titlePage.textContent = `nombre: ${name}`;

        const subtitlePage1 = doc.getElementById("subtitlePage");
        subtitlePage2.textContent= `modelo: ${model}`;

        const subtitlePage2 = doc.getElementById("subtitlePage2");
        subtitlePage3.textContent = `Precio: ${price}`;

        const nuevoHTML = new XMLSerializer().serializeToString(doc);

        document.body.innerHTML = nuevoHTML;
    })
}
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

       const card = document.createElement("Div");
       card.classList.add("card");
       const imge= document.createElement("img");
       imge.src=img;
       imge.alt = 'imagen de ${name}';
       imge.classList.add("card-img-top");

       const divBody = document.createElement("div");
       divBody.classList.add("card-body");

       const title = document.createElement("h5");
       title.classList.add("tex-title");
       title.textContent = `Nombre: ${name}`;

       const subtitle = doc.createElement("p");
       subtitle.classList.add("tex-title");
       subtitle.textContent = `Modelo: ${model}`;

       const subtitle2 = doc.createElement("p");
       subtitle2.classList.add("tex-title");
       subtitle2.textContent = `Precio: ${price}`;

       const btnVer = document.createElement("button");
       btnVer.classList.add("btn","btn-warning");
       btnVer.textContent = "ver mas";
       btnVer.addEventListener("click", ()=>{
        enviarDatos(series, id, name, img, model, price);
       })
    })

}