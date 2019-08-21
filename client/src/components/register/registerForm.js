import React, { Component } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Image
} from "react-bootstrap";

import axios from 'axios';

import ImageUpload from "./imageUpload";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUpload:false,
      avatar_url:null,
    };
   
    this.openImageUpload = this.openImageUpload.bind(this);
    this.hideImageUpload  = this.hideImageUpload.bind(this);
    this.updateAvatarUrl  = this.updateAvatarUrl.bind(this);
    
    
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
                  
                  <Image  onClick={this.openImageUpload} style={{height:'60px',width:'60px',marginLeft:'3%',cursor:'pointer'}} src={ this.state.avatar_url === null ? require('../../assets/images/avatarUpload.png') : `http://localhost:3001/uploads/${this.state.avatar_url}`}  roundedCircle />
                  <ImageUpload setUrl= {this.updateAvatarUrl} show={this.state.imageUpload} onHide={this.hideImageUpload}/>
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
              onClick={(e)=>{ this.props.onHide(); this.postData();}}
            >
              Register
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    );
  }

  openImageUpload() {
    this.setState({ imageUpload: true });
    
  }

  hideImageUpload(){
    this.setState({ imageUpload: false });
  }

  updateAvatarUrl(value){
   
      this.setState({ avatar_url: value });
   
  }

 postData(){
  axios.get('http://localhost:3001/api')
  .then(res=>{

    let payload={
      first_name:'testRef14',
      last_name:'testRef14',
      email:'testRef14@g.com',
      username:'testRef14',
      avatar_url: this.state.avatar_url,
    }
  
    axios.post('http://localhost:3001/api/add', payload)
    .then(res=> console.log(res));

  });
 }

}

export default RegisterForm;
