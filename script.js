window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll-hide");
    } else {
        navbar.classList.remove("navbar-scroll-hide");
    }

    
});
AOS.init();





