import { Col, Card, Button } from "react-bootstrap";
import { url } from "../../../backend";
import { Pencil, Trash, TrashFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { PizzasContext } from "../../../context/PizzasContext";
import { BotonEditar } from "./BotonEditar";

export const MenuItem = ({ pizza }) => {
  const { usuario } = useContext(AuthContext);
  const { eliminarPizza } = useContext(PizzasContext);
  return (
    <Col xs={12} sm={6} lg={3} className="p-3">
      <Card className="w-100 pizza-item">
        {usuario.rol == "admin" ? (
          <div className="position-absolute top-0 end-0 mt-1 me-1">
            <BotonEditar pizza={pizza}/>
            <Button
              variant="danger"
              className="rounded btn-sm"
              onClick={()=> eliminarPizza(usuario.token, pizza._id)}
            >
              <Trash className="fs-5" />
            </Button>
          </div>
        ) : "" }
        <Card.Img src={url + pizza.imagen.slice(7)} />
        <Card.Body className="text-center mt-3">
          <h4 className="text-danger fw-bold mb-3">{pizza.nombre}</h4>
          <p className="text-dark mb-3">{pizza.ingredientes}</p>
          <h6 className="mb-3">
            Famliliar:{" "}
            <span className="fw-bold text-danger">{pizza.familiar}</span>
          </h6>
          <h6 className="mb-3">
            Mediana:{" "}
            <span className="fw-bold text-danger">{pizza.mediana}</span>
          </h6>
          <h6 className="mb-3">
            Pequeña:{" "}
            <span className="fw-bold text-danger">{pizza.pequena}</span>
          </h6>
          <h6 className="mb-3">
            Porcion:{" "}
            <span className="fw-bold text-danger">{pizza.porcion}</span>
          </h6>
        </Card.Body>
      </Card>
    </Col>
  );
};
