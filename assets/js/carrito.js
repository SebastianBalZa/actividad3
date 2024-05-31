export let carrito = [];

export const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  actualizarCarritoIcon();
};

const actualizarCarritoIcon = () => {
  const carritoIcon = document.getElementById('carritoIcon');
  carritoIcon.innerHTML = `<img src="./assets/img/carrito.png" alt="Carrito de compras" width="30" height="30"> (${carrito.length})`;
};