import React from "react";

export const Avatar = () => {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg",
    description = "Gregorio Y. Zara";
  return (
    // <img
    //   className="avatar"
    //   src="https://i.imgur.com/7vQD0fPs.jpg"
    //   alt="Gregorio Y. Zara"
    // />

    <img src={avatar} alt={description} className="avatar" />
  );
};
