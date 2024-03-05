import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiSearch } from "react-icons/fi";
import Item from './Item';


function Product() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        const response = await axios.get("http://your-backend-url/api/items");
        setItemList(response.data);
      } catch (error) {
        console.error("Error fetching item list:", error);
      }
    };

    fetchItemList();
  }, []);

  return (
    <>
     <div style={{ position: 'fixed', left: '92%', transform: 'translate(-50%, -50%)', bottom: '20px', zIndex: '999' }}>
        <button type="button" className="btn btn-success rounded-pill border btn-lg ps-5  pe-5 pt-1 pb-1">Add Item</button>
      </div>

    <div className="row border-bottom border-muted">

        <div className="col-lg-6 ms-5">
            <h6 className="display-6 fw-bold ms-5"> Product List</h6>
        </div>
    
      <div className="col-lg-4 ">
      <div className=" input-group ">
        <div className="input-group-prepend">
        <input type="text" class="form-control bg-secondary" id="inlineFormInputGroupUsername2" placeholder="Search"/>
        </div>
        <div className="input-group-text bg-secondary">
        <FiSearch id="search-icon"/>
        </div>
      </div>
      </div>
     
    </div>
   
    <div className="row ">
        <div className="col-lg-6">
        <div>
      {itemList.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
    </div>
    </div>

    </>
    
  );
}

export default Product