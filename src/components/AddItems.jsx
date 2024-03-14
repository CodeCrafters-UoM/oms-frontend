import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import axios from "axios";

function AddItems({ updateItemList }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    productCode: "",
    productName: "",
    productPrice: "",
    productDescription: "",
    orderLink: "",
  });
  console.log(formData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // const product={
      //     productCode: formData.productCode,
      //     name: formData.productName,
      //     price: formData.productPrice,
      //     description: formData.productDescription,
      //     sellerId: "a698fbbc-8f29-4f03-9114-8e6b44fef047",
      // }
      const product = {
        productCode: formData.productCode,
        name: formData.productName,
        description: formData.productDescription,
        price: parseFloat(formData.productPrice),
        sellerId: "a698fbbc-8f29-4f03-9114-8e6b44fef047",
      };
      console.log(product);

      try {
        const response = await axios.post(
          "http://localhost:8000/product/addProduct",
          product
        );
        console.log(response.data);
        updateItemList((prevItemList) => [...prevItemList, response.data]);
        handleClose();
      } catch (error) {
        console.error("Error submitting form:", error);
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
        className="btn btn-success rounded-pill border btn-md"
        onClick={handleShow}
      >
        +
      </button>
      <Modal className="text-black" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body className="mt-0 pt-0 mb-0 pb-0">
            <p className="h5 text-center">Product Details</p>
          </Modal.Body>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              as={Col}
              controlId="validationCustom01"
              className="mb-3 ms-3 me-3"
            >
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="product code"
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                style={{ backgroundColor: "#f2f2f2" }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="validationCustom02"
              className="mb-3 ms-3 me-3 "
            >
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                style={{ backgroundColor: "#f2f2f2" }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-3 me-3"
              controlId="Form.ControlInput1"
            >
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Product price"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                style={{ backgroundColor: "#f2f2f2" }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 ms-3 me-3"
              controlId="Form.ControlTextarea1"
            >
              <Form.Label>Product description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                style={{ backgroundColor: "#f2f2f2" }}
              />
            </Form.Group>
            <Form.Group
              className="mb-5 ms-3 me-3"
              controlId="Form.ControlInput1"
            >
              <Form.Label>Order Link</Form.Label>
              <Form.Control
                type="text"
                name="orderLink"
                value={formData.orderLink}
                onChange={handleChange}
                style={{ backgroundColor: "#f2f2f2" }}
              />
            </Form.Group>
            <Button
              type="submit"
              className=" mb-2 ps-5 pe-5 pt-2 pb-10 rounded-pill border position-absolute bottom-0 start-50 translate-middle-x"
              variant="success"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddItems;
