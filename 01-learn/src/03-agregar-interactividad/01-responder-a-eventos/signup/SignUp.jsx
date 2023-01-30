const SignUp = () => {
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviando Información");
      }}
    >
      <input
        type="text"
        className="form-control w-25 me-3 border border-dark"
      />
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default SignUp;
