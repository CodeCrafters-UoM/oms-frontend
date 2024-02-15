import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddItems() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className="m-2" variant="success" onClick={handleShow}>
        Add Items
      </Button>

      <Modal className='text-black' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Form.ControlTextarea1"
            >
              <Form.Label>Product description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Order Link</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-none'>
          <Button className=" mt-15 ps-5 pe-5 pt-2 pb-2 rounded-pill border position-absolute bottom-0 start-50 translate-middle-x" variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddItems