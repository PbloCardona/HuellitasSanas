AOS.init(2000);


//nnavbar hidder
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
};

// animacion servicios NOTA: el cambio de color del boton dejó de funcionar y no supe arreglarlo :p


$(document).ready(function () {
  // Esta línea espera a que el documento HTML esté completamente cargado antes de ejecutar cualquier código.
  
  $(".accordion").click(function () {
    // Esta línea selecciona todos los elementos con la clase "accordion" y agrega un evento de clic a cada uno.
    
    var panel = $(this).next(".panel");
    // Esta línea guarda en la variable "panel" el siguiente elemento con la clase "panel" después del elemento clicado.
    
    if (!panel.is(":animated")) {
      // Esta línea verifica si el panel no está actualmente en proceso de animación.
      
      $(this).toggleClass("active"); 
      // Esta línea alterna (agrega o remueve) la clase "active" en el elemento clicado.
      
      panel.slideToggle("slow");
      // Esta línea desliza hacia arriba o hacia abajo el panel de forma lenta.
    }
  });
  // Fin de la función de clic para los elementos con la clase "accordion".
});
// Fin de la función que se ejecuta cuando el documento HTML ha sido cargado completamente.


