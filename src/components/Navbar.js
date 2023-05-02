import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ENavbar() {
  const auth = localStorage.getItem("user");
  console.log("authtest", auth);
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/signUp");
  }
  return (
    <>
      <Navbar bg="info" expand="lg" className="px-5">
        <Navbar.Brand to="/">E-Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Products</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/add">Add Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/update">Update Product</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/profile">Profile</Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              {auth ? (
                <Link onClick={logout} to="/signUp">
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/signUp" className="me-3">
                    SignUp
                  </Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
