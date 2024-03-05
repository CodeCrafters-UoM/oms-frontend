import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item() {
  return (
    <>
      <Card key={item.id} className="container-fluid col-lg-9 ms-15 p-0" style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Code : {item.code} <br />
              Price : {item.price} LKR
            </Card.Text>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
   
    </>
    
  );
}

export default Item