import React from "react";
import { Button, Row, Col, Modal, Form } from "react-bootstrap";

export const ModalEditarImagen = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form>
        <Modal.Header className="bg-warning text-dark" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar Imagen
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form.Group className="mb-3">
            <Form.Label>Imagen:</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Row className="w-100">
            <Col>
              <Button
                variant="warning rounded-phill w-100 mx-2"
                onClick={props.onHide}
              >
                Continuar
              </Button>
            </Col>
            <Col>
              <Button
                variant="danger rounded-phill w-100 mx-2"
                onClick={props.onHide}
              >
                Cancelar
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
