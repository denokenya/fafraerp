
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container  } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';



const Teachers = () => {
   return (


    <div className='mt-5'>
    <Container fluid = "sm" >

    <Form  >
    
    <h5 className = "text-center">Teachers Master File</h5>
    <Form.Row className="align-items-center"  >
    
    <Form.Group  as={Col} sm controlId="formGridEmail">
   
    
      <Form.Label   >Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required/>
      
    </Form.Group>
    
    <Form.Group  as={Col  } sm controlId="formGridName">
      <Form.Label ><i className ='fas fa-user' ></i>Full Name</Form.Label>
      
      <Form.Control   placeholder="Full Name" required />
    
    </Form.Group>

    <Form.Group as={Col} sm controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required />
    </Form.Group>
  </Form.Row>

  <Form.Group sm controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" required />
  </Form.Group>

  <Form.Group  controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <ArrowRight color="royalblue"  />
    <Form.Control  placeholder="Apartment, studio, or floor" required  />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} sm controlId="DateOfJoining" >
      <Form.Label>Date Of Joining</Form.Label>
      <Form.Control type = "date" required  />
    </Form.Group>

    <Form.Group as={Col}sm controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col}  sm controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className = "float-right" variant="outline-primary" block = {false} type="submit">
  <ArrowRight color="royalblue"  />
    Submit
  </Button>
</Form>

</Container>

</div>

   )
}

export default Teachers;

