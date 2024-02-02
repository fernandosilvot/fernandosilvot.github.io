function generarContenido(data) {
    var contenedor = document.getElementById("estudio");

    var rowElement = document.createElement("div");
    rowElement.className = "row";

    var leftColumn = document.createElement("div");
    leftColumn.className = "col-lg-6";
    leftColumn.innerHTML = `
      <h2 class="text-warning"><strong>${data.instituciones[0].nombre}</strong></h2>
      <p class="text-start mt-4">${data.instituciones[0].descripcion}</p>
    `;
    rowElement.appendChild(leftColumn);

    var rightColumn = document.createElement("div");
    rightColumn.className = "col-lg-6";
    rightColumn.innerHTML = `
      <img src="${data.instituciones[0].imagen}" alt="Escuela/Universidad" class="img-fluid" id="universidad" width="270px">
    `;
    rowElement.appendChild(rightColumn);

    var coursesRow = document.createElement("div");
    coursesRow.className = "row mt-5";

    data.cursos.forEach(curso => {
      var courseCard = document.createElement("div");
      courseCard.className = "col-lg-4 mb-4";
      courseCard.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <img src="${curso.imagen || ''}" alt="${curso.nombre}" width="50px"><strong> - ${curso.nombre}</strong>
            </h5>
            <p class="card-text">${curso.descripcion}</p>
            <a class="btn btn-success" href="${curso.link}" target="_blank">Ver esta ${curso.tipo}</a>
          </div>
        </div>
      `;
      coursesRow.appendChild(courseCard);
    });

    rowElement.appendChild(coursesRow);
    contenedor.appendChild(rowElement);
  }

  // Cambiar la ruta a la versión local
  const urlLocal = './json/estudio.json';

  fetch(urlLocal)
    .then(response => response.json())
    .then(datos => generarContenido(datos))
    .catch(error => console.error('Error al cargar el JSON:', error));