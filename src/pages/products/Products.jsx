// import React from "react";
import React from 'react';
import FooterSection from "../../components/FooterSection";
import HeaderSection from "../../components/HeaderSection";
import ItemList from "../../components/ItemList";


const Products = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="row">
        <HeaderSection />
      </div>
      <div style={{ marginTop: "90px" }}>
        <div className="row mb-5"> 
          <ItemList/>
        </div>
      </div>
      {/* <div style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: '20px', zIndex: '999' }}>
         <button type="button" className="btn btn-success rounded-pill border btn-lg ps-5  pe-5 pt-1 pb-1">Add Item</button>
      </div> */}
      <div className="row" >
        <FooterSection />
      </div>
    </div>
  );
};



export default Products;
