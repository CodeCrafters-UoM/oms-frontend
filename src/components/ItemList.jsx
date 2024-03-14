import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import Item from "../pages/products/Item";
import AddItems from "./AddItems";
import ItemDetails from "./ItemDetails";

function ItemList() {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
  


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItemList = itemList.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItemList(updatedItemList);
    handleCloseModal();
  };

  const onRemove = (productCode) => {
    // Find the index of the item to be removed in itemList
    const itemIndexToRemove = itemList.findIndex(item => item.productCode === productCode);
    
    if (itemIndexToRemove !== -1) {
      // Create a new array without the item to be removed
      const updatedItemList = [...itemList.slice(0, itemIndexToRemove), ...itemList.slice(itemIndexToRemove + 1)];
      setItemList(updatedItemList);
    }
  };
  

  const updateItemList = (newItemList) => {
    setItemList(newItemList);
  };

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
         <AddItems updateItemList={updateItemList} />
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
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="Search"
                style={{ backgroundColor: '#BABBBB' }}
              />
            </div>
            <div className="input-group-text" style={{ backgroundColor: '#BABBBB' }}>
              <FiSearch id="search-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          {itemList.slice(0, Math.ceil(itemList.length / 2)).map((item) => (
            <tr key={item.id} onClick={() => handleItemClick(item)}>
              <td>
                <Item item={item} />
              </td>
            </tr>
          ))}
        </div>
        <div className="col-lg-6">
          {itemList.slice(Math.ceil(itemList.length / 2)).map((item) => (
            <tr key={item.id} onClick={() => handleItemClick(item)}>
              <td>
                <Item item={item} />
              </td>
            </tr>
          ))}
        </div>
      </div>

      {selectedItem && (
        <ItemDetails
        item={selectedItem}
        onUpdate={handleUpdateItem}
        onRemove={onRemove}
        onClose={handleCloseModal}
      />
      
      )}
    </>
  );
}

export default ItemList;
