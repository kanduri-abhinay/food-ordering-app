import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/ItemCard.css";
import "./styles/Customer.css";
import search from "./images/search.png";
import cart from "./images/cart.png";
import { addCartItem } from "./store/Actions";
function filterData(data, item) {
  return data.filter((rec) => rec["id"] == item["id"]).length > 0;
}
function Customer(props) {
  const dispatch = useDispatch();
  const totalData = useSelector((state) => state.data);
  const cartData = useSelector((state) => state.cartData);
  const [searchData, updateSearchData] = useState(totalData);
  const [searchText, updateSearchText] = useState("");
  function onChangeHandler(e) {
    updateSearchText(e.target.value);
  }
  function filterSearchData() {
    let data = totalData.filter(
      (rec) =>
        rec["Restaurant"].toLowerCase().includes(searchText.toLowerCase()) ||
        rec["item"].toLowerCase().includes(searchText.toLowerCase())
    );
    data = data.filter((rec) => !filterData(cartData, rec));
    updateSearchData(data);
  }
  useEffect(() => {
    filterSearchData();
  }, [totalData, cartData, searchText]);
  return (
    <div className="customer-container">
      <header>
        <div className="search-container">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Restaurant or Item"
              name="search"
              value={searchText}
              onChange={onChangeHandler}
            />
          </div>
          <img
            src={search}
            style={{
              height: "30px",
              margin: "5px",
              cursor: "pointer",
              position: "relative",
              left: "-14%",
              zIndex: "1000",
            }}
          />
        </div>
        <div>
          <Link to="/customer/cart">
            <img src={cart} style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </header>
      <div className="customer-items-container">
        {searchData &&
          searchData.map((item) => (
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
                className="btn btn-success item-btn"
                style={{ width: "fit-content" }}
                onClick={() => dispatch(addCartItem(item))}
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Customer;
