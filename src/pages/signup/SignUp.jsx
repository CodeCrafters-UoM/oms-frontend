import React from "react";
import logo from "../../../public/logo.png";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div>
      <div className="container mb-2">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3 mb-lg-5 mb-3">
            <img src={logo} alt="" className="img-fluid" />
          </div>
        </div>
        <div
          className="row border-success-subtle rounded"
          style={{ boxShadow: "1px 1px 1px 1px" }}
        >
          <div className="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0 mt-lg-0 mt-3">
            <img
              src="../../../public/signup_small_img1.jpeg"
              alt="Small Screen Image"
              className="d-block d-lg-none img-fluid rounded img-thumbnail"
            />
            {/* Image for large screens */}
            <img
              src="../../../public/signup_large_img.jpg"
              alt="Large Screen Image"
              className="d-none d-lg-block img-fluid rounded img-thumbnail"
            />
          </div>
          <div className="col-lg-6 mt-3 ">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center">
                <h2>Sign up</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="d-flex justify-content-center align-items-center">
                <p>
                  <small>Hey enter your details to create your account</small>
                </p>
              </div>
            </div>
            <div className="row mb-3 ">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
