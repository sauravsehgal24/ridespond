import React, { Component } from "react";
import RegisterForm from "../register/registerForm";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import LoginForm from "../login/loginForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: false,
      loginForm:false,
    };
    
    this.openRegisterDialog = this.openRegisterDialog.bind(this);
    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    

  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          style={{
            boxShadow: "0px 0px 4px rgba(203, 174, 235,1)",
            backgroundColor: "rgba(238, 235, 242,0.3)"
          }}
        >
          <Navbar.Brand
            href="#home"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            <img
              src={require("../../assets/images/header.gif")}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand
            style={{
              fontFamily: " Caveat, cursive",
              fontSize: "30px",
              color: "rgb(108, 107, 110)"
            }}
          >
            Long Drive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home">
                <Button
                  style={{
                    backgroundColor: "rgb(191, 159, 237)",
                    border: "1px solid rgb(191, 159, 237)",
                    fontFamily: "Quicksand, sans-serif"
                  }}
                  onClick={this.openRegisterDialog}
                >
                  Sign Up
                </Button>
              </Nav.Link>
              <Nav.Link href="#home">
                <Button
                  variant="outline"
                  style={{
                    border: "1px solid rgb(191, 159, 237)",
                    color: "rgb(108, 107, 110)",
                    fontFamily: "Quicksand, sans-serif"
                  }}
                  onClick={this.openLoginDialog}
                >
                  Login
                </Button>
              </Nav.Link>
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Navbar>

        <RegisterForm show={this.state.registerForm} onHide={this.hideDialog}/>
        <LoginForm show={this.state.loginForm} onHide={this.hideDialog} />
      </React.Fragment>
    );
  }

  openRegisterDialog() {
    this.setState({ registerForm: true });
    
  }

  openLoginDialog() {
    this.setState({ loginForm: true });
    
  }

  hideDialog(){
    this.setState({ registerForm: false });
    this.setState({ loginForm: false });
  }
}

export default Header;
