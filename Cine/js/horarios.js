
const filtroDia = document.getElementById("filtro-dia");
const filas = document.querySelectorAll("#tabla-horarios tbody tr");
const mensaje = document.getElementById("mensaje-filtro");

function filtrarHorarios() {
  const dia = filtroDia.value;
  let visibles = 0;

  filas.forEach(function (fila) {
    const mostrar = dia === "todos" || fila.dataset.dia === dia;
    fila.hidden = !mostrar;
    if (mostrar) {
      visibles++;
    }
  });

  if (visibles === 0) {
    mensaje.textContent = "No hay funciones para " + dia + ".";
  } else if (dia === "todos") {
    mensaje.textContent = "Mostrando todas las funciones (" + visibles + ").";
  } else {
    mensaje.textContent = "Mostrando " + visibles + " función(es) del día " + dia + ".";
  }
}

filtroDia.addEventListener("change", filtrarHorarios);
