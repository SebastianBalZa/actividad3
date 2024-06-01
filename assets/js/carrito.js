export let carrito = [];

export const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  actualizarCarritoIcon();
};

const actualizarCarritoIcon = () => {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = `(${carrito.length})`;
};
