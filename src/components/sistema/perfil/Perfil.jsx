import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

import imgUsuario from "../../../assets/img/usuario.jpg";
import {
  EnvelopeFill,
  HouseDoorFill,
  PersonVcard,
  TelephoneFill,
} from "react-bootstrap-icons";

export const Perfil = () => {
  return (
    <>
      <h1 className="text-center text-danger mb-5">Perfil</h1>

      <Container>
        <Row>
          <Col sx={12} md={6} lg={4} className="text-white text-center">
            <img
              src={imgUsuario}
              alt="usuario"
              className="bg-light rounded p-3 w-75 mb-3"
            />
            <Button variant="danger" className="rounded-pill text-white">
              Cambiar Imagen
            </Button>
          </Col>
          <Col sx={12} md={6} lg={8} className="text-white">
            <Form>
              <Row>
                <Col xs={12} lg={6}>
                  <p>Nombre y Apellido:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-danger text-white">
                      <PersonVcard />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      value="nombre de usuario"
                      disabled
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                  <p>Corre electrónico:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-danger text-white">
                      <EnvelopeFill />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      value="usuarioEjemplo@mail.com"
                      disabled
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                  <p>Teléfono:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-danger text-white">
                      <TelephoneFill />
                    </InputGroup.Text>
                    <Form.Control type="text" value="" disabled />
                  </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                  <p>Dirección:</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-danger text-white">
                      <HouseDoorFill />
                    </InputGroup.Text>
                    <Form.Control type="text" value="" disabled />
                  </InputGroup>
                </Col>
              </Row>

              <div className="w-100 text-center">
                <Button variant="danger" className="my-3 me-3 text-white rounded-pill ">
                  Editar Datos
                </Button>
								<Button variant="danger" className="my-3 text-white rounded-pill ">
                  Editar Contraseña
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
