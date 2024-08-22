import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
          alt="Decorative plant"
          className="responsive-image"
        />
        <div className="overlay-text">
          <h1>Welcome to the Blog App</h1>
          <p>Your one-stop destination for all things blog.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
