import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch } from "react-icons/fi";


function Product() {
  return (
    <>
      <div style={{position:'fixed',marginLeft:'650px',marginTop:'550px'}}>
    <button type="button" class="btn btn-success rounded-pill border btn-lg ps-5  pe-5 pt-1 pb-1">Add Item</button>
    </div>

    <div className="container">
    <div className="row border-bottom border-muted mt-5">

        <div className="col-lg-6">
            <h6 className="display-6 fw-bold"> Product List</h6>
    </div>
    
      <div className="col-lg-6 ">
      <div className=" input-group ">
        <div className="input-group-prepend">
        <input type="text" class="form-control bg-secondary" id="inlineFormInputGroupUsername2" placeholder="Search"/>
        </div>
        <div className="input-group-text bg-secondary">
        <FiSearch id="search-icon"/>
        </div>
      </div>
      </div>
     
    </div>
    </div>
   
    <div className="row mt-4">
        <div className="col-lg-6">
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

  

    <div className="col-lg-6">
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
        <div className="col-lg-6">
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

    
    <div className="col-lg-6">
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
        <div className="col-lg-6">
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

    
    <div className="col-lg-6">
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
        <div className="col-lg-6">
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

    
    <div className="col-lg-6">
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