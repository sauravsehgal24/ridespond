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
import axios from "axios";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.uploadAvatar = this.uploadAvatar.bind(this);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backgroundColor: "rgba(240, 239, 237,0.6)" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Choose image to upload
                </Modal.Title>
              </Modal.Header>
            </Col>
          </Row>
          <Modal.Body>
            <Row className="justify-content-center">
              <form id="imageUpload">
                <input
                    className="ml-5"
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
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
              onClick={this.uploadAvatar}
            >
              Upload
            </Button>
          </Modal.Footer>
        </Container>
      </Modal>
    );
  }

  uploadAvatar() {
    const formData = new FormData(document.getElementById("imageUpload"));

    axios
      .post("http://localhost:3001/api/upload/avatar", formData, {
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(res => {
          console.log(res);
          const url = res.data.file.filename ;

          this.props.setUrl(url)
          this.props.onHide();
          
        });
  }
}

export default ImageUpload;
