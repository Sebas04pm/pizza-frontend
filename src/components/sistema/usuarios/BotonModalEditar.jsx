import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalEditarImagen } from "./ModalEditarImagen";

export const BotonModalEditar = ({ variant }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant={variant} onClick={() => setModalShow(true)}>Editar Imagen</Button>
      <ModalEditarImagen show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
