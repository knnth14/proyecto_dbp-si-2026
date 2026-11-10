

const form = document.getElementById("form-registro");
const resultado = document.getElementById("resultado");

function ponerError(campo, mensaje) {
  document.getElementById("error-" + campo.id).textContent = "Error: " + mensaje;
  campo.setAttribute("aria-invalid", "true");
}

function quitarError(campo) {
  document.getElementById("error-" + campo.id).textContent = "";
  campo.removeAttribute("aria-invalid");
}


function validar(campo, mensaje) {
  if (campo.value.trim() === "") {
    ponerError(campo, mensaje);
    return false;
  }
  quitarError(campo);
  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  resultado.textContent = "";

  var nombres = document.getElementById("nombres");
  var apellidos = document.getElementById("apellidos");
  var correo = document.getElementById("correo");
  var telefono = document.getElementById("telefono");
  var ciudad = document.getElementById("ciudad");
  var clave = document.getElementById("clave");
  var clave2 = document.getElementById("clave2");
  var terminos = document.getElementById("terminos");
  var errores = 0;

  if (!validar(nombres, "ingrese sus nombres.")) {
    errores = errores + 1;
  }

  if (!validar(apellidos, "ingrese sus apellidos.")) {
    errores = errores + 1;
  }

  if (!validar(correo, "ingrese su correo.")) {
    errores = errores + 1;
  } else if (!correo.validity.valid) {
    ponerError(correo, "el correo no es válido, ejemplo: nombre@correo.com");
    errores = errores + 1;
  }

  if (!validar(telefono, "ingrese su teléfono.")) {
    errores = errores + 1;
  } else if (!/^[0-9]{10}$/.test(telefono.value.trim())) {
    ponerError(telefono, "el teléfono debe tener exactamente 10 dígitos.");
    errores = errores + 1;
  }

  if (!validar(ciudad, "seleccione una ciudad.")) {
    errores = errores + 1;
  }

  if (!validar(clave, "ingrese una contraseña.")) {
    errores = errores + 1;
  } else if (clave.value.length < 8 || !/[A-Za-z]/.test(clave.value) || !/[0-9]/.test(clave.value)) {
    ponerError(clave, "mínimo 8 caracteres, con letras y números.");
    errores = errores + 1;
  }

  if (!validar(clave2, "confirme su contraseña.")) {
    errores = errores + 1;
  } else if (clave2.value !== clave.value) {
    ponerError(clave2, "las contraseñas no coinciden.");
    errores = errores + 1;
  }

  if (!terminos.checked) {
    ponerError(terminos, "debe aceptar los términos y condiciones.");
    errores = errores + 1;
  } else {
    quitarError(terminos);
  }

  if (errores > 0) {
    resultado.className = "error";
    resultado.textContent = "Revise los campos que tienen error.";
    form.querySelector("[aria-invalid]").focus();
  } else {
    form.reset();
    resultado.className = "exito";
    resultado.textContent = "Registro enviado correctamente.";
  }
});
