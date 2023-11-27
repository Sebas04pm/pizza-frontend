import { Col, Card, Button } from "react-bootstrap";
import pizzaImg from "../../assets/img/pizzas/americana.jpg";

export const MenuItem = ({pizza}) => {
  return (
    <Col xs={12} sm={6} lg={3} className="p-3">
      <Card className="w-100 pizza-item">
        <Card.Img src={pizzaImg} />
        <Card.Body className="text-center mt-3">
          <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
            {pizza}
          </h4>
          <p className="text-dark mb-3">
            tomate, queso, cebolla, aceitunas, jamom.
          </p>
          <p className="font-monospace mb-3">Familiar</p>
          <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">25$</h4>
          <Button variant="danger" className="text-light fw-bold mb-3">
            Ordena Ahora!
          </Button>

          
        </Card.Body>
      </Card>
    </Col>
  );
};
