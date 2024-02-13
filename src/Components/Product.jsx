import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  return (
    <>
    <div className="row">
    <Card className="container-fluid col-lg-5 " style={{border: 'none', borderBottom: '1px solid green',borderRadius: '0',marginleft:'15px',padding:'0'  }}>
      <Card.Body>
        <Card.Title>Cozy Cable Knit Sweater</Card.Title>
        <Card.Text>
        Code : F002{<br/>}Price : 1450.00 LKR
        </Card.Text>
        <Card.Text>
        Keep warm and stylish with this cozy cable knit sweater, featuring a soft and comfortable material git 
        perfect for chilly days.

        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className="container-fluid col-lg-5" style={{border: 'none', borderBottom: '1px solid green',borderRadius: '0',padding:'0'   }}>
      <Card.Body>
        <Card.Title>Cozy Cable Knit Sweater</Card.Title>
        <Card.Text>
        Code : F002{<br/>}Price : 1450.00 LKR
        </Card.Text>
        <Card.Text>
        Keep warm and stylish with this cozy cable knit sweater, featuring a soft and comfortable material 
        perfect for chilly days.

        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
   
    </>
    
  );
}

export default Product