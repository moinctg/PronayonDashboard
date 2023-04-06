import React, { useState } from 'react';
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
  } from "react-bootstrap";
import axios from 'axios';

const AddTeam = () => {
  const { register, handleSubmit,reset,formState,formState:{errors}, } = useForm();
  const [picture,setPicture] = useState(null);
  const onChangePicture= (e)=>{
    setPicture(URL.createObjectURL(e.target.files[0]));
  }
  // const onSubmit = data =>{
  //   axios.post('http://localhost:8000/api/team', data)
  //   .then((res)=>{
  //     console.log(res)
  //     if (res.data.insertedId) {
  //       alert('added successfully');
  //       reset();
  //   }

     
  //   })
    
  // }
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("img", data.file[0]);

    const res = await fetch("http://localhost:8000/api/team", {
        method: "POST",
        body: formData,
    }).then((res) => res.json());
    console.log(res);
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    setPicture(null);
};

  
    return (
        <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add  Team </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)} method="POST" encType="multipart/form-data">
                  <Row>
                  
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Name :</label>
                        <Form.Control
                        input {...register("name",{required:true,maxLength:20})}
                          placeholder="Your Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Department</label>
                        <Form.Select {...register("department")}> 
                          

                          <option> select One</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Structure Engineer">Structure </option>
                          <option value="Engineer">Electrical </option>
                          <option value="Engineer">Interiar</option>
                          <option value="Site Engineer">Admin & HR </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  <Row>
                    

                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                         Designation:
                        </label>
                       
                          <Form.Select {...register("designation")}> 
                          

                          <option> select One</option>
                          <option value="Architect">Architect</option>
                          <option value="Asst.Architect">Asst.Architect</option>
                          <option value="Engineer">Engineer</option>
                          <option value="Engineer">Asst.Engineer</option>
                          <option value="Site Engineer">Site Engineer </option>
                        </Form.Select>
                      
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Linkdin ID:</label>
                          <Form.Control
                             input {...register("linkdin",{required:true,maxLength:20})}
                            placeholder="Linkdin ID"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Facebook ID:</label>
                          <Form.Control
                              input {...register("facebook",{required:true,maxLength:20})}
                            placeholder="Facebook ID:"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      
                    </Row>
                  
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Image </label>
                        <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Select your Image</Form.Label>
        <Form.Control type="file" {...register("img")} size="lg"    onChange={onChangePicture} />
      
        <br/>
        <br/>
        <img className='image' src={picture && picture} alt=""/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Form.Group>
                      </Form.Group>
                    </Col>
                  </Row>
                  {errors.exampleRequired && <span>This field is required</span>}
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Save Team
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="4">
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
          </Col> */}
        </Row>
      </Container>
    </>
    );
};

export default AddTeam;