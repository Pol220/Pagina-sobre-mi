// Saludo dinámico
window.onload = function() {
  const saludo = document.getElementById('saludo');
  if (saludo) {
    const hora = new Date().getHours();
    let mensaje = "Hola";
    if (hora < 12) {
      mensaje = "Buenos días";
    } else if (hora < 18) {
      mensaje = "Buenas tardes";
    } else {
      mensaje = "Buenas noches";
    }
    saludo.textContent = mensaje + ", bienvenid@ a mi sitio web.";
  }
}

// Cambiar color de fondo
function cambiarFondo() {
  const colores = ["#f0f4f8", "#ffefd5", "#d0f0c0", "#ffe4e1"];
  document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}
