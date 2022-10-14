import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";





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
                  <LoginForm />
                  <RegisterForm />
                </Nav> )  
              }
            


        </Navbar.Collapse>          
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
