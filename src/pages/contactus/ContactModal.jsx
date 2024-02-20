import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Button  className = "align-items-center btn btn-success rounded-5 my-2 mx-3" type="submit" 
        onClick={handleShow} variant="success" size="lg" >  
             Submit
        </Button>{' '}


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
               <h5 class="modal-title text-center" id="ModalLabel"> Are you sure you want to send <br />
               <span style={{color : "green"}}> click on send button </span> </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success"> Send </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal ;