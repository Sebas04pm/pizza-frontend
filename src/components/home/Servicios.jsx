import { Row, Col, Container } from "react-bootstrap";

import pizza from "../../assets/img/icons/pizza.png";
import restaurante from "../../assets/img/icons/restaurante.png";
import menu from "../../assets/img/icons/menu.png";

export const Servicios = () => {
  return (
    <div className="bg-dark pt-5">
      <Container className="text-light">
        <h1
          className="text-center text-danger mb-5"
          style={{ fontFamily: "heavitas" }}
        >
          SERVICIOS
        </h1>
        <p className="text-center ff-altone mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae
          voluptatem facere laboriosam, harum nesciunt soluta itaque numquam,
          debitis possimus sunt amet nihil dolore magni adipisci rem quam a
          officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia voluptatum sed perspiciatis.
        </p>

        <Row className="px-3">
          <Col sx={12} md={4} className="text-center mb-3">
            <img
              src={pizza}
              alt="pizza"
              className="rounded-circle p-2 bg-danger mb-4"
            />
            <p className="ff-altone">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              molestias facilis alias officiis cumque unde sequi dolore
            </p>
          </Col>
          <Col sx={12} md={4} className="text-center mb-3">
            <img
              src={restaurante}
              alt="pizza"
              className="rounded-circle p-2 bg-danger mb-4"
            />
            <p className="ff-altone">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              molestias facilis alias officiis cumque unde sequi dolore
            </p>
          </Col>
          <Col sx={12} md={4} className="text-center mb-3">
            <img
              src={menu}
              alt="pizza"
              className="rounded-circle p-2 bg-danger mb-4"
            />
            <p className="ff-altone">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              molestias facilis alias officiis cumque unde sequi dolore
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
