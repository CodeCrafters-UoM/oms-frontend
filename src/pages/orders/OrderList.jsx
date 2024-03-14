import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OrderListHeder from './OrderListHeder';
import { OrderCard } from './OrderCard';
import OrderListPagination from './OrderListPagination';
import './OrderList.css';


const OrderList = () => {

  const [search, setSearch] = useState("");
   
  // insert data section
  const [orderDetails, setOrderDetails] = useState([
    {
      date: '03/04/2023',
      time: '3.00 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'A.M Ranaweera',
      address: 'no 03/123 , paramulla , matara  ',
      status:'New',
      orderId:'110235',
      ordercode: 'D0012',
      orderDiscription: 'denim',
      quantity: '2', 
      contact: '071 3153849',
      paymentDelivery: 'cash on delivery',
      unitAmount: '2500.00 LKR',
      totalAmount: '50000.00 LKR',
      pastAllOrder: '10',
      PastMyOrder: '3',
      ReturnAllOrder: '2',
      ReturnMyOrder: '1' 
    }, 
    {
      date: '01/04/2023',
      time: '5.00pm',
      stockNo: '10023 : D003-short',
      customerName: 'T.M kumara',
      address: 'cde',
      status:'Accept',
      orderId:'110236',
      ordercode: 'D0013',
      orderDiscription: 'shirt',
      quantity: '1', 
      contact: '077 3153849',
      paymentDelivery: 'cash on delivery',
      unitAmount: '1500.00 LKR',
      totalAmount: '6000.00 LKR',
      pastAllOrder: '10',
      PastMyOrder: '3',
      ReturnAllOrder: '2',
      ReturnMyOrder: '1'
    },
    {
      date: '01/03/2023',
      time: '1.30pm',
      stockNo: '10032 : D004-short',
      customerName: 'S.A kamal',
      address: 'pmfkfk',
      status:'Deliver',
      orderId:'110294',
      ordercode: 'D0043',
      orderDiscription: 'denim',
      quantity: '3', 
      contact: '071 3254849',
      paymentDelivery: 'cash on delivery',
      unitAmount: '6350.00 LKR',
      totalAmount: '50000.00 LKR',
      pastAllOrder: '12',
      PastMyOrder: '5',
      ReturnAllOrder: '1',
      ReturnMyOrder: '0'
    },
    {
      date: '21/11/2023',
      time: '9.00pm',
      stockNo: '24023 : D021-short',
      customerName: 'P.K kapila',
      address: 'shien',
      status:'Reject',
      orderId:'320235',
      ordercode: 'D0238',
      orderDiscription: 'denim',
      quantity: '2', 
      contact: '071 3153849',
      paymentDelivery: 'cash on delivery',
      unitAmount: '2500.00 LKR',
      totalAmount: '50000.00 LKR',
      pastAllOrder: '10',
      PastMyOrder: '3',
      ReturnAllOrder: '2',
      ReturnMyOrder: '1'
    },
    {
      date: '16/08/2023',
      time: '5.00pm',
      stockNo: '10023 : D003-short',
      customerName: 'T.M siriwardena',
      address: 'colond',
      status:'New'
    },
    {
      date: '23/12/2023',
      time: '4.40pm',
      stockNo: '10023 : D003-short',
      customerName: 'S.W wijewardena',
      address: 'nitabuwa',
      status:'New'
    },
    {
      date: '23/04/2023',
      time: '5.50 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'A.M Ranaweera',
      address: 'abc',
      status:'Accept'
    },
    {
      date: '09/06/2023',
      time: '6.23 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'K.M Ranaraj',
      address: 'abc',
      status:'Accept'
    },
    {
      date: '27/01/2023',
      time: '4.45 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'S.M Sumanaweera',
      address: 'abc',
      status:'New'
    },
    {
      date: '19/09/2023',
      time: '5.57 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'O.P Amarapala',
      address: 'abc',
      status:'Accept'
    },
    {
      date: '11/04/2023',
      time: '1.49 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'R.M Sunil',
      address: 'abc',
      status:'Reject'
    },
  ]);
  
  //create tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click here to show more details ....
    </Tooltip>
  );
   
  // pagination
  const [currentPage, setrCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = orderDetails.slice(indexOfFirstPost,indexOfLastPost);


  return (

    <Container>

      {/* Order header section */}
      <div className="mt-3">
        <OrderListHeder search={search} setSearch={setSearch} />
      </div>

      <hr />

      {/* Order body section */}
      <Row>
        {           
          currentPosts.filter((orders) => {
            return search.toLowerCase() === '' ? orders : orders.customerName.toLowerCase().includes(search.toLowerCase());
          }).map((orders) => (
               <OrderCard orders = {orders} 
                          renderTooltip={renderTooltip}
                          orderDetails ={orderDetails} 
                          search ={search}/>   
         ))}
      </Row>

       {/* Order footer pagination */}
      <Row>
         <div className="d-flex justify-content-center order-3 order-lg-2">
            <div className='text-center'>
               <OrderListPagination postsPerPage={postsPerPage} 
                              totalPosts = {orderDetails.length}
                              setrCurrentPage={setrCurrentPage} 
                              currentPage={currentPage}  />
            </div>
         </div>
      </Row>

    </Container>


  )
}

export default OrderList