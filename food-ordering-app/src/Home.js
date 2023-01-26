import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
const Home = () => {
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
