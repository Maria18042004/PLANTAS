// Función para hacer scroll hacia la sección de plantas
function verPlantas() {
  const seccionProductos = document.getElementById('productos');
  seccionProductos.scrollIntoView({ behavior: 'smooth' });
}

// Selecciona todos los botones "Añadir al carrito"
const botonesAgregar = document.querySelectorAll('.producto button');

botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombrePlanta = boton.parentElement.querySelector('h3').textContent;
    console.log(`Planta añadida: ${nombrePlanta}`);
    alert(`Has añadido "${nombrePlanta}" al carrito.`);
  });
});


