import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // const toggleMenu = () => {
    //     const mainNav = document.getElementById('multiCollapseExample1');
    //     mainNav.style.display = (mainNav.style.display === 'none') ? 'block' : 'none';
        
    // }
  return (
    <>
    <div className="navbar navbar-expand-md fixed-top" style={{ backgroundColor: '#BABBBA'}}>
        <div className="container-fluid">
            <a href="#intro" class="navbar-brand">
                <img src="logo.png" alt="logo" width="110" height="40" />
            </a>

            <button onClick={toggleMenu} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" 
            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation" >
                {isMenuOpen ? <IoCloseSharp/> :<span className="navbar-toggler-icon"></span>}
            </button>

            <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav"
             onMouseOver={(e) => e.target.style.color = 'green'} onMouseOut={(e) => e.target.style.color = 'initial'}>
                <ul className="navbar-nav ">
                    <li className='nav-item pe-5' style={{color:'black',fontSize:'17px',fontWeight:'500'}}>
                        <a href="#home" className="nav-link h5">Home</a>
                    </li>
                    <li className='nav-item pe-5' style={{color:'black',fontSize:'17px',fontWeight:'500'}}>
                        <a href="#orders" className="nav-link">Orders</a>
                    </li>
                    <li className='nav-item pe-5' style={{color:'black',fontSize:'17px',fontWeight:'500'}}>
                        <a href="#order-links" className="nav-link">Order Links</a>
                    </li>
                    <li className='nav-item pe-5' style={{color:'black',fontSize:'17px',fontWeight:'500'}}>
                        <a href="#reports" className="nav-link">Reports</a>
                    </li>
                    <li className='nav-item pe-5' style={{color:'black',fontSize:'17px',fontWeight:'500'}}>
                        <a href="#contact" className="nav-link">Contact Us</a>
                    </li>
            </ul>
                   
                    <IoMdNotificationsOutline className="icon " style={{marginRight:'10px',fontSize:'25px'}} />{"|"}
                    <BsPerson className="icon" style={{fontSize:'25px',marginLeft:'10px'}} />
             
                    
            </div>
          
            

        </div>
    </div>

            <div className="row justify-content-end me-1">
            <div className="col-auto">
            <div className={`collapse multi-collapse ${isMenuOpen ? 'show' : ''}`} id="multiCollapse">
            <div className="card card-body " style={{width:'200px',marginTop:'50px'}}>
            <ul style={{listStyle:'none',padding:'0'}}>
                <li><a className="text-decoration-none mt-5 text-black" href='#Home'>Home</a></li>
                <li><a className="text-decoration-none mt-5 text-black" href='#Orders'>Orders</a></li>
                <li><a className="text-decoration-none mt-5 text-black" href='#Order Links'>Order Links</a></li>
                <li><a className="text-decoration-none mt-5 text-black" href='#Reports'>Reports</a></li>
                <li><a className="text-decoration-none mt-5 text-black" href='#Contact Us'>Contact Us</a></li>
            </ul>
            </div>
            </div>
            </div>
            </div>

    </>

  )
}

export default Header