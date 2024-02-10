import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

export default function HeaderSection() {
  return (
    <>
     <Navbar expand="lg" style={{ backgroundColor: '#BABBBA',display: 'flex', padding: '5px' }}>
      <Navbar.Brand style={{ marginRight: '300px'}}>
          <img
              src="logo.png"
              width="110"
              height="40"
              className="d-inline-block align-top"
              alt="Company-logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar>
          <Nav >
            <Nav.Link href="#home" style={{ color: 'green',marginRight: '40px'}}>Home</Nav.Link>
            <Nav.Link href="" style={{ color: 'black',marginRight: '40px'  }}>Orders</Nav.Link>
            <Nav.Link href="" style={{ color: 'black',marginRight: '40px' }}>Order Links</Nav.Link>
            <Nav.Link href="" style={{ color: 'black' ,marginRight: '40px'}}>Reports</Nav.Link>
            <Nav.Link href="" style={{ color: 'black' ,marginRight: '40px'}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar.Brand style={{ marginLeft: '370px'}}>
        <IoMdNotificationsOutline className="icon" style={{ marginLeft: '20px'}}/>{" | "}
            <BsPerson className="icon"  />
        </Navbar.Brand>
        </Navbar.Collapse>
    </Navbar>
    </>
    
  )
}
