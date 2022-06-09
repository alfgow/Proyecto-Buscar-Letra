import API from "./api.js";
import * as UI from "./interfaz.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
	e.preventDefault();

	// !Obtener Datos del formulario
	const artista = document.querySelector("#artista").value,
		cancion = document.querySelector("#cancion").value;

	if (!artista || !cancion) {
		UI.mostarMensaje("Todos los campos son obligatorios", "error");
	}

	// !consultar API
	const busqueda = new API(artista, cancion);
	busqueda.consultarAPI();
}
