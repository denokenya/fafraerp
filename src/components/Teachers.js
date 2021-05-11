
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';


const Teachers = () => {
   return (

    <div className ="container" >
    <Container fluid >

    <Form  >
    
    <Form.Row className="align-items-center">
    <Form.Group  as={Col} controlId="formGridEmail">
      <Form.Label   >Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group  as={Col} controlId="formGridName">
      <Form.Label   >Full Name</Form.Label>
      <Form.Control  placeholder="Full Name" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required />
    </Form.Group>
  </Form.Row>

  <Form.Group  controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" required />
  </Form.Group>

  <Form.Group  controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <ArrowRight color="royalblue"  />
    <Form.Control  placeholder="Apartment, studio, or floor" required  />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="DateOfJoining" >
      <Form.Label>Date Of Joining</Form.Label>
      <Form.Control type = "date" required disabled />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
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

