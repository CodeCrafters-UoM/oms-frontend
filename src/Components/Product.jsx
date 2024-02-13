import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  return (
    <Card style={{ width: '25rem',border: 'none', borderBottom: '1px solid green',borderRadius: '0'  }}>
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
  );
}

export default Product