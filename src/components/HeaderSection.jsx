import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

function HeaderSection() {
  const navigate = useNavigate();
  // const handleNavigate = (path) => {
  //   navigate(path);
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#BABBBA" }}
      >
        <div className="container-fluid d-flex">
          <div className="">
            <button
              onClick={toggleMenu}
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <IoCloseSharp />
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
          </div>
          <div className="">
            <a href="#intro" class="navbar-brand">
              <img src="logo.png" alt="logo" width="110" height="40" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse justify-content-center align-center"
            id="main-nav"
            onMouseOver={(e) => (e.target.style.color = "green")}
            onMouseOut={(e) => (e.target.style.color = "initial")}
          >
            <ul className="navbar-nav ">
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link h5"
                  // onClick={() => handleNavigate("")}
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link"
                  onClick={() => navigate("/orders")}
                >
                  Orders
                </a>
              </li>
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link"
                  onClick={() => navigate("/products")}
                >
                  Products
                </a>
              </li>
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link"
                  onClick={() => navigate("/orderLinks")}
                >
                  Order Links
                </a>
              </li>
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link"
                  onClick={() => navigate("/reports")}
                >
                  Reports
                </a>
              </li>
              <li
                className="nav-item pe-5"
                style={{ color: "black", fontSize: "17px", fontWeight: "500" }}
              >
                <a
                  href=""
                  className="nav-link"
                  onClick={() => navigate("/contactus")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="order-sm-3">
            <IoMdNotificationsOutline
              className="icon "
              style={{ marginRight: "10px", fontSize: "25px" }}
            />
            {"|"}
            <BsPerson
              className="icon"
              style={{
                fontSize: "25px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile")}
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-start me-1 d-lg-none">
        <div className="col-4">
          <div
            className={`collapse multi-collapse ${isMenuOpen ? "show" : ""}`}
            id="multiCollapse"
          >
            <div
              className="list-group"
              style={{ width: "200px", marginTop: "50px" }}
              id="list-tab"
              role="tablist"
            >
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "home" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="home"
              >
                Home
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "orders" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/orders")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="orders"
              >
                Orders
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "products" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/products")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="products"
              >
                Products
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "order-links" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/orderLinks")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="order-links"
              >
                Order Links
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "reports" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/reports")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="reports"
              >
                Reports
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "contact" ? "list-group-item-success" : ""
                }`}
                onClick={() => navigate("/contactus")}
                data-toggle="list"
                href="#"
                role="tab"
                aria-controls="contact"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
