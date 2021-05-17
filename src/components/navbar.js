import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer } from 'react-router-bootstrap';




const navbarhead = () => {

    return(
      
      

      <Navbar   sticky = "top"  bg="dark" variant="dark" collapseOnSelect  expand = 'sm' >

          <Container>
            <Navbar.Brand href="#home" >School ERP</Navbar.Brand>
            <Navbar.Toggle arial-aria-controls = 'responsive-navbar' />
            <Navbar.Collapse id='responsive-navbar-nav'className="justify-content-left" >
          
              
              <Nav className = "ml-auto">
              
              <LinkContainer to = "/Students">
              <Nav.Link ><i className ='fas fa-users' ></i>Students</Nav.Link>
              </LinkContainer>
             
             <LinkContainer to = "/Teachers">
              <Nav.Link ><i className ='fas fa-user' ></i>Teachers</Nav.Link>
              </LinkContainer>
              
              <Nav.Link ><i className ='fas fa-th-list' ></i>Classes</Nav.Link>
              
                
              
              <Nav.Link  ><i className ='fas fa-th' ></i>Subjects</Nav.Link>
              
              <NavDropdown menuAlign="left" title="Finance" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#feespayment">Fees Payment</NavDropdown.Item>
              <NavDropdown.Item href="#suppliers">Suppliers</NavDropdown.Item>
              <NavDropdown.Item href="#invoices">Invoices</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="reports">Reports</NavDropdown.Item>
            </NavDropdown>
              
              </Nav>

              </Navbar.Collapse>

              </Container>
        </Navbar>
    

    );
}

export default navbarhead;

