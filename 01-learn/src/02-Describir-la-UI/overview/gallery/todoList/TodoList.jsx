export const TodoList = () => {
  return (
    //   // This doesn't quite work!
    // <h1>Hedy Lamarr's Todos</h1>
    // <img
    //   src="https://i.imgur.com/yXOvdOSs.jpg"
    //   alt="Hedy Lamarr"
    //   class="photo"
    // >
    // <ul>
    //   <li>Invent new traffic lights
    //   <li>Rehearse a movie scene
    //   <li>Improve spectrum technology
    // </ul>

    <>
      <div className="separator"></div>

      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul className="p-0">
        <li>
          <b>---</b> Invent new traffic lights
        </li>
        <li>
          <b>---</b> Rehearse a movie scene
        </li>
        <li>
          <b>---</b> Improve spectrum technology
        </li>
      </ul>
    </>
  );
};
