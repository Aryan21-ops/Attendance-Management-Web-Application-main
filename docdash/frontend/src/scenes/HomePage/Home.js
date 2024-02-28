import React from "react";
import Navbar from "./Navbar";
import { MovingComponent } from "react-moving-text";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="text-white  vh-100" >
      <Navbar />
      <div>
        <div className="container text-center">
          <h1 className="mt-5">
            Welcome to the Document Tracking System
          </h1>
          <p className="mt-2" style={{ fontSize: "22px" }}>
            Explore our website and Get Started
          </p>
        </div>
        <div className="home-container">
          <div className="left" style={{"width":"90%"}}>
            <MovingComponent
              type="swing"
              duration="2000ms"
              delay="1s"
              direction="alternate"
              timing="ease-in-out"
              iteration="infinite"
              fillMode="backwards"
            >
              <img src="" alt="" />
              <h1>
                DocDash
                <img src="../../assets/logo.png" style={{"width":"150px", "marginTop":"-55px" }}/>
              </h1>
            </MovingComponent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
