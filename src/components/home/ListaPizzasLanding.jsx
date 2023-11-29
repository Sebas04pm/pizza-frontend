import { Col, Card, Button, Row, Container } from "react-bootstrap";

import pizza from "../../assets/img/pizzas/americana.jpg";

export const ListaPizzasLanding = () => {
  return (
    <div className="bg-danger py-5">
      <h1
        className="text-center text-light mb-5"
        style={{ fontFamily: "heavitas" }}
      >
        PIZZAS
      </h1>

      <Container>
        <Row className="w-100">
          <Col xs={12} sm={6} lg={3} className="p-3">
            <Card className="w-100 pizza-item">
              <Card.Img src={pizza} />
              <Card.Body className="text-center mt-3">
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  pizzaNombre
                </h4>
                <p className="text-dark mb-3">
                  tomate, queso, cebolla, aceitunas, jamom.
                </p>
                <p className="font-monospace mb-3">Familiar</p>
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  25$
                </h4>
                <Button variant="danger" className="text-light fw-bold mb-3">
                  Ordena Ahora!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="p-3">
            <Card className="w-100 pizza-item">
              <Card.Img src={pizza} />
              <Card.Body className="text-center mt-3">
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  pizzaNombre
                </h4>
                <p className="text-dark mb-3">
                  tomate, queso, cebolla, aceitunas, jamom.
                </p>
                <p className="font-monospace mb-3">Familiar</p>
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  25$
                </h4>
                <Button variant="danger" className="text-light fw-bold mb-3">
                  Ordena Ahora!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="p-3">
            <Card className="w-100 pizza-item">
              <Card.Img src={pizza} />
              <Card.Body className="text-center mt-3">
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  pizzaNombre
                </h4>
                <p className="text-dark mb-3">
                  tomate, queso, cebolla, aceitunas, jamom.
                </p>
                <p className="font-monospace mb-3">Familiar</p>
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  25$
                </h4>
                <Button variant="danger" className="text-light fw-bold mb-3">
                  Ordena Ahora!
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3} className="p-3">
            <Card className="w-100 pizza-item">
              <Card.Img src={pizza} />
              <Card.Body className="text-center mt-3">
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  pizzaNombre
                </h4>
                <p className="text-dark mb-3">
                  tomate, queso, cebolla, aceitunas, jamom.
                </p>
                <p className="font-monospace mb-3">Familiar</p>
                <h4 className="text-danger fw-bold itemPizzaTitulo mb-3">
                  25$
                </h4>
                <Button variant="danger" className="text-light fw-bold mb-3">
                  Ordena Ahora!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
