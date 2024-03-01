import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OrderListModal = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="outline-success" onClick={handleShow}> more details </Button>{' '}
      {/* 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Container>
          <Row>
            <Modal.Header closeButton>
            </Modal.Header>
          </Row>
          
          <Row>

          
            <Col sm>
              <Modal.Header>
              <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a antea. : a great body of salt water that covers much of the earth. broadly :
             the waters of the earth as distinguished from the
             land and air. b. : a body of salt water of second rank more or less landlocked.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
              </Modal.Header>
            </Col>

          
            <Col sm>
              <Modal.Body>
                I will not close if you click outside me. Do not even try to press
                escape key.
              </Modal.Body>
            </Col>

      
            <Col sm>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Col>
          </Row>
        </Container>

      </Modal> */}

      <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Container>

          <Row>
            <Modal.Header closeButton>
            </Modal.Header>
          </Row>

          <Row>

            {/* Order deatils */}
            <Col sm>
              <Modal.Header id="example-custom-modal-styling-title">
                <div className="ModalHederBack mx-2">
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      posuere erat a antea. : a great body of salt water that covers much of the earth. broadly :
                      the waters of the earth as distinguished from the
                      land and air..{' '}
                    </p>
                  </blockquote>
                </div>
              </Modal.Header>
            </Col>

            {/* Customer details */}
            <Col sm>
              <Modal.Body>
                <blockquote className="blockquote mb-0">
                  I will not close if you click outside me. Do not even try to press
                  escape key.
                </blockquote>
              </Modal.Body>
            </Col>

            {/* Peyment Details */}
            <Col sm>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Col>

          </Row>

        </Container>
      </Modal>
    </>
  )

}

export default OrderListModal;