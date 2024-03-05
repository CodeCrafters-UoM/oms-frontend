import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const OrderListHeder = ({search,setSearch}) => {

const handleChange = (event) => {
    setSearch(event.target.value) ;
   }

return (
    <Row>
       <Col xs={6} md={4}>
           <div className="d-flex justify-content-center order-3 order-lg-2">
              <div className='text-center'>
                  <h3><b> Order List </b></h3>
              </div>
           </div>
       </Col>

       <Col xs={6} md={3}>
          <div className="d-flex justify-content-center order-3 order-lg-2">
              <div className='text-center'>
                        ICON
              </div>            
          </div>
       </Col>


       <Col xs={12} md={4}>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={handleChange}
                />
                <Button variant="outline-success"> Search </Button>
            </Form>
       </Col>
  </Row>
  );
};

export default OrderListHeder;