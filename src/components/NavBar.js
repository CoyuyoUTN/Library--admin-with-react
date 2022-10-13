import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const { confirm } = Modal;
const { Item } = Form;

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Library</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
            <Nav.Link href="#features">Login/Sign in</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
