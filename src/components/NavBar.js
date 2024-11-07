import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-5 px-5">
          <Nav.Link className='me-4' href='/'>Home</Nav.Link>
          <Nav.Link className='me-4' href="/element">Element Transfer</Nav.Link>
          <Nav.Link className='me-4' href="/parentchild">Nested List</Nav.Link>
          <Nav.Link className='me-4' href='/scroll'>Infinite Scroll</Nav.Link>
          <Nav.Link className='me-4' href='/game'>Box Game</Nav.Link>
          <Nav.Link className='me-4' href='/box'>Box Split</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}
