import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Item({ item }) {
  // Receive item details as props
  return (
    <Card
      className="container-fluid col-lg-12 ms-15 p-0"
      style={{
        border: "none",
        borderBottom: "1px solid green",
        borderRadius: "0",
      }}
    >
      <Card.Body className="ps-0">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Code : {item.productCode} <br />
          Price : {item.price} LKR
        </Card.Text>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
