import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';


function ItemDetails() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
  <>
        <Button className="m-2" variant="success" onClick={handleShow}>
        Item Details
      </Button>

      <Modal className='text-black' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Body className='mt-0 pt-0 mb-0 pb-0'><p className='h5 text-center'>Cozy Cable Knit Sweater</p></Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group  controlId="validationCustom01" className="mb-3 ms-3 me-3">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="product name"
                defaultValue="F002"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom02" className="mb-3 ms-3 me-3 ">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
              type="text"
              placeholder="Product name"
              defaultValue="Cozy Cable Knit Sweater"
            
          />
          </Form.Group>
            <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlInput1">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
              type="text"
              placeholder="Product price"
              defaultValue="1450.00 LKR"
          />
            </Form.Group>
            <Form.Group
              className="mb-3 ms-3 me-3"
              controlId="Form.ControlTextarea1"
            >
              <Form.Label>Product description</Form.Label>
              <Form.Control as="textarea" rows={3}
              type="text"
              placeholder="Product description"
              defaultValue="Keep warm and stylish with this cozy cable knit 
              sweater, featuring a soft and comfortable material 
              perfect for chilly days"
               />
            </Form.Group>
            <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlInput1">
              <Form.Label>Order Link</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                defaultValue={"https//skndcjdmnkfckdeclddcdmkddjedkzl.com"}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Body>
          <Button type="submit" className=" mt-15 ps-5 pe-5 pt-2 pb-10 rounded-pill border position-absolute bottom-0 start-50 translate-middle-x" variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Body>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>

  
  </>
  )
}

export default ItemDetails