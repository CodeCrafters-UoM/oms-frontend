import React from "react";
import ProfileForm from "./profileForm";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center ">
          <div
            className="col-lg-6 col-md-8 col-12 bg-light border-success-subtle rounded p-2 p-md-3 p-lg-5 shadow-lg"
            style={{
              background: "linear-gradient(to top, #FCFDFC, #ACCFB1)",
            }}
          >
            <div className="row">
              <h2 className="text-center">My Profile</h2>
            </div>
            <div className="row">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;