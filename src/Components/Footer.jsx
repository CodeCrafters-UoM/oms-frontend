import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer_links_div">
                    <a href="#"><p>Terms and Conditions</p></a>
                    <a href="#"><p>Privacy Policy</p></a>
                    <a href="#"> <p>Cookies</p></a>
                </div>
                <div className="sb_footer_links_div">
                    <img src="logo.png" alt="Company-logo" />
                    <img src="play_store.png" alt="play store image" />
                </div>
                <div className="sb_footer_links_div">
                    <a href="#"><p>Quick Links</p></a>
                    <a href="#"><p>Contact Us</p></a>
                    <a href="#"><p>About Us</p></a>
                </div>
            </div>

        </div>
        <hr></hr>
        <div className="sb_footer-below">
            <div className="sb_footer_copyright">
                <p>
                    @{new Date().getFullYear()} | All rights Reserved | Web Design and Develop by Code Crafters
                    {/* @2023 | All rights Reserved | Web Design and Develop by Code Crafters</p> */}
                    </p>
            </div>
            </div>
    </div>
    </>
  )
}

export default Footer