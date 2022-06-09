export const formularioBuscar = document.querySelector("#formulario-buscar"),
	divBuscar = document.querySelector("#buscar"),
	divMensaje = document.querySelector("#mensajes"),
	divResultado = document.querySelector("#resultado"),
	headingResultado = document.querySelector(".letra-resultado h2");

export function mostarMensaje(mensaje, tipo) {
	divMensaje.textContent = mensaje;
	if (tipo === "error") {
		divMensaje.classList.add("error");
		setTimeout(() => {
			divMensaje.textContent = "";
			divMensaje.classList.remove("error");
		}, 3000);
	}
}

export function spinner() {
	divMensaje.textContent = "";
	divMensaje.classList.remove("error");
	divResultado.textContent = "";
	const divSpinner = document.createElement("div");
	divSpinner.classList.add("sk-chase");
	divSpinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `;
	divResultado.appendChild(divSpinner);
}
