import { Form02 } from "./fom02/Form02";
import { AmigosGatunos } from "./form/amigos-gatunos/AmigosGatunos";
import { Form } from "./form/Form";

const ManipulacionDelDOMConRefs = () => {
  return (
    <>
      <Form />
      <div className="separator"></div>
      <AmigosGatunos />
      <div className="separator"></div>
      <Form02 />
    </>
  );
};

export default ManipulacionDelDOMConRefs;
