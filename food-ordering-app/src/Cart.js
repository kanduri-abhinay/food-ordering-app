import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/ItemCard.css";
import "./styles/Cart.css";
import home from "./images/home.png";
import { Link } from "react-router-dom";
import { removeCartItem } from "./store/Actions";
import { emptyCart } from "./store/Actions";
function Cart(props) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  function orderHandler() {
    if (cartData.length > 0) {
      alert("Order placed succesfully");
      dispatch(emptyCart());
    }
  }
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <Link to="/customer">
          <img src={home} className="home-img" />
        </Link>
        Cart Items
      </div>

      <div className="cart-items-container">
        {cartData &&
          cartData.map((item) => (
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
                onClick={() => dispatch(removeCartItem(item))}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
      <button type="button" class="btn btn-success" onClick={orderHandler}>
        Place Order
      </button>
    </div>
  );
}

export default Cart;
