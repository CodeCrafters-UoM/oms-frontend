import React from "react";
import OrderLinksList from "./OrderLinksList";
import HeaderSection from "../../components/HeaderSection";
import FooterSection from "../../components/FooterSection";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";

const OrderLinks = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginBottom: "100px" }}>
          <HeaderSection />
        </div>
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1>Order Links</h1>
            </div>
            <div>
              <Form className="d-flex">
                <Form.Group controlId="formBasicSearch">
                  <InputGroup>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-0"
                      aria-label="Search"
                    />
                    <Button variant="outline-success" id="search-icon">
                      <FaMagnifyingGlass />
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <OrderLinksList />
        </div>
      </div>
      <div className="row mt-5">
        <FooterSection />
      </div>
    </>
  );
};

export default OrderLinks;
