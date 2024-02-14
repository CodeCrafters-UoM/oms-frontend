import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  return (
    <>
    <div className="row mt-5">
        <div className="col-5">
    <Card className="container-fluid col-lg-9 ms-15 p-0" style={{ border:'none', borderBottom: '1px solid green',borderRadius: '0' }}>
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
    </div>

    <div className="col-2"></div>
    
    <div className="col">
    <Card className="container-fluid col-lg-9 p-0 " style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0'}}>
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
    </div>
   
    <div className="row mt-2">
        <div className="col-5">
    <Card className="container-fluid col-lg-9 ms-15 p-0" style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0' }}>
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
    </div>

    <div className="col-2">
    <button type="button" class="btn btn-success rounded-pill border btn-lg ps-5  pe-5 pt-1 pb-1">Add Item</button>
    </div>

    <div className="col-5">
    <Card className="container-fluid col-lg-9 p-0" style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0'}}>
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
    </div>

    <div className="row mt-2">
        <div className="col-5">
    <Card className="container-fluid col-lg-9 ms-15 p-0" style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0' }}>
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
    </div>

    <div className="col-2">
    </div>
    
    <div className="col-5">
    <Card className="container-fluid col-lg-9 p-0" style={{ border:'none',borderBottom: '1px solid green',borderRadius: '0'}}>
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
    </div>
    </>
    
  );
}

export default Product