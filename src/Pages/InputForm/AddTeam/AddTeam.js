import React, { useEffect, useState } from 'react';
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

  // Team Adding Section 
const AddTeam = () => {
  const [department ,setDepartment] = useState([{'name':'', 'id':''}])
  const [img ,setImage] = useState([])
  const { register, handleSubmit,reset,formState,formState:{errors}, } = useForm();

 useEffect( () => {
  const fetchData = async () =>{
    const res = await fetch ('http://localhost:8000/api/departments')
    const newData = await  res.json();
    setDepartment(newData);
    // console.log(newData);
  };
  fetchData();

 }, [])


  // image loading 

  useEffect( () => {
    const fetchInfo = async () =>{
      const result  = await axios.get ('http://localhost:8000/api/img')
      // const newData = await res.json()
      setImage(result.data.reverse());
      // console.log(newData)

    };
    fetchInfo();


  }
    ,[])

const onSubmit = async (data) => {
    
    axios.post('http://localhost:8000/api/team',data)
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
                <Card.Title as="h4">Add  Team </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)} method="POST" >
                  <Row>
                  
                    <Col className="px-1" md="7">
                      <Form.Group>
                        <label>Name :</label>
                        <Form.Control
                        input {...register("name",{required:true,maxLength:20})}
                          placeholder="Your Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="5">
                      <Form.Group>
                        <label>Department</label>
                        <Form.Select {...register("department")}> 
                          

                          <option> select One</option>
                          {
                            department.map(department =>
                              
                              (

                                <option value={department.name}
                                key={department.id
                                }
                                >
                                  {department.name}
                                </option>
                              ))
                          }

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
                             input {...register("linkdin",{required:true,maxLength:50})}
                            placeholder="Linkdin ID"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Facebook ID:</label>
                          <Form.Control
                              input {...register("facebook",{required:true,maxLength:50})}
                            placeholder="Facebook ID:"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      
                    </Row>
                  
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                
                        <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Image URL </Form.Label>
          
        <Form.Control
                              input {...register("img",{required:true,maxLength:50})}
                            placeholder="Image URL:"
                            type="text"
                          ></Form.Control>
      
        <br/>
        <br/>
        
       {
        img.map(imgs=>
        <div>
          <img src={imgs.name.path}/> 
        </div>)
       
}
       
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
       
        </Row>
      </Container>
    </>
    );
};

export default AddTeam;