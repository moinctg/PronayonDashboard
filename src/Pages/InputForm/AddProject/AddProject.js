import React from 'react';
import { useForm } from "react-hook-form";
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col
  } from "react-bootstrap"

const AddProject = () => {
  const { register, handleSubmit,reset,formState,formState:{errors}, } = useForm();
    return (
        <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add  Project</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                         input {...register("name",{required:true,maxLength:100})}
                          placeholder="Title"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                       input {...register("name",{required:true,maxLength:500})}
                          placeholder="Description"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Client
                        </label>
                     
                          <Form.Select {...register("designation")}> 
                          

                          <option> Client </option>
                          <option value="Architect">Architect</option>
                          <option value="Asst.Architect">Asst.Architect</option>
                          <option value="Engineer">Engineer</option>
                          <option value="Engineer">Asst.Engineer</option>
                          <option value="Site Engineer">Site Engineer </option>
                          
                        
                        </Form.Select>
                      </Form.Group>
                    </Col>
                 
                 
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Location</label>
                        <Form.Control
                          input {...register("location",{required:true,maxLength:50})}
                          placeholder="Location"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Row></Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Consultant</label>
                        <Form.Control
                        input {...register("consultant",{required:true,maxLength:50})}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    );
};

export default AddProject;