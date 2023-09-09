AOS.init(0);


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
    $(".accordion").click(function () {
        var panel = $(this).next(".panel");

        if (!panel.is(":animated")) {
            $(this).toggleClass("active"); 
            panel.slideToggle("slow");
        }
    });
});


