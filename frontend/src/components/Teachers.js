
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col,
  
  Card,
  Accordion
    } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Teachers = () => {
   return (

    <div  className="container mt-5 bg-dark  text-white border border-success">
        

       <Card border= "success" className ="bg-dark mt-5">
        <Card.Header as = "h5" className = "bg-success " >
          <strong>Basic Information</strong>
        
        
        </Card.Header>
            <Card.Body>
              
          <Form  >
              
              <Form.Row className="align-items-center"  >
              
              <Form.Group  as={Col} sm controlId="employeeID">

                <Form.Label className = "font-weight-bold"><strong>Employee ID</strong></Form.Label>
                <Form.Control className ="text-capitalize bg-success text-dark" type="text" placeholder = "Employee ID"  required/>
                
              </Form.Group>
              
              <Form.Group  as={Col  } sm controlId="role">
                <Form.Label > Role</Form.Label>
                <Form.Control className = "border border-success"  as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Accountant</option>
                  <option>Librarian</option>
                  <option>Receptionist</option>
                  <option>Super Admin</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm controlId="designation">
                <Form.Label>Designation</Form.Label>
                <Form.Control className = "border border-success" as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Faculty</option>
                  <option>Accountant</option>
                  <option>Admin</option>
                  <option>Receptionist</option>
                  <option>Principal</option>
                  <option>Director</option>
                  <option>Technical Head</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} sm controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control className = "border border-success" as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Academic</option>
                  <option>Library</option>
                  <option>Sports</option>
                  <option>Science</option>
                  <option>Commerce</option>
                  <option>Arts</option>
                  <option>Exam</option>
                  <option>Admin</option>
                  <option>Finance</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className="align-items-center"  >
              
              <Form.Group  as={Col  } sm controlId="firstName">
                <Form.Label> First Name</Form.Label>
                <Form.Control  className ="text-capitalize  border border-success" type="text" placeholder = "First Name"  required/>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="lastName">
                <Form.Label> Last Name</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Last Name"  required/>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="fathertName">
                <Form.Label> Father Name</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Father Name"  required/>
              
              </Form.Group>
              <Form.Group  as={Col} sm controlId="motherName">

                <Form.Label>Mother Name</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Mother Name"  required/>
                
              </Form.Group>
            </Form.Row>

            <Form.Row className="align-items-center"  >
              
              <Form.Group  as={Col  } sm controlId="email">
                <Form.Label> Email</Form.Label>
                <Form.Control className = "border border-success" type="EmailField" placeholder = "Email"  required/>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="gender">
                <Form.Label> Gender</Form.Label>
                <Form.Control className = "border border-success" as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="dateOfBirth">
                <Form.Label> Date Of Birth</Form.Label>
                <Form.Control className = "border border-success" type = "date" required  />
              </Form.Group>

              
              <Form.Group  as={Col} sm controlId="dateOfJoining">

                <Form.Label>Date Of Joining</Form.Label>
                <Form.Control className = "border border-success"  type="date"  required/>
                
              </Form.Group>
            </Form.Row>


            <Form.Row className="align-items-center"  >
              
              <Form.Group  as={Col  } sm controlId="phone">
                <Form.Label> Phone</Form.Label>
                <Form.Control className = "border border-success" placeholder = "Phone"  required/>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="emergencyContactNumber">
                <Form.Label> Emergency Contact Number</Form.Label>
                <Form.Control className = "border border-success" placeholder = "Emergency Contact Number"  required/>
              
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="maritalStatus">
                <Form.Label> Marital Status</Form.Label>
                <Form.Control className = "border border-success" as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Widowed</option>
                  <option>Separated</option>
                  <option>Not Specified</option>
                </Form.Control>
              </Form.Group>

              <Form.Group  as={Col  } sm controlId="photo">
                <Form.Label> Photo</Form.Label>
                <Form.Control className = "border border-success" type = "ImageField" required  />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col  } sm controlId="currentAddress">
                <Form.Label>Current Address</Form.Label>
                <Form.Control  className ="text-capitalize border border-success"  placeholder="1234 Main St" required />
              </Form.Group>

              <Form.Group as={Col  } sm controlId="permanentAddress">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control className ="text-capitalize border border-success"  placeholder="Apartment, studio, or floor" required  />
              </Form.Group>
            </Form.Row> 

            <Form.Row>
              <Form.Group  as={Col  } sm controlId="qualification">
                  <Form.Label> Qualification</Form.Label>
                  <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Qualification"  required/>
                
                </Form.Group>

                <Form.Group  as={Col  } sm controlId="workExperience">
                  <Form.Label> Work Experience</Form.Label>
                  <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Work Experience"  required/>
                
                </Form.Group>

                <Form.Group  as={Col  } sm controlId="note">
                  <Form.Label> Note </Form.Label>
                  <Form.Control className ="text-capitalize border border-success"  type="text" placeholder = "Note"  required/>
                
                </Form.Group>
              
            </Form.Row>

            
        </Form>

          </Card.Body>
      </Card> 


          <Accordion  className ="bg-dark">

           <Card border= "success" className ="bg-dark mt-5 ">
            <Card.Header as = "h5" >
              <Accordion.Toggle className= "float-left " as={Button} variant="success" eventKey="0">
               + MORE DETAILS
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Form  >
              
              <Card border= "success" className ="bg-dark mt-5">
                <Card.Header as = "h5" className = "bg-success">Payroll</Card.Header>
                <Card.Body>
                <Form.Row className="align-items-center"  >
              
              <Form.Group  as={Col} sm controlId="epfNo">

                <Form.Label>EPF No</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "EPF No"  />
                
              </Form.Group>

              <Form.Group  as={Col} sm controlId="Basic Salary">

                <Form.Label>Basic Salary</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Basic Salary"  />
                
              </Form.Group>
          
              <Form.Group  as={Col  } sm controlId="contract">
                <Form.Label> Contract</Form.Label>
                <Form.Control className ="text-capitalize border border-success" as="select" defaultValue="Select...">
                  <option>Select...</option>
                  <option>Permanent</option>
                  <option>Probation</option>
                </Form.Control>
              </Form.Group>

        </Form.Row>

        <Form.Row className="align-items-center"  >

              <Form.Group  as={Col} sm controlId="workShift">

                <Form.Label>Work Shift</Form.Label>
                <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Work Shift"  />

              </Form.Group>
              <Form.Group  as={Col} sm controlId="location">

                  <Form.Label>Location</Form.Label>
                  <Form.Control className ="text-capitalize border border-success" type="text" placeholder = "Location"  />
                  
              </Form.Group>

        </Form.Row>
                  </Card.Body>  
              </Card>
             
              <Card border= "success" className ="bg-dark mt-5">
                <Card.Header as = "h5" className = "bg-success"> 
                  Leaves
                </Card.Header>
                <Card.Body>

                  <Form.Row className="align-items-center"  >
                      
                      <Form.Group  as={Col  } sm controlId="medicalLeave">
                        <Form.Label> Medical Leave</Form.Label>
                        <Form.Control   placeholder = "Number of leaves"  required/>
                      
                      </Form.Group>

                      <Form.Group  as={Col  } sm controlId="casualLeave">
                        <Form.Label> Casual Leave</Form.Label>
                        <Form.Control  placeholder = "Number of leaves"  required/>
                      
                      </Form.Group>

                      <Form.Group  as={Col  } sm controlId="maternityLeave">
                        <Form.Label> Maternity Leave</Form.Label>
                        <Form.Control  placeholder = "Number of leaves"  required/>
                      
                      </Form.Group>

                    </Form.Row>

                </Card.Body>

              </Card>
            
              <Card border= "success" className ="bg-dark mt-5">
                  <Card.Header as = "h5" className = "bg-success">
                    Bank Account Details
                  </Card.Header>
                  <Card.Body>
        
                      <Form.Row className="align-items-center"  >
                        
                        <Form.Group  as={Col  } sm controlId="accountTitle">
                          <Form.Label> Account Title</Form.Label>
                          <Form.Control className ="text-capitalize border border-success" placeholder = "Account Title"  required/>
                        
                        </Form.Group>

                        <Form.Group  as={Col  } sm controlId="bankAccountNumber">
                          <Form.Label> Bank Account Number</Form.Label>
                          <Form.Control className ="text-capitalize border border-success" placeholder = "Bank Account Number"  required/>
                        
                        </Form.Group>

                        <Form.Group  as={Col  } sm controlId="bankName">
                          <Form.Label> Bank Name</Form.Label>
                          <Form.Control className ="text-capitalize border border-success" placeholder = "Bank Name"  required/>
                        
                        </Form.Group>
                        <Form.Group  as={Col  } sm controlId="ifscCode">

                          <Form.Label> IFSC Code</Form.Label>
                          <Form.Control className ="text-capitalize border border-success" placeholder = "IFSC Code"  required/>

                        </Form.Group>

                        <Form.Group  as={Col  } sm controlId="bankBranchName">

                          <Form.Label> Bank Branch Name</Form.Label>
                          <Form.Control className ="text-capitalize border border-success" sm placeholder = "Bank Branch Name"  required/>

                       </Form.Group>    

                        </Form.Row>
 
                </Card.Body>
              </Card>

              <Card border= "success" className ="bg-dark mt-5">

                <Card.Header as = "h5" className = "bg-success">
                Social Media Link
                </Card.Header>
                <Card.Body>

              <Form.Row className="align-items-center"  >

                  <Form.Group  as={Col  } sm controlId="facebookUrl">

                    <Form.Label> Facebook URL</Form.Label>
                    <Form.Control className ="text-capitalize border border-success" placeholder = "Facebook URL"  required/>

                  </Form.Group>

                  <Form.Group  as={Col  } sm controlId="twitterUrl">

                    <Form.Label>Twitter URL</Form.Label>
                    <Form.Control className ="text-capitalize border border-success" placeholder = "TwitterURL"  required/>

                  </Form.Group>    

              </Form.Row>

              <Form.Row className="align-items-center"  >

                  <Form.Group  as={Col  } sm controlId="linkedinUrl">

                    <Form.Label> Linkedin URL</Form.Label>
                    <Form.Control className ="text-capitalize border border-success" placeholder = "Linkedin URL"  required/>

                  </Form.Group>

                  <Form.Group  as={Col  } sm controlId="instagramUrl">

                    <Form.Label> Instagram URL</Form.Label>
                    <Form.Control className ="text-capitalize border border-success" placeholder = "Instagram URL"  required/>

                  </Form.Group>    

              </Form.Row>
                

                </Card.Body>
              </Card>
  
        </Form>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
            
          </Accordion>
    <Card border= "success" className ="bg-dark">
      
      <Card.Body>
        <Card.Footer>
          <Button sm className = "float-sm-right mt-3 d-block "  variant="success" block = {false} type="submit">
              Save and exit
          </Button>
          
          <Button sm className = "float-sm-right mt-3 mr-2  d-block "  variant="success" block = {false} type="submit">
          Save and Create New
          </Button>
          <Button sm className = "float-sm-right mt-3 mr-2 "  variant="success" block = {false} type="submit">
          Save and  Print
          </Button>
          </Card.Footer>
          </Card.Body>

      </Card> 
             
   

</div>

   )
}

export default Teachers;

