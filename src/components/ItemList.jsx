import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import Item from "../pages/products/item";
import AddItems from "./AddItems";

function Product() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setItemList(response.data);
      } catch (error) {
        console.error("Error fetching item list:", error);
      }
    };

    fetchItemList();
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "92%",
          transform: "translate(-50%, -50%)",
          bottom: "200px",
          zIndex: "999",
        }}
      >
        <AddItems/>
      </div>
      

      <div className="row border-bottom border-muted">
        <div className="col-lg-6 ms-5">
          <h6 className="display-6 fw-bold ms-5"> Product List</h6>
        </div>
        <div className="col-lg-4 ">
          <div className=" input-group ">
            <div className="input-group-prepend">
              <input
                type="text"
                className="form-control bg-secondary"
                id="inlineFormInputGroupUsername2"
                placeholder="Search"
              />
            </div>
            <div className="input-group-text bg-secondary">
              <FiSearch id="search-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          {itemList.slice(0, Math.ceil(itemList.length / 2)).map((item) => (
            <tr key={item.id}>
              <td>
                <Item item={item} />
              </td>
            </tr>
          ))}
        </div>
        <div className="col-lg-6">
          {itemList.slice(Math.ceil(itemList.length / 2)).map((item) => (
            <tr key={item.id}>
              <td>
                <Item item={item} />
              </td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
