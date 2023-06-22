import React from 'react';
import axios from 'axios';
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

const AddDepartment = () => {
  const { register, handleSubmit,reset,formState,formState:{errors}, } = useForm();


  const onSubmit = async (data) => {
    // console.log(data)
   


    axios.post('http://localhost:8000/api/departments',data)
    .then(res => {
      console.log(res)
      if(res.data.insertedId){
        alert("Add Department Successfully")
        reset()
      }
    })
   
};
    return (
        <>
        <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add  Department </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)} method="POST"  >
                 
                    
                  <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Name:</label>
                          <Form.Control
                             input {...register("name",{required:true,maxLength:50})}
                            placeholder="Please Enter Your Name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Description:</label>
                          <Form.Control
                              input {...register("description",{required:true,maxLength:50})}
                            placeholder="Description:"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      
                    </Row>
                  
                  
                  {/* <Row>
                    <Col md="12">
                      <Form.Group>
                
                        <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Image URL </Form.Label>
          
        <Form.Control
                              input {...register("img",{required:true,maxLength:20})}
                            placeholder="Image URL:"
                            type="text"
                          ></Form.Control>
      
      </Form.Group>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {errors.exampleRequired && <span>This field is required</span>}
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Save Department
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
          
        </Container>
      </>
    );
};

export default AddDepartment;