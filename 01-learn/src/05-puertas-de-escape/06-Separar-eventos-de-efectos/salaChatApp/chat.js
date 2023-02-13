export function crearConexion() {
  let callbackConectado;
  let timeout;

  return {
    conectar() {
      timeout = setTimeout(() => {
        if (callbackConectado) {
          callbackConectado();
        }
      }, 100);
    },
    on(evento, callback) {
      if (callbackConectado) {
        throw Error("No se puede añadir el controlador dos veces.");
      }

      if (evento !== "conectado") {
        throw Error('Sólo se admite el evento "conectado"');
      }

      callbackConectado = callback;
    },
    desconectar() {
      clearTimeout(timeout);
    },
  };
}
