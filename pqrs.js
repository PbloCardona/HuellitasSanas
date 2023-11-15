const idInput = document.getElementById('get-id');
const nameInput = document.getElementById('get-name');
const telInput = document.getElementById('get-tel');
const emailInput = document.getElementById('get-email');
const enviarCheckbox = document.getElementById('get-enviar');
const enviarBtn = document.getElementById('btn-enviar');
const identificacionInput = document.getElementById('identificacion');
const nombreCompletoInput = document.getElementById('nombre_completo');
const servicioSelect = document.getElementById('servicioSelect');
const btnIr = document.getElementById('btn-ir');
const fijarFechaBtn = document.getElementById('fijar-fecha');
const formCalendario = document.getElementById('form-calendario');
const fechaInput = document.getElementById('fecha');
const fechaEstablecidaP = document.getElementById('fecha-establecida');
const infoCita = document.getElementById('info-cita');
const servicioElegidoP = document.getElementById('servicio-elegido');
const btnConfirmCita = document.getElementById('btn-confirm-cita');
const divFin = document.getElementById('fin');
const cosas=document.querySelector(".inquitudes");
const correoFinP = document.getElementById('correo-fin');
let fecha = new Date()
let hoy=fecha.toUTCString()
console.log(hoy)
function verificarCamposEnviar() {
  const idValue = idInput.value.trim();
  const nameValue = nameInput.value.trim();
  const telValue = telInput.value.trim();

  if (idValue !== '' && nameValue !== '' && telValue !== '' && enviarCheckbox.checked) {
    enviarBtn.removeAttribute('disabled');
  } else {
    enviarBtn.setAttribute('disabled', 'true');
  }
}

function verificarCamposIr() {
  const emailValue = emailInput.value.trim();
  const selectedService = servicioSelect.value;

  if (emailValue !== '' && selectedService !== '------') {
    btnIr.removeAttribute('disabled');
  } else {
    btnIr.setAttribute('disabled', 'true');
  }
}

idInput.addEventListener('input', verificarCamposEnviar);
nameInput.addEventListener('input', function() {
  verificarCamposEnviar();
  nombreCompletoInput.value = nameInput.value.trim();
});
telInput.addEventListener('input', verificarCamposEnviar);
emailInput.addEventListener('input', verificarCamposIr);
servicioSelect.addEventListener('change', verificarCamposIr);
enviarCheckbox.addEventListener('change', verificarCamposEnviar);


fijarFechaBtn.addEventListener('click', function() {
  const fechaSeleccionada = fechaInput.value;
  const selectedService = servicioSelect.options[servicioSelect.selectedIndex].text;

  formCalendario.style.display = 'none';

  const fechaMostradaElement = document.createElement('div');

  document.body.appendChild(fechaMostradaElement);

  servicioElegidoP.textContent = ` ${selectedService}`;
  servicioElegidoP.style.display = 'block';

  fechaEstablecidaP.textContent = ` ${fechaSeleccionada}`;
  fechaEstablecidaP.style.display = 'block';
  infoCita.style.display = 'block';
  fijarFechaBtn.style.display = 'none';

});

btnConfirmCita.addEventListener('click', function(event) {
  event.preventDefault();
  infoCita.style.display = 'none';
  divFin.style.display = 'block';
  correoFinP.textContent = `${emailInput.value}`;
  cosas.textContent = servicioSelect.value;
});
  // tomarDatos()
  
//   const child_process = require("child_process");

//   const process = child_process.spawn("node", ["MySQL.js"]);
  
//   // Escucha la salida del proceso
//   process.stdout.on("data", (data) => {
//     console.log(data);
//   });
  
//   // Escucha la finalización del proceso
//   process.on("exit", (code) => {
//     if (code === 0) {
//       console.log("El proceso se ejecutó correctamente");
//     } else {
//       console.log("El proceso se ejecutó con errores");
//     }
//   });

// });

// const hola = 'asdasda $id'

btnIr.addEventListener('click', function(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const selectedService = servicioSelect.value;

  if (emailValue === '' || selectedService === '------') {
    alert('Por favor, completa todos los campos y selecciona un servicio.');
    return;
  }
  emailInput.setAttribute('disabled', 'true');

//   switch (selectedService) {
//     case '1':
//       console.log('Has seleccionado: Consulta Medico General');
//       window.alert('Has seleccionado: Consulta Medico General');
//       break;
//     case '2':
//       console.log('Has seleccionado: Medicina Preventiva');
//       window.alert('Has seleccionado: Medicina Preventiva');
//       break;
//     case '3':
//       console.log('Has seleccionado: Ayudas Diagnósticas');
//       window.alert('Has seleccionado: Ayudas Diagnósticas');
//       break;
//     case '4':
//       console.log('Has seleccionado: Servicio de Etología');
//       window.alert('Has seleccionado: Servicio de Etología');
//       break;
//     case '5':
//       console.log('Has seleccionado: Trámite de Viaje');
//       window.alert('Has seleccionado: Trámite de Viaje');
//       break;
//     default:
//       console.log('Por favor, selecciona un servicio en la lista');
//       window.alert('Por favor, selecciona un servicio en la lista');
//   }

   document.getElementById('date_pick').style.display = 'block';
 document.getElementById('select-service').style.display = 'none';
 });

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const idValue = idInput.value.trim();
  const nameValue = nameInput.value.trim();
  const telValue = telInput.value.trim();

  if (idValue !== '' && nameValue !== '' && telValue !== '' && enviarCheckbox.checked) {
    identificacionInput.value = idValue;
    nombreCompletoInput.value = nameValue;
    document.getElementById('tel').value = telValue;
    document.getElementById('primer_paso').style.display = 'none';
    document.getElementById('segundo_paso').style.display = 'block';
  } else {
    alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
  }
});

function switchTabTitle() {
  var titles = ["PQRS", "Huellitas Sanas"];
  var titleIndex = 0;

  setInterval(function() {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
  }, 2000);
}

// const { error } = require("console");
// const { connect } = require("http2");