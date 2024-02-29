import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';



function AddItems() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

  return (
    <>
    <Button className="m-2" variant="success" onClick={handleShow}>
        Add Items
      </Button>

      <Modal className='text-black' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Body className='mt-0 pt-0 mb-0 pb-0'><p className='h5 text-center'>Product Details</p></Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="validationCustom01" className="mb-3 ms-3 me-3">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="product code"
                defaultValue="F001"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02" className="mb-3 ms-3 me-3 ">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Product name"
                defaultValue="Cozy Cable Knit Sweater"
              
            />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
                <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlInput1">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                  required
                  type="text"
                  placeholder="Product price"
                  defaultValue="1450.00 LKR"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3 ms-3 me-3"
                  controlId="Form.ControlTextarea1"
                >
                  <Form.Label>Product description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlInput1">
                <Form.Label>Order Link</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>
            <Modal.Body>

            </Modal.Body>
            <Button type="submit" className=" mt-15 ps-5 pe-5 pt-2 pb-10 rounded-pill border position-absolute bottom-0 start-50 translate-middle-x" variant="success" onClick={handleClose}>
              Add
            </Button>
          </Form>
        </Modal.Body>
          <Modal.Body>

          </Modal.Body>
      </Modal>
    </>
  )
}

export default AddItems