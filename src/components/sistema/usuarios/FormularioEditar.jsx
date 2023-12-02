import { useState } from "react";
import { Row, Col, Form, Card, InputGroup } from "react-bootstrap";

export const FormularioEditar = ({
  usuario,
  editarDatos,
  editarPass,
  datosEditar,
  handleChange,
}) => {
  const [passVisible, setPassVisible] = useState(true);
  return (
    <Col xs={12} md={6} lg={8}>
      <Row>
        <Col sx={12} lg={6}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apelido:</Form.Label>
            <Form.Control
              type="text"
              name="nombres"
              disabled={!editarDatos}
              placeholder={usuario.nombres}
              value={datosEditar.nombres}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col sx={12} lg={6}>
          <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              disabled={!editarDatos}
              placeholder={usuario.correo}
              value={datosEditar.correo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col sx={12} lg={6}>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="text"
							name="telefono"
              disabled={!editarDatos}
              placeholder={usuario.telefono ? usuario.telefono : " "}
              value={datosEditar.telefono}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col sx={12} lg={6}>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              disabled={!editarDatos}
              placeholder={usuario.direccion ? usuario.direccion : " "}
              value={datosEditar.direccion}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        {editarPass ? (
          <Col sx={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  name="password"
                  type={!passVisible ? "text" : "password"}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={() => setPassVisible(!passVisible)}>
                  {passVisible ? <EyeFill /> : <EyeSlashFill />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Col>
  );
};
