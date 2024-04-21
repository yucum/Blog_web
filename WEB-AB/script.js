// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de desplazamiento hacia arriba
    const scrollBtnUp = document.querySelector(".scroll-btn-up");
    // Selecciona el botón de desplazamiento hacia abajo
    const scrollBtnDown = document.querySelector(".scroll-btn-down");

    // Agrega un evento de clic al botón de desplazamiento hacia arriba
    scrollBtnUp.addEventListener("click", () => {
        // Desplaza la ventana hacia arriba por una cantidad igual a la altura de la ventana del navegador
        window.scrollBy(0, -window.innerHeight);
    });

    // Agrega un evento de clic al botón de desplazamiento hacia abajo
    scrollBtnDown.addEventListener("click", () => {
        // Desplaza la ventana hacia abajo por una cantidad igual a la altura de la ventana del navegador
        window.scrollBy(0, window.innerHeight);
    });
});
