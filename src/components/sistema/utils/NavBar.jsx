import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export const NavBar = () => {
  const { cerrarSesion, usuario } = useContext(AuthContext);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" className="mb-5">
        <Container>
          <Navbar.Brand href="#home" className="mt-1">
            <img
              src={logo}
              alt="logo"
              className="mb-2"
              style={{ width: "64px" }}
            />
            <h1
              className="d-inline-block text-danger ms-2"
              style={{ fontFamily: "heavitas" }}
            >
              PIZZA
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="me-auto"></div>
            <Nav>
              <Link to={"/sistema/menu"} className="nav-link px-3">
                Menú
              </Link>
              <Link to={"/sistema/perfil"} className="nav-link px-3">
                Perfil
              </Link>
              {usuario.rol == "admin" ? (
                <Link to={"/sistema/usuarios"} className="nav-link px-3">
                  Usuarios
                </Link>
              ) : (
                ""
              )}

              <a href="#" className="nav-link px-3" onClick={cerrarSesion}>
                Salir
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
