import { getimageUrl } from "../../../overview/profile/utils";

export const Avatar = ({ persona, tamanio }) => {
  return (
    <img
      className="avatar"
      src={getimageUrl(persona)}
      alt={persona.nombre}
      width={tamanio}
      height={tamanio}
    />
  );
};
