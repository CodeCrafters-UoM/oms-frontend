import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemDetails({ item, onUpdate, onRemove, onClose }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleUpdate = () => {
    // Implement update functionality here
    // You can pass the updated item back to the parent component using onUpdate callback
    onUpdate(item);
    handleClose();
  };

  const handleRemove = () => {
    // Implement remove functionality here
    // You can pass the item ID back to the parent component using onRemove callback
    onRemove(item.id);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductCode">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={item.productCode}
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={item.productName}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={item.productPrice}
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                readOnly
                rows={3}
                defaultValue={item.productDescription}
              />
            </Form.Group>
            <Form.Group controlId="formOrderLink">
              <Form.Label>Order Link</Form.Label>
              <Form.Control
                type="text"
                readOnly
                defaultValue={item.orderLink}
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
