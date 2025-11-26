// Seleccionar todos los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const contadorCarrito = document.getElementById("contador-carrito");

let contador = 0;

botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        contador++;
        contadorCarrito.textContent = contador;
    });
});
