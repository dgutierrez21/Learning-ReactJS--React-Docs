export function crearConexion(urlServidor, salaId) {
  return {
    conectar() {
      console.log(`✅Conectando a ${salaId} en ${urlServidor}...`);
    },
    desconectar() {
      console.log(`❌ Desconectando de ${salaId} en ${urlServidor}...`);
    },
  };
}
