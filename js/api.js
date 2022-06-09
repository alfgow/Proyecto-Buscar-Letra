import * as UI from "./interfaz.js";

class API {
	constructor(artista, cancion) {
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI() {
		const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const { lyrics } = res;
				if (!lyrics) {
					UI.mostarMensaje(
						"Parece que no tenemos la letra de esa rola o no existe",
						"error"
					);
					return;
				} else {
					setTimeout(() => {
						UI.divResultado.textContent =
							lyrics;
					}, 2000);
					UI.spinner();
				}
			});
	}
}

export default API;
