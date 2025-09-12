// Manejo de pestañas en la página "Nosotros"
const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      // Quitar active a todo
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));

      // Activar la pestaña clicada
      button.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

// Login y Registro
// ventanas.js
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button"); // Botones de pestañas
    const tabContents = document.querySelectorAll(".tab-content"); // Contenido de pestañas
    const tabLinks = document.querySelectorAll(".tab-link"); // Links internos entre login/registro

    function showTab(tabId) {
        // Ocultar todo
        tabContents.forEach(content => content.classList.remove("active"));
        tabButtons.forEach(btn => btn.classList.remove("active"));

        // Mostrar pestaña seleccionada
        document.getElementById(tabId).classList.add("active");
        document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add("active");
    }

    // Al hacer clic en un botón de pestaña
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            showTab(tabId);
        });
    });

    // Al hacer clic en el enlace dentro del texto
    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const tabId = link.getAttribute("data-tab");
            showTab(tabId);
        });
    });
});
