import { useState } from "react";
import { Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { ModalEditar } from "./ModalEditar";

export const BotonEditar = ({pizza}) => {
  const [modalEditar, setModalEditar] = useState(false);
  return (
    <>
      <Button
        variant="warning"
        className="rounded btn-sm me-1"
        onClick={() => setModalEditar(true)}
      >
        <Pencil className="fs-5" />
      </Button>

      <ModalEditar show={modalEditar} onHide={() => setModalEditar(false)} pizza={pizza} />
    </>
  );
};
