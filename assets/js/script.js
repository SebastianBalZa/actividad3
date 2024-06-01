import { getZapas } from "./getZapas.js";

let carrito = [];

const actualizarCarritoIcon = () => {
  const carritoIcon = document.getElementById('carritoIcon');
  carritoIcon.innerHTML = `<img src="./assets/img/carrito.png" alt="Carrito de compras" width="30" height="30"> (${carrito.length})`;
};

const mostrarNotificacion = (mensaje) => {
  const notificationContainer = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = 'alert alert-success alert-dismissible fade show';
  notification.role = 'alert';
  notification.innerHTML = `
    ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hide');
    notification.addEventListener('transitionend', () => {
      notification.remove();
    });
  }, 3000);
};

const agregarAlCarrito = (zapatilla) => {
  carrito.push(zapatilla);
  actualizarCarritoIcon();
  mostrarNotificacion("Zapatilla agregada al carrito");
};

const enviarDatos = (series, id, name, img, model, price) => {
  const archivoHTML = "../index.html";
  fetch(archivoHTML)
    .then(response => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const imagePage = doc.getElementById("imagePage");
      imagePage.src = img;
      imagePage.alt = `imagen de ${name}`;
      imagePage.classList.add("card-img-top");

      const titlePage = doc.getElementById("titlePage");
      titlePage.textContent = `Marca: ${name}`;

      const subtitlePage1 = doc.getElementById("subtitlePage");
      subtitlePage1.textContent = `Modelo: ${model}`;

      const subtitlePage2 = doc.getElementById("subtitlePage2");
      subtitlePage2.textContent = `Precio: ${price}`;

      const nuevoHTML = new XMLSerializer().serializeToString(doc);
      document.body.innerHTML = nuevoHTML;
    });
};

const createCards = (results = []) => {
  let zapatillasRow = document.getElementById("zapatillasRow");

  results.forEach((result) => {
    const { series, id, name, img, model, price } = result;

    const divCol = document.createElement("div");
    divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

    const card = document.createElement("div");
    card.classList.add("card");

    const imge = document.createElement("img");
    imge.src = img;
    imge.alt = `imagen de ${name}`;
    imge.classList.add("card-img-top");

    const divBody = document.createElement("div");
    divBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("text-title");
    title.textContent = `Marca: ${name}`;

    const subtitle = document.createElement("p");
    subtitle.classList.add("text-title");
    subtitle.textContent = `Modelo: ${model}`;

    const subtitle2 = document.createElement("p");
    subtitle2.classList.add("text-title");
    subtitle2.textContent = `Precio: ${price}`;

    const btnVer = document.createElement("button");
    btnVer.classList.add("btn", "btn-dark");
    btnVer.textContent = "Agregar al carro";
    btnVer.addEventListener("click", () => {
      enviarDatos(series, id, name, img, model, price);
      agregarAlCarrito(result);
    });

    divCol.appendChild(card);
    card.appendChild(imge);
    card.appendChild(divBody);
    divBody.appendChild(title);
    divBody.appendChild(subtitle);
    divBody.appendChild(subtitle2);
    divBody.appendChild(btnVer);

    zapatillasRow.appendChild(divCol);
  });
};

getZapas()
  .then((data) => {
    createCards(data);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

document.addEventListener('DOMContentLoaded', () => {
  actualizarCarritoIcon();
});
