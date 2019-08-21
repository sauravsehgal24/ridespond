import React, { Component } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col, 
  InputGroup,
  FormControl
} from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
      backdrop="static"
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Login
                </Modal.Title>
              </Modal.Header>
            </Col>
          </Row>
          <Modal.Body>
            <Row className="justify-content-center">
              <form>
                <div className="form-group">
                  <Container>
                    <Row>
                      <Col lg="12" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                        />
                      </Col>

                      <Col lg="12" className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Password"
                        />
                      </Col>
                    </Row>

                   
                  </Container>
                </div>
              </form>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                backgroundColor: "rgb(191, 159, 237)",
                border: "1px solid rgb(191, 159, 237)",
                fontFamily: "Quicksand, sans-serif"
              }}
              onClick={this.props.onHide}
            >
              Login
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    );
  }
}

export default LoginForm;
