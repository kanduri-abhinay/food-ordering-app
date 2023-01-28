import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateData } from "./store/Actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let resp = await fetch(
      "https://food-ordering-app-server.herokuapp.com/getItems"
    );
    resp = await resp.json();
    dispatch(updateData(resp));
  }
  return (
    <div className="home-container">
      <Link to="/admin">
        <div className="home-card">Admin</div>
      </Link>
      <Link to="customer">
        <div className="home-card">Customer</div>
      </Link>
    </div>
  );
};

export default Home;
