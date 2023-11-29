import {Modal} from "react-bootstrap";
import { Formulario } from "./Formulario";

export const ModalCrear = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-black"
    >
      <Modal.Header className="bg-warning" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar Pizza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formulario opcion="crear" onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};
