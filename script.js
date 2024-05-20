document.addEventListener("DOMContentLoaded", function() {
    // Selección de botones y modo oscuro
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
    const toggleLightModeBtn = document.getElementById("toggle-light-mode");
    const body = document.body;

    // Función para alternar el modo oscuro
    toggleDarkModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleDarkModeBtn.style.display = "none"; // Oculta el botón de modo oscuro
        toggleLightModeBtn.style.display = "block"; // Muestra el botón de modo claro
    });

    // Función para alternar el modo claro
    toggleLightModeBtn.addEventListener("click", () => {
        body.classList.remove("dark-mode"); // Elimina la clase de modo oscuro
        toggleLightModeBtn.style.display = "none"; // Oculta el botón de modo claro
        toggleDarkModeBtn.style.display = "block"; // Muestra el botón de modo oscuro
    });

    // Selección de botones de desplazamiento
    const scrollBtnUp = document.querySelector(".scroll-btn-up");
    const scrollBtnDown = document.querySelector(".scroll-btn-down");

    // Eventos de clic para botones de desplazamiento
    scrollBtnUp.addEventListener("click", () => {
        window.scrollBy(0, -window.innerHeight);
    });

    scrollBtnDown.addEventListener("click", () => {
        window.scrollBy(0, window.innerHeight);
    });
});
