import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const OrderListCusDetails = () => {

    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShowDetails(false);
    const handleShowCusDetails = () => setShowDetails(true);



  return (
    <>
    <Button variant="outline-success" onClick={handleShowCusDetails}>
      More Details
    </Button>

    <Modal
      show={showDetails}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
      </Modal.Header>


      <Modal.Body>
        <div>
            hi
        </div>
      </Modal.Body>
 
    </Modal>
  </>

  )
}

export default OrderListCusDetails