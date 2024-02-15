import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <Navbar expand="lg" 
      style={{ backgroundColor: '#BABBBA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
        <Navbar.Brand>
          <img
            src="logo.png"
            width="110"
            height="40"
            className="d-inline-block align-top"
            alt="Company-logo"
          />
        </Navbar.Brand>

        {/* toggle button for mobile navigation */}
        <button className='navbar-toggler' type="button" db-bs-toggle="collapse" db-bs-target="#main-nav" 
        aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>


        <Nav className="collapse navbar-collapse justify-content-center align-center" id="main-nav" style={{ display: 'flex' }}
        onMouseOver={(e) => e.target.style.color = 'green'} onMouseOut={(e) => e.target.style.color = 'initial'}>
          <div className="navbar-nav d-md">
            <Nav.Link href="#home" style={{ color: 'black', marginLeft: '40px' }}>Home</Nav.Link>
            <Nav.Link href="" style={{ color: 'black', marginLeft: '40px' }}>Orders</Nav.Link>
            <Nav.Link href="" style={{ color: 'black', marginLeft: '40px' }}>Order Links</Nav.Link>
            <Nav.Link href="" style={{ color: 'black', marginLeft: '40px' }}>Reports</Nav.Link>
            <Nav.Link href="" style={{ color: 'black', marginLeft: '40px' }}>Contact Us</Nav.Link>
          </div>

        </Nav>
        
        <Nav style={{ display: 'flex', alignItems: 'center' }}>
          <IoMdNotificationsOutline className="icon" />
          <BsPerson className="icon" />
          <div id="mobile" style={{ display:'none' }}>
            {isOpen ? (
              <IoCloseSharp className="icon" onClick={toggleMenu} />
            ) : (
              <HiMiniBars3 className="icon" onClick={toggleMenu} />
            )}
          </div>

        </Nav>
      </Navbar>
  )
}

export default HeaderSection
