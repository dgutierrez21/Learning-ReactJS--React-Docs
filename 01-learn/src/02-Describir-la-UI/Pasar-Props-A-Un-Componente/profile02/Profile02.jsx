import { Avatar } from "./components/Avatar";

export const Profile02 = () => {
  return (
    <Card>
      <h1 className="px-4">Este es un avatar pasado como hijo</h1>
      <Avatar
        tamanio={100}
        persona={{ nombre: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
    </Card>
  );
};

function Card({ children }) {
  return <div className="card">{children}</div>;
}
