document.addEventListener('DOMContentLoaded', () => {
    const zapatilla = JSON.parse(localStorage.getItem('detalleZapatilla'));
  
    if (zapatilla) {
      document.getElementById('imagePage').src = zapatilla.img;
      document.getElementById('imagePage').alt = `Imagen de ${zapatilla.name}`;
      document.getElementById('titlePage').textContent = `Marca: ${zapatilla.name}`;
      document.getElementById('subtitlePage').textContent = `Modelo: ${zapatilla.model}`;
      document.getElementById('subtitlePage2').textContent = `Precio: ${zapatilla.price}`;
    }
  });
  