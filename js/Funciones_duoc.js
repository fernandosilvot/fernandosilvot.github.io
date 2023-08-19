document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos todas las pestañas del list group
    const tabItems = document.querySelectorAll('[data-bs-toggle="list"]');
    
    // Iteramos sobre cada pestaña
    tabItems.forEach((tabItem) => {
      tabItem.addEventListener("click", (event) => {
        event.preventDefault(); // Evitamos el comportamiento predeterminado
        
        // Removemos la clase 'active' de todos los botones en la lista
        tabItems.forEach((t) => {
          t.classList.remove("active", "bg-warning");
        });
    
        // Agregamos la clase 'active' al botón actual
        tabItem.classList.add("active", "bg-warning");
        
        // Obtenemos el contenido asociado a la pestaña
        const target = document.querySelector(tabItem.getAttribute("href"));
    
        // Ocultamos todos los contenidos de las pestañas del tab content
        document.querySelectorAll(".tab-pane").forEach((pane) => {
          pane.classList.remove("show", "active");
        });
    
        // Mostramos el contenido de la pestaña actual del tab content
        target.classList.add("show", "active");
      });
    });
  });
  