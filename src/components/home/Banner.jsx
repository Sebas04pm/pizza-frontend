import { Carousel, Row, Col, Button } from "react-bootstrap";
import pizzaPng1 from "../../assets/img/home/pizza.png";
import pizzaPng2 from "../../assets/img/home/pizzarebanada.png";
import pizzaPng31 from "../../assets/img/home/tomate.png";
import pizzaPng32 from "../../assets/img/home/cebolla.png";
import pizzaPng33 from "../../assets/img/home/queso.png";
import pizzaPng34 from "../../assets/img/home/pimiento.png";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <>
      <Carousel fade className="vh-100" indicators={false} controls={false}>
        <Carousel.Item interval={3000}>
          <div className="w-100 vh-100 bg-danger d-flex align-items-center">
            <Row className="w-100">
              <Col sx={12} md={6} className="ps-5 mb-4">
                <h1
                  className="text-success text-center"
                  style={{ fontFamily: "heavitas" }}
                >
                  PRIMER TIULO BANNER.
                </h1>
                <div className="px-5 mt-5 text-light fw-bold">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    sit dicta facilis quo optio sint quos molestias.
                  </span>
                </div>
                <div className="w-100 text-end pe-4">
                  <Link to="/cuenta">
                    <Button
                      variant="outline-light"
                      size="lg"
                      className="mt-5 fw-bold"
                    >
                      Registrarse Ahora!
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col sx={12} md={6} className=" text-center">
                <img src={pizzaPng1} alt="pizza" className="pizzaPng1" />
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="w-100 vh-100 bg-warning d-flex align-items-center">
            <Row className="w-100">
              <Col sx={12} md={6} className=" text-center">
                <img src={pizzaPng2} alt="pizza" className="pizzaPng2 mb-3" />
              </Col>
              <Col sx={12} md={6} className="ps-5">
                <h1
                  className="text-danger text-center"
                  style={{ fontFamily: "heavitas" }}
                >
                  SEGUNDO TIULO BANNER.
                </h1>
                <div className="px-5 mt-5 text-black fw-bold">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    sit dicta facilis quo optio sint quos molestias.
                  </span>
                </div>
                <div className="w-100 text-end pe-4">
                  <Link to="/cuenta">
                    <Button
                      variant="outline-danger"
                      size="lg"
                      className="mt-5 fw-bold"
                    >
                      Registrarse Ahora!
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="w-100 vh-100 bg-success d-flex align-items-center">
            <Row className="w-100">
              <Col sx={12} md={6} className="ps-5 mb-4">
                <h1
                  className="text-warning text-center"
                  style={{ fontFamily: "heavitas" }}
                >
                  TERCER TIULO BANNER.
                </h1>
                <div className="px-5 mt-5 text-light fw-bold">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    sit dicta facilis quo optio sint quos molestias.
                  </span>
                </div>
                <div className="w-100 text-end pe-4">
                  <Link to="/cuenta">
                    <Button
                      variant="outline-warning"
                      size="lg"
                      className="mt-5 fw-bold"
                    >
                      Registrarse Ahora!
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col sx={12} md={6} className="text-center ps-4 mt-5">
                <Row>
                  <Col className="mb-3">
                    <img src={pizzaPng31} alt="pizza" className="pizzaPng3" />
                  </Col>
                  <Col className="mb-3">
                    <img src={pizzaPng32} alt="pizza" className="pizzaPng3" />
                  </Col>
                  <Col className="mb-3">
                    <img src={pizzaPng33} alt="pizza" className="pizzaPng3" />
                  </Col>
                  <Col className="mb-3">
                    <img src={pizzaPng34} alt="pizza" className="pizzaPng3" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
