import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import OrderListCusDetails from './OrderListCusDetails';

const OrderListModal = ({ orderDetails, orders }) => {


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

  //  event
  const handleClick = () => {
    handleShow();
    handleFilter();
  }

  // filter one persion
  const [filteredRecord, setFilteredRecord] = useState(null);

  const handleFilter = () => {
    const filterCondition = (record) => record.customerName === orders.customerName;
    const filteredRecords = Object.values(orderDetails).filter(filterCondition);
    if (filteredRecords.length > 0) {
      setFilteredRecord(filteredRecords[0]);
    } else {
      setFilteredRecord(null);
    }
  };

  return (
    // must be change value order unique name - orders.customerId
    <>
      <Button variant="outline-success" onClick={handleClick} value={orders.customerName}> more details </Button>{' '}

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
                <div className="mx-3 my-3 d-flex">
                  <h5>Customer Details</h5>
                </div>
                <div className="mx-3 my-3">
                  {
                    filteredRecord ? (
                      <div>
                        <h6>Order id: <br /><span>{filteredRecord.orderId}</span></h6>
                        <h6>Order Code: <br /><span>{filteredRecord.ordercode} </span></h6>
                        <h6>Order description: <br /><span>{filteredRecord.orderDiscription}</span></h6>
                        <h6>Quantity: <br /><span> {filteredRecord.quantity}</span></h6>
                      </div>
                    ) : (
                      <p>No matching record found.</p>
                    )
                  }
                </div>
              </div>
            </Col>

            {/* Customer details */}
            <Col sm>
              <div className="ModalHederBack">
                <div className="mx-3 my-3 d-flex">
                  <h5>Customer Details</h5>
                </div>
                <div className="mx-3 my-3">
                  {
                    filteredRecord ? (
                      <div>
                        <h6>Customer Name: <br /><span>{filteredRecord.customerName}</span></h6>
                        <h6>Address: <br /><span>{filteredRecord.address} </span></h6>
                        <h6>Contact: <br /><span>{filteredRecord.contact}</span></h6>
                      </div>
                    ) : (
                      <p>No matching record found.</p>
                    )
                  }
                </div>
                
                 {/* button */}
                <div className="text-center mx-3 my-3">
                  
                    <OrderListCusDetails />


                           
                </div>


              </div>
            </Col>

            {/* Peyment Details */}
            <Col sm>
              <div className="ModalHederBack">
                <div className="mx-3 my-3 d-flex">
                  <h5>Payment Details</h5>
                </div>
                <div className="mx-3 my-3">
                  {
                    filteredRecord ? (
                      <div>
                        <h6>Payment Method: <br /><span>{filteredRecord.paymentDelivery}</span></h6>
                        <h6>Unit Amount: <br /><span>{filteredRecord.unitAmount} </span></h6>
                        <h6>Total Amount: <br /><span>{filteredRecord.totalAmount}</span></h6>
                      </div>
                    ) : (
                      <p>No matching record found.</p>
                    )
                  }
                </div>
              </div>
            </Col>

          </Row>

          <Row>
            <div className="text-center mx-3 my-3">

              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx === 1 ? 'outline-warning' : idx === 2 ? 'outline-success' :
                      idx === 3 ? 'outline-danger' : 'outline-primary'}
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