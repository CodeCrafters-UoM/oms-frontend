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
      address: 'abc'
    },
    {
      date: '01/04/2023',
      time: '5.00pm',
      stockNo: '10023 : D003-short',
      customerName: 'T.M kumara',
      address: 'cde'
    },
    {
      date: '01/03/2023',
      time: '1.30pm',
      stockNo: '10032 : D004-short',
      customerName: 'S.A kamal',
      address: 'pmfkfk'
    },
    {
      date: '21/11/2023',
      time: '9.00pm',
      stockNo: '24023 : D021-short',
      customerName: 'P.K kapila',
      address: 'shien'
    },
    {
      date: '16/08/2023',
      time: '5.00pm',
      stockNo: '10023 : D003-short',
      customerName: 'T.M siriwardena',
      address: 'colond'
    },
    {
      date: '23/12/2023',
      time: '4.40pm',
      stockNo: '10023 : D003-short',
      customerName: 'S.W wijewardena',
      address: 'nitabuwa'
    },
    {
      date: '23/04/2023',
      time: '5.50 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'A.M Ranaweera',
      address: 'abc'
    },
    {
      date: '09/06/2023',
      time: '6.23 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'K.M Ranaraj',
      address: 'abc'
    },
    {
      date: '27/01/2023',
      time: '4.45 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'S.M Sumanaweera',
      address: 'abc'
    },
    {
      date: '19/09/2023',
      time: '5.57 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'O.P Amarapala',
      address: 'abc'
    },
    {
      date: '11/04/2023',
      time: '1.49 pm ',
      stockNo: '10023 : F005-Frock',
      customerName: 'R.M Sunil',
      address: 'abc'
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
               <OrderCard orders = {orders} renderTooltip={renderTooltip}/>   
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