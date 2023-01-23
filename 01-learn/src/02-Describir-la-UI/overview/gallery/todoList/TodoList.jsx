const person = {
  name: "Hedy Lamarr",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  photo: "https://i.imgur.com/yXOvdOSs.jpg",
};

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

      <div style={person.theme} className="p-3">
        <h1>{person.name}'s Todos</h1>
        <img src={person.photo} alt={person.name} className="avatar" />
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
      </div>
    </>
  );
};
