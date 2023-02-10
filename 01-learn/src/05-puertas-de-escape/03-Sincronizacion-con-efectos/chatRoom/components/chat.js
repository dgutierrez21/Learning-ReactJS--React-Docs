export function crearConexion() {
  // Una implementación real se conectaría realmente al servidor

  return {
    conectar() {
      console.log("✅ Conectando...");
    },
    desconectar() {
      console.log("❌ Desconectado.");
    },
  };
}
