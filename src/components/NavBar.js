import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { confirm } = Modal;
const { Item } = Form;



const NavBar = () => {
  const sysInfo = useSelector((state) => state.sysConfig);


  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Library</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            
              {sysInfo.logued ? 
                (
                <><Navbar.Text>
                  Signed in as: {sysInfo.userName} /
                </Navbar.Text>
                <Nav> 
                <Link to={"/logout"} className="nav-link">
                    Logout
                </Link>

                </Nav></> 
                )
              :
                (<Nav> 
                <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>  
                </Nav> )  
              }
            


        </Navbar.Collapse>          
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
