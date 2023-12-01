import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalAgregar } from "./ModalAgregar";
import {  PlusLg } from "react-bootstrap-icons";

export const BotonModalAgregar = ({cargarUsuarios}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant="success"
        size="lg"
        className="position-fixed rounded-circle bottom-0 end-0 mb-4 me-4"
        style={{ zIndex: 20 }}
        onClick={() => setModalShow(true)}
      >
        <PlusLg />
      </Button>
      <ModalAgregar show={modalShow} onHide={() => setModalShow(false)} cargarUsuarios={cargarUsuarios} />
    </>
  );
};
