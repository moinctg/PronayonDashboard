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

const AddImage = () => {
  const { register, handleSubmit,reset,formState,formState:{errors}, } = useForm();
  const [picture,setPicture] = useState(null);
  const onChangePicture= (e)=>{
    setPicture(e.target.files[0])
    // setPicture(URL.createObjectURL(e.target.files[0]));
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
    formData.append("img", picture);
    formData.append("name",data.name);
    formData.append("description",data.description);


    // const res = await fetch("http://localhost:8000/api/img",{
    //     method: "POST",
    //     body: formData,
    //     headers:{
    //        "Content-Type": "multipart/form-data" },
        
    // }).then((res) => res.json());
    // console.log(res);

    axios.post('http://localhost:8000/api/img',formData)
    .then((res) => {console.log(res)

    })
    console.log(data)
    // if (res.data.insertedId) {
    //   //       alert('added successfully');
    //   //       reset();
    // }
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
                <Form onSubmit={handleSubmit(onSubmit)} method="POST">
                  <Row>
                  
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Name :</label>
                        <Form.Control
                        input {...register("name",{required:true,maxLength:20})}
                          placeholder="Your Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Name :</label>
                        <Form.Control
                        input {...register("description",{required:true,maxLength:20})}
                          placeholder="Your description"
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
       { picture &&  (<img className='image' src={ URL.createObjectURL(picture)} alt=""/>)}
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
                    Save Image
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

export default AddImage;