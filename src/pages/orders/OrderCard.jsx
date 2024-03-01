import React from 'react'
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import OrderListModal from './OrderListModal';

export const OrderCard = ({ orders, renderTooltip }) => {
    return (
        <Card className="cardBack mx-4 my-3 d-flex rounded-4" style={{ width: '30rem', overflow: 'hidden' }}
            key={orders.id} >
            <Card.Body style={{ padding: 0, position: 'relative' }}>
                <div className="" style={{
                    height: '2rem', backgroundColor: '#04952D',
                    position: 'absolute', top: 0, right: '-12px', width: '150px',
                    borderBottomLeftRadius: '50px'
                }}>
                    <div className="justify-content-center">
                        <p className="text-center" style={{ color: 'white' }}> New  </p>
                    </div>
                </div>
                <div>
                    <Card.Text className="mx-4 my-4">
                        <h6> {orders.time} </h6>
                        <h6> {orders.date} </h6>
                        <h6> {orders.stockNo} </h6>
                        <h6> {orders.customerName} </h6>
                        <h6> {orders.address} </h6>
                    </Card.Text>

                    {/* card button */}
                    <OverlayTrigger
                        className="text-center"
                        placement="top"
                        delay={{ show: 5, hide: 4 }}
                        overlay={renderTooltip}
                    >
                        <div className="text-center mx-3 my-3">
                            <OrderListModal />
                        </div>
                    </OverlayTrigger>
                </div>

            </Card.Body>
        </Card>
    )
}
