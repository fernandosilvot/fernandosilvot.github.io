const username = 'fernandosilvot';
const apiUrl = `https://api.github.com/users/${username}/repos`;
const proyectosDiv = document.getElementById('proyectos_github');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Filtrar el proyecto con el nombre 'fernandosilvot'
    const proyectosFiltrados = data.filter(proyecto => proyecto.name !== 'fernandosilvot');

    // Construir el contenido HTML solo para los proyectos filtrados
    const proyectosHTML = proyectosFiltrados.map((proyecto, index) => `
    <div class="col-md-6 offset-md-3">
    <div class="card mb-3" style="max-width: 640px; margin-bottom: 20px; margin-left: 10px;"> 
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${proyecto.name}</h5>
                    <p class="card-text">${proyecto.description}</p>
                    <a class="btn btn-primary" href="${proyecto.html_url}" target="_blank">
                        Ver más
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

      </div>
    `).join('');

    proyectosDiv.innerHTML = proyectosHTML;
  })
  .catch(error => {
    console.error('Error al obtener repositorios:', error);
    proyectosDiv.innerHTML = 'Error al cargar repositorios.';
  });
