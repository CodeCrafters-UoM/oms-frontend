// import React from "react";
import React from "react";
import FooterSection from "../../components/FooterSection";
import ProfilePage from "./ProfilePage";
import HeaderSection from "../../components/HeaderSection";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div className="row">
            <HeaderSection />
          </div>
          <div style={{ marginTop: "90px" }}>
            <div className="row mb-5">
              <ProfilePage/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <FooterSection />
      </div>
    </>
  );
};

export default Profile;
