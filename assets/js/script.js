import { getZapas } from "./getZapas.js";
import { carrito, agregarAlCarrito, actualizarCarritoIcon, eliminarDelCarrito } from "./carrito.js";

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

const actualizarCarritoModal = () => {
  const carritoList = document.getElementById('carritoList');
  carritoList.innerHTML = '';
  carrito.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.innerHTML = `
      <div>
        Marca: ${item.name}, Modelo: ${item.model}, Precio: ${item.price}
      </div>
      <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoList.appendChild(listItem);
  });
};

const handleAgregarAlCarrito = (zapatilla) => {
  agregarAlCarrito(zapatilla);
  mostrarNotificacion("Zapatilla agregada al carrito");
  actualizarCarritoModal();
};

const handleVerMas = (zapatilla) => {
  localStorage.setItem('detalleZapatilla', JSON.stringify(zapatilla));
  window.location.href = 'detalle.html';
};

const createCards = (results = []) => {
  let zapatillasRow = document.getElementById("zapatillasRow");

  results.forEach((result) => {
    const { id, name, img, model, price } = result;

    const divCol = document.createElement("div");
    divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-6", "col-12", "mb-3"); // Agrega la clase mb-3 para añadir margen inferior

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = img;
    cardImg.alt = name;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = name;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = `Modelo: ${model}`;

    const cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.textContent = `Precio: ${price}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("btn", "btn-dark", "m-1");
    addToCartButton.textContent = "Agregar al carrito";
    addToCartButton.onclick = () => handleAgregarAlCarrito(result);

    const verMasButton = document.createElement("button");
    verMasButton.classList.add("btn", "btn-dark", "m-1");
    verMasButton.textContent = "Ver Más";
    verMasButton.onclick = () => handleVerMas(result);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(addToCartButton);
    cardBody.appendChild(verMasButton);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    divCol.appendChild(card);
    zapatillasRow.appendChild(divCol);
  });
};

getZapas().then(createCards);

window.eliminarDelCarrito = (index) => {
  eliminarDelCarrito(index);
  mostrarNotificacion("Zapatilla eliminada del carrito");
  actualizarCarritoModal();
};

actualizarCarritoIcon();