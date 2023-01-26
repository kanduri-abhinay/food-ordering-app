import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/Admin.css";
import { updateData } from "./store/Actions";
import { connect } from "react-redux";
function Admin(props) {
  const dispatch = useDispatch();
  //   const data = useSelector((state) => state.data);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let resp = await fetch("/getItems");
    resp = await resp.json();
    dispatch(updateData(resp));
  }
  //   console.log(props.data);
  return (
    <div className="admin-container">
      <Link to="/admin/add-item">
        <button type="button" className="btn btn-success add-item-btn">
          Add Item
        </button>
      </Link>
      <div className="admin-items-container"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Admin);
