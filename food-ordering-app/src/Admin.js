import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/Admin.css";
import { updateData } from "./store/Actions";
import { connect } from "react-redux";
import "./styles/ItemCard.css";
function Admin(props) {
  const dispatch = useDispatch();
  const totalData = useSelector((state) => state.data);
  const deletItem = (removeitem) => {
    let modifyData = totalData.filter((item) => item["id"] != removeitem["id"]);
    fetch("https://food-ordering-app-server.herokuapp.com/removeItem", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors",
      body: JSON.stringify(removeitem),
    }).then((response) => {
      if (response.status === 0) {
        dispatch(updateData(modifyData));
      }
    });
  };
  return (
    <div className="admin-container">
      <Link to="/admin/add-item">
        <button type="button" className="btn btn-success add-item-btn">
          Add Item
        </button>
      </Link>
      <div className="admin-items-container">
        {totalData &&
          totalData.map((item) => (
            <div key={item["id"]} className="item-card">
              <div>
                <div className="item-title">Restaurant</div>
                <div>{item.Restaurant}</div>
              </div>
              <div>
                <div className="item-title">Item</div>
                <div>{item.item}</div>
              </div>
              <div>
                <div className="item-title">Price</div>
                <div>{item.price}</div>
              </div>
              <button
                className="btn btn-danger item-btn"
                onClick={() => deletItem(item)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Admin);
