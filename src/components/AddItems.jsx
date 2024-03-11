import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function AddItems() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        productCode: '',
        productName: '',
        productPrice: '',
        productDescription: '',
        orderLink: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                const response = await axios.post('/product/get', formData);
                console.log(response.data); // Assuming the backend responds with some message
                handleClose(); // Close modal after successful submission
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error, maybe show a message to the user
            }
        }
        setValidated(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-success rounded-pill border btn-lg ps-5 pe-5 pt-1 pb-1"
                onClick={handleShow}
            >
                Add Item
            </button>
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
                                name="productCode"
                                value={formData.productCode}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02" className="mb-3 ms-3 me-3 ">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Product name"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlInput1">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Product price"
                                name="productPrice"
                                value={formData.productPrice}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 ms-3 me-3" controlId="Form.ControlTextarea1">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="productDescription"
                                value={formData.productDescription}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-5 ms-3 me-3" controlId="Form.ControlInput1">
                            <Form.Label>Order Link</Form.Label>
                            <Form.Control
                                type="text"
                                name="orderLink"
                                value={formData.orderLink}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit" className=" mb-2 ps-5 pe-5 pt-2 pb-10 rounded-pill border position-absolute bottom-0 start-50 translate-middle-x" variant="success">
                            Add
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddItems;
