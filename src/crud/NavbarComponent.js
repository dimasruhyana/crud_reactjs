import React from 'react';
import { Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div className="container mt-2">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">CRUD REACT JS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Navbar>
      </div>
    )
}

export default NavbarComponent;
