import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OrderListCusDetails = ({ setShow, show, showDetails, handleShowCusDetails, handleCloseDetails, filteredRecord }) => {

  // const [showDetails, setShowDetails] = useState(false);

  // const handleClose = () => setShowDetails(false);
  // const handleShowCusDetails = () => { 
  //     if(show){
  //       setShowDetails(true);
  //       setShow(!show) 
  //     }
  //     // setShowDetails(true);
  //   };

  return (
    <>
      {/* <Button variant="outline-success" onClick={handleShowCusDetails}> more details </Button>{' '} */}


      <Modal
        show={showDetails}
        onHide={handleCloseDetails}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
        
          <Row className="mx-3 my-3 d-flex text-center">
              <h5>Customer Details</h5>
          </Row>

          {/* <Row>
             <Col className="text-right"> 
                    <h6>Customer Name:</h6>
             </Col>
            <Col className=" cardBack text-left"> {filteredRecord.customerName}</Col>
          </Row>
         */}




          <div className="mx-4 my-6 text-center">
            {
              filteredRecord ? (
                <div>
                  <h6>Customer Name: {filteredRecord.customerName}</h6>
                  <h6>Address:{filteredRecord.address}</h6>
                  <h6>Contact:{filteredRecord.contact}</h6>
                  <h6>Past Orders(All):{filteredRecord.pastAllOrder}</h6>
                  <h6>Past Orders(My):{filteredRecord.PastMyOrder}</h6>
                  <h6>Return Orders(All):{filteredRecord.ReturnAllOrder}</h6>
                  <h6>Return Orders(My):{filteredRecord.ReturnMyOrder}</h6>
                </div>
              ) : (
                <p>No matching record found.</p>
              )
            }
          </div>
        </Modal.Body>

      </Modal>
    </>

  )
}

export default OrderListCusDetails