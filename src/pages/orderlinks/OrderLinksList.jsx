import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCopy } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const OrderLinksList = () => {
  const [orderLinks, setOrderLinks] = useState([]);

  useEffect(() => {
    const fetchOrderLinks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orderlinks");
        setOrderLinks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderLinks();

    return () => {
      // Cleanup function if needed
    };
  }, []);
  const handleDeleteOrderLink = async (id) => {
    console.log("Deleting order link with id:", id);
    try {
      await axios.delete("http://localhost:8000/orderlinks/delete${id}");
      // After successful deletion, update the orderLinks state
      setOrderLinks(orderLinks.filter((link) => link.id !== id));
    } catch (error) {
      console.log("Error deleting order link:", error);
    }
  };

  return (
    <div>
      <div className="container">
        {orderLinks.map((link, index) => (
          <div
            key={link.id}
            style={{ backgroundColor: index % 2 === 0 ? "#DCEFD8" : "#ABC3A5" }}
            className="row rounded mt-4"
          >
            <div className="d-flex align-items-center justify-content-between p-3">
              <div>{link.name}</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="border-end border-dark pe-2">
                  <FaCopy />
                </div>
                <div className="pe-2 ps-2">
                  <FaTrash onClick={() => handleDeleteOrderLink(link.id)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLinksList;
