import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "./store/Actions";
const AddItem = () => {
  const [itemData, updateItemData] = useState({});
  const dispatch = useDispatch();
  const changeHandler = (event, label) => {
    updateItemData(Object.assign(itemData, { [label]: event.target.value }));
  };
  const submitHandler = () => {
    let data = Object.assign(itemData, {
      id: itemData["Restaurant"] + "$" + itemData["item"],
    });
    fetch("/addItem", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status == 200) {
        fetch("/getItems")
          .then((response) => {
            return response.json();
          })
          .then((resp) => {
            dispatch(updateData(resp));
            window.location.href = "/admin";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <form style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Restaurant</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(event) => changeHandler(event, "Restaurant")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Item Name</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(event) => changeHandler(event, "item")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Price</label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(event) => changeHandler(event, "price")}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "inherit",
        }}
        onClick={submitHandler}
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
