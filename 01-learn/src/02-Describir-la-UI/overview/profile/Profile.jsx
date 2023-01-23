import { getimageUrl } from "./utils";

import "./styles.css";

export const Profile = () => {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
    </Card>
  );
};

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Avatar({ person, size }) {
  return (
    <img
      src={getimageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      className="avatar"
    />
  );
}
