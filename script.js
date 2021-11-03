import botonera from "./botonera.js";
import hamburguerMenu from "./menu-hamburguesa.js";
import reloj from "./reloj.js";
import styles from "./styles.js";

const d = document;

document.addEventListener('DOMContentLoaded', (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    reloj()
    botonera("#iniciar-reloj", "#detener-reloj")
    styles()
})
