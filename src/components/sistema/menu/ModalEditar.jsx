import {Modal} from "react-bootstrap";
import { Formulario } from "./Formulario";

export const ModalEditar = ({show, onHide, pizza}) => {
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
          Editar Pizza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formulario opcion="editar" onHide={onHide} pizza={pizza}/>
      </Modal.Body>
    </Modal>
  );
};
