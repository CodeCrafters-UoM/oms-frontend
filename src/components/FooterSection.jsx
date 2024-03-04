import React from "react";
import Card from "react-bootstrap/Card";
import boostrap from "bootstrap/dist/css/bootstrap.min.css";

function FooterSection() {
  return (
    <>
      <Card style={{ left: 0, bottom: 0, width: "100%" }}>
        <Card.Body style={{ backgroundColor: "#BABBBA" }}>
          <div className="row">
            <div className="col-lg-4 col-6 d-flex flex-column justify-content-start order-1 order-lg-1">
              <div className="text-start m-1">
                <a href="#" className="text-dark text-decoration-none">
                  Terms and conditions
                </a>
              </div>
              <div className="text-start m-1">
                <a href="#" className="text-dark text-decoration-none">
                  Privacy Policy
                </a>
              </div>
              <div className="text-start m-1">
                <a href="#" className="text-dark text-decoration-none">
                  Cookies
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 d-flex justify-content-center order-3 order-lg-2">
              <div className="text-center">
                <img
                  src="logo.png"
                  width="110"
                  height="40"
                  alt="Company-logo"
                  style={{ marginRight: "40px" }}
                />
                <img
                  src="play_store.png"
                  width="120"
                  height="auto"
                  alt="play store image"
                />
              </div>
            </div>

            <div className="col-lg-4  col-6  d-flex flex-column justify-content-end order-2 order-lg-3">
              <div className="text-end m-1">
                <a
                  href="#"
                  className="text-dark text-decoration-none fw-bold normal"
                >
                  Quick Links
                </a>
              </div>
              <div className="text-end m-1">
                <a href="#" className="text-dark text-decoration-none ">
                  Contact Us
                </a>
              </div>
              <div className="text-end m-1">
                <a href="#" className="text-dark text-decoration-none ">
                  About Us
                </a>
              </div>
            </div>
          </div>

          <div></div>
        </Card.Body>
        <Card.Footer
          className="text-muted text-center fw-bold normal"
          style={{ backgroundColor: "#919391" }}
        >
          @{new Date().getFullYear()} | All rights Reserved | Web Design and
          Develop by Code Crafters
        </Card.Footer>
      </Card>
    </>
  );
}

export default FooterSection;
