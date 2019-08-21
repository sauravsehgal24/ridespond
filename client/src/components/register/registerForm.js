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

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        backdrop="static"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Register Form
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
                      <Col lg="6" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                        />
                      </Col>

                      <Col lg="6" className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Last Name"
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                        />
                      </Col>

                      <Col lg="4" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Phone"
                        />
                      </Col>

                      <Col lg="4" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Dob"
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                        />
                      </Col>

                      <Col lg="6" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Role"
                          value="User"
                          editable="false"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Password"
                        />
                      </Col>
                      <Col lg="6" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Confirm Password"
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
              Register
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    );
  }
}

export default RegisterForm;
