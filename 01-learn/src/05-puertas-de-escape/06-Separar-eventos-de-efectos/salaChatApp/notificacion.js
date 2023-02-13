import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const mostrarNotificacion = (mensaje, tema) => {
  Toastify({
    text: mensaje,
    duration: 2000,
    gravity: "top",
    position: "right",
    style: {
      background: tema === "oscuro" ? "black" : "white",
      color: tema === "oscuro" ? "white" : "black",
    },
  }).showToast();
};
