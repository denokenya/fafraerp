import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer } from 'react-router-bootstrap';




const navbarhead = () => {

    return(
      
      

      <Navbar   sticky = "top"  bg="dark" variant="dark" collapseOnSelect  expand = 'sm' >

          
            <Navbar.Brand href="#home">School ERP</Navbar.Brand>
            <Navbar.Toggle arial-aria-controls = 'responsive-navbar' />
            <Navbar.Collapse id='responsive-navbar-nav'className="justify-content-left" >
          
              
              <Nav className = "mr-auto">
              
              <LinkContainer to = "/Students">
              <Nav.Link >Students</Nav.Link>
              </LinkContainer>
             
             <LinkContainer to = "/Teachers">
              <Nav.Link >Teachers</Nav.Link>
              </LinkContainer>
              
              <Nav.Link >Classes</Nav.Link>
              
                
              
              <Nav.Link  >Subjects</Nav.Link>
              
              <NavDropdown  title="Finance" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#feespayment">Fees Payment</NavDropdown.Item>
              <NavDropdown.Item href="#suppliers">Suppliers</NavDropdown.Item>
              <NavDropdown.Item href="#invoices">Invoices</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="reports">Reports</NavDropdown.Item>
            </NavDropdown>
              
              </Nav>

              </Navbar.Collapse>

          
        </Navbar>
    

    );
}

export default navbarhead;

