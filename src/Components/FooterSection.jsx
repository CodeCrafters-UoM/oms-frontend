import React from 'react';
import Card from 'react-bootstrap/Card';

function FooterSection() {
  return (
    <Card style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', color: 'black'}}>
      <Card.Body style={{ backgroundColor: '#BABBBA'}}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Text >
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </Card.Text>
          </div>
          <div >
            <img
              src="logo.png"
              width="110"
              height="40"
              alt="Company-logo"
              style={{ marginRight: '40px' }}
            />
            <img
              src="play_store.png"
              width="120"
              height="auto"
              alt="play store image"
            />
          </div>
          <div >
            <Card.Text>
              <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'right'}}>
                <li>Quick Links</li>
                <li>Contact Us</li>
                <li>About Us</li>
              </ul>
            </Card.Text>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted text-center" style={{ backgroundColor: '#919391' }}>
        @2023 | All rights Reserved | Web Design and Develop by Code Crafters
      </Card.Footer>
    </Card>
  );
}

export default FooterSection;
