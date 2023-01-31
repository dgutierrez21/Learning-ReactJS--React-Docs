const Gallery = () => {
  return (
    <>
      <section>
        <h1>Esculturas Inspiradoras</h1>
        <Imagen />
        <Imagen />
        <Imagen />
      </section>
    </>
  );
};

const Imagen = () => {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' de Eduardo Catalano: una gigantesca escultura floral metálica con pétalos reflectantes"
    />
  );
};

export default Gallery;
