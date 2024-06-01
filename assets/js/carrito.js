export let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

export const agregarAlCarrito = (zapatilla) => {
  carrito.push(zapatilla);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarritoIcon();
};

export const eliminarDelCarrito = (index) => {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarritoIcon();
};

export const actualizarCarritoIcon = () => {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = `(${carrito.length})`;
};
