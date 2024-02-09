import React from "react";
import img1 from "../assets/images/home_page_img1.jpg";
import img2 from "../assets/images/home_page_img2.jpg";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="">
              <img src={img2} alt="" className="img-fluid rounded-4" />
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-first">
            <div>
              <div
                className="p-0 mt-3 mt-lg-0 fs-5 fs-lg-3 lh-sm "
                style={{ textAlign: "justify" }}
              >
                The best way to Manage your Online orders. This is a vital tool
                for businesses aiming to provide excellent customer service and
                maintain a competitive edge in the rapidly evolving world of
                e-commerce and retail.
              </div>
            </div>
            <div className="mt-lg-5">
              <div>
                <Button className="btn-success w-100 mt-3 rounded-5 fs-5 fs-lg-3">
                  Sign up
                </Button>
              </div>
              <div>
                <Button className="btn-success w-100 mt-3 rounded-5 fs-5 fs-lg-3">
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 mt-lg-5">
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <img src={img1} alt="" className="img-fluid rounded-4" />
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div>
              <div className="text-start h2">About Us</div>
              <div className="container p-0">
                <p
                  className="fs-5 fs-lg-3 lh-sm"
                  style={{ textAlign: "justify" }}
                >
                  Deleever is an Order Management System . We empower millions
                  of small scale sellers to grow their own business with best
                  technology. Bridging the gap between social media driven
                  customer request and order management. The OMS improves
                  efficiency and provide insightful tools to empower sellers to
                  excel in the world of e-commerce, despite the unique
                  challenges they face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
