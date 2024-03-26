import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {toast} from 'react-hot-toast';

function ItemDetails({ item, onUpdate, onRemove, onClose }) {
  const [show, setShow] = useState(true);

  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/product/${item.productCode}`, updatedItem);
      onUpdate(updatedItem);
      handleClose();
      toast.success('Item updated successfully!');
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error('Error updating item!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'price' ? parseFloat(value) : value;
    setUpdatedItem(prevItem => ({
      ...prevItem,
      [name]: parsedValue
    }));
  };


  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:8000/product/${item.productCode}`);

      onRemove(item.productCode); 
      onClose();
      toast.success('Item removed successfully!')
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error('Error deleting item!')
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProductCode">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={item.productCode}
                style={{ backgroundColor: "#f2f2f2" }} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedItem.name} // Bind to updatedItem state
                onChange={handleInputChange} // Handle input change
                // defaultValue={item.name}
                style={{ backgroundColor: "#f2f2f2" }} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={updatedItem.price} // Bind to updatedItem state
                onChange={handleInputChange} // Handle input change
                // defaultValue={item.price}
                style={{ backgroundColor: "#f2f2f2" }} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={updatedItem.description} // Bind to updatedItem state
                onChange={handleInputChange} // Handle input change
                rows={3}
                // defaultValue={item.description}
                style={{ backgroundColor: "#f2f2f2" }} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formOrderLink">
              <Form.Label>Order Link</Form.Label>
              <Form.Control
                type="text"
                name="orderLink"
                value={updatedItem.orderLink} // Bind to updatedItem state
                onChange={handleInputChange} // Handle input change
                // defaultValue={item.orderLink}
                style={{ backgroundColor: "#f2f2f2" }} 
              />
            </Form.Group>
          </Form>

          <div className="mt-3 mb-2 ms-5">
          <Button variant="success" className=" ps-5 pe-5 pt-2 pb-10 rounded-pill border" onClick={handleRemove}>
            Remove
          </Button>
          <Button variant="success" className=" ms-5 ps-5 pe-5 pt-2 pb-10 rounded-pill border" onClick={handleUpdate}>
            Update
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetails;
