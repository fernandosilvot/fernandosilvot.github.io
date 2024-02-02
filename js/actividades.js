document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia al contenedor donde se agregarán las tarjetas de actividad
    const activitiesContainer = document.getElementById("actividades");

    // Cargar el JSON desde la ruta "./json/actividades.json"
    fetch('./json/actividades.json')
        .then(response => response.json())
        .then(data => {
            // Función para crear tarjetas de actividad y modales 216.8 X 250
            function createActivityCard(activity) {
                const cardContainer = document.createElement("div");
                cardContainer.className = "col-md-6";

                cardContainer.innerHTML = `
                    <div class="card mb-3 rounded-4" style="max-width: 640px; margin-bottom: 20px; margin-left: 10px;">
                        <div class="row g-0">
                          <div class="col-md-4 rounded-4 bg-black bg-gradient"> 
                              <img src="${activity.imageSrc}" class="img-fluid rounded-start " alt="${activity.imageAlt}" height="250" width="100%">
                          </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${activity.title}</h5>
                                    <p class="card-text">${activity.resume}</p>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${activity.title.replace(/\s+/g, "-").toLowerCase()}">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="modal-${activity.title.replace(/\s+/g, "-").toLowerCase()}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${activity.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${activity.imageSrc2}" alt="${activity.imageAlt}" id="imagen_adctividades" width="440px">
                                    <br>
                                    <p class="text-start mt-3">${activity.text}</p>
                                    <p class="text-start"><strong>Realizado el : ${activity.date}</strong></p>
                                    <a class="btn btn-primary" href="${activity.url}" target="_blank">Ver Publicación</a>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                return cardContainer;
            }

            // Itera sobre los datos y crea las tarjetas de actividad
            data.forEach((activity) => {
                const activityCard = createActivityCard(activity);
                activitiesContainer.appendChild(activityCard);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
