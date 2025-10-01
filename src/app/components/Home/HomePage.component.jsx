"use client";
import React from "react";
import "./HomePage.styles.css";
import Sidebar from "../sidebar/sidebar.component";

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="content">
          <div className="content-left">
            <h1>Community Manager</h1>
            <p>I help buisnesses grow their online presence and make data-driven <br />
               decisions. With a background in community management, data <br /> 
               analysis and digital strategy, I bring a unique perspective to every <br /> 
               project</p>
               <div className="buttons">
                 <button className="view">View Projects</button>
                 <button className="learn">Learn More</button>
               </div>
          </div>
          <div className="content-right">
            <img src="/images/home-img.png" alt="Ijeoma looking pretty" />
          </div>
        </div>
    </div>
  );
}

export default Home;