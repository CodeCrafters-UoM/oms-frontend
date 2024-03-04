import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const OrderListModal = () => { 


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'New', value: '1' },
    { name: 'Accept', value: '2' },
    { name: 'Deliver', value: '3' },
    { name: 'Reject', value: '4' },
  ];


  return (
    <>
      <Button variant="outline-success" onClick={handleShow}> more details </Button>{' '}

      <Modal
        size="lg"
        show={show}
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
              <div className="ModalHederBack">
                <div className="mx-3 my-1 d-flex">
                  <h5>Customer Details</h5>
                </div>
                <div className="mx-3 my-1">
                  <p> order id: <br />
                    00094       <br />
                    order coed : <br />
                    kt222</p>
                </div>
              </div>
            </Col>

            {/* Customer details */}
            <Col sm>
              <div className="ModalHederBack">
                <div className="mx-3 my-1 d-flex">
                  <h5>Customer Details</h5>
                </div>
                <div className="mx-3 my-1">

                </div>
              </div>
            </Col>

            {/* Peyment Details */}
            <Col sm>
              <div className="ModalHederBack">
                <div className="mx-3 my-1 d-flex">
                  <h5>Customer Details</h5>
                </div>
                <div className="">
                  <p> </p>
                </div>
              </div>
            </Col>

          </Row>

          <Row>
            <div className="text-center mx-3 my-1">

              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx === 1 ? 'outline-warning' : idx === 2 ?'outline-success' :
                             idx === 3 ?'outline-danger' : 'outline-primary' }
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>

            </div>
            <div className="text-center mx-3 mb-3">
              <small className="text-muted"> click here to change the status </small>
            </div>
          </Row>

        </Container>
      </Modal>
    </>
  )

}

export default OrderListModal;