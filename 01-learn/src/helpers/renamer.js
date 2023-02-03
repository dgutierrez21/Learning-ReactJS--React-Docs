export function renombrar(texto) {
  const aEspacio = texto.replaceAll("-", " ");
  const aGuion = texto.replaceAll(" ", "-");

  return texto.includes("-") ? aEspacio : aGuion;
}

export function camelizar(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (palabra) {
      return palabra.toUpperCase();
    })
    .replace(/\s+/g, "");
}
