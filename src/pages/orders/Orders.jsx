import { set } from "husky";
import React from "react";
import { useState } from "react";

const Orders = () => {
  const userId = JSON.parse(sessionStorage.getItem("user")).id;

  const [orderDetails, setOrderDetails] = useState([]);

  if (!userId) {
    return <div>Unauthorized</div>;
  }

  if (userId) {
    const getOrderDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/orders/${userId}`);
        console.log(res);
        setOrderDetails(res.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  }

  return <div>{userId}</div>;
};

export default Orders;
